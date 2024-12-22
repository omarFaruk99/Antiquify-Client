import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, updateUserData, handleGoogleLogin } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");

    const photoUrl = form.get("photoUrl");
    const email = form.get("email");
    const password = form.get("password");
    // Password validation regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@?$&])(?=.{6,})/;

    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must be at least 6 characters, include one special character, an uppercase, and a lowercase letter."
      );
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        // console.log("user in Register: ", user);
        e.target.reset();
        setSuccessMessage("Registration success");
        setErrorMessage(null); // Clear any previous error messages
        updateUserData({ displayName: name, photoURL: photoUrl });
        navigate("/");
      })
      .catch((error) => {
        // console.log(error.message);
        setErrorMessage(error.message);
      });
  };

  //sign up with google
  const googleLogingHandler = () => {
    handleGoogleLogin().then((res) => {
      navigate(location?.state ? location.state : "/");
    });
  };

  return (
    <div className=" flex justify-center mt-28">
      <div className="card bg-[#f0f8ff] w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <h2 className="text-center font-semibold text-lg">
            Register Your Account
          </h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
              name="name"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
              name="photoUrl"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              name="password"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>

        {/* Login in with google */}
        <div className="flex justify-center">
          <button className="btn btn-accent" onClick={googleLogingHandler}>
            {" "}
            <span>
              <FaGoogle />
            </span>{" "}
            Sign in With Google
          </button>
        </div>

        <div className="flex justify-center pb-5">
          Already have an account?
          <Link className="text-orange-600 ml-1" to="/login">
            Login
          </Link>
        </div>
        <div className="text-center mb-4 p-2 pt-0">
          <p className="text-green-600">{successMessage}</p>
          <p className="text-red-600">{errorMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
