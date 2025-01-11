import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { loginUser, handleGoogleLogin } = useContext(AuthContext);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log("user in Login=====>: ", user);
        e.target.reset();
        setSuccessMessage("Registration success");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // console.log(error.message);
        setErrorMessage(error.message.split("auth/")[1].replace(")", ""));
      });
  };
  const googleLogingHandler = () => {
    handleGoogleLogin().then((res) => {
      navigate(location?.state ? location.state : "/");
    });
  };
  return (
    <div className="flex justify-center my-12">
      <Helmet>
        <title>Login page</title>
      </Helmet>
      <div className=" card bg-base border border-base-300 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body pb-2">
          <h2 className="text-center font-semibold text-lg">
            Login Your Account
          </h2>
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
            <label className="label">
              <Link
                to={"/forgotPassword"}
                className="label-text-alt link link-hover"
              >
                Forgot Password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-yellow-400 border-none text-black hover:bg-yellow-500">Login</button>
          </div>
        </form>

        {/* Login in with google */}
        <div className="flex justify-center">
          <button className="btn w-10/12 mx-auto bg-yellow-400 border-none text-black hover:bg-yellow-500" onClick={googleLogingHandler}>
            {" "}
            <span>
              <FaGoogle />
            </span>{" "}
            Sign in With Google
          </button>
        </div>

        <div className="flex justify-center pb-5">
          Do not have an account?
          <Link className="text-yellow-400 ml-1" to="/register">
            Register
          </Link>
        </div>

        <div className="text-center mb-4">
          <p className="text-green-600">{successMessage}</p>
          <p className="text-red-600">{errorMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
