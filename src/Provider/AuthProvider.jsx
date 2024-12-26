import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Google Auth Provider
  const googleProvider = new GoogleAuthProvider();

  // create an accout using email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login an accout using email and password
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Login with google
  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //set auth state 'observer'
  // useEffect(() => {
  //   onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     setLoading(false);
  //   });
  // }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log("state captured", currentUser?.email);

      if (currentUser?.email) {
        const user = { email: currentUser.email };
        // Send a POST request to the server to get a JWT for the user
        axios
          .post("https://antiquify-server.vercel.app/jwt", user, { withCredentials: true })
          // The client allows `withCredentials: true` to send cookies with the request.
          // The server must be configured to accept and verify cookies for authentication.
          .then((res) => {
            // console.log("login token===> ", res.data);
            setLoading(false);
          });
      } else {
        axios
          .post("https://antiquify-server.vercel.app/logout", {}, { withCredentials: true })
          .then((res) => {
            // console.log("logout===> ", res.data);
            setLoading(false);
          });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  //update profile
  const updateUserData = (updateDatas) => {
    return updateProfile(auth.currentUser, updateDatas);
  };

  // rend password
  const handleSendPasswordResetEmail = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // signout
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        // console.log(error.message);
      });
  };

  // console.log(user);

  const contextInfo = {
    createUser,
    loginUser,
    setUser,
    user,
    userSignOut,
    loading,
    updateUserData,
    handleGoogleLogin,
    handleSendPasswordResetEmail,
  };
  return (
    <AuthContext.Provider value={contextInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
