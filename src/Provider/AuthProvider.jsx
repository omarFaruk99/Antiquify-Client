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
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
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
