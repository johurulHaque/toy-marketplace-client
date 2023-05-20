import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import Lottie from "lottie-react";
import lottieLogin from "../../assets/lottiefile.json";

const Login = () => {
  const { signIn, googleSign } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        form.reset();
        setSuccess("Successfully Login.");
        navigate(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  const handleGoogle = () => {
    googleSign()
      .then((result) => {
        const user = result.user;
        navigate(from);
        // setSuccess("user has create successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        // console.log(errorMessage);
      });
  };
  return (
    <div className="register-form">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
              />
            </div>
            <button
              type="submit"
              className="bg-[#09ccd0] px-4 py-2 rounded text-white"
            >
              Login
            </button>
            <Link to="/register">or Register</Link>
          </form>
          <span className="text-green-500">{success}</span>
          <span className="text-red-500">{error}</span>
        </div>

        <Lottie animationData={lottieLogin} loop={true} />
      </div>

      <button
        onClick={handleGoogle}
        className="bg-[#09ccd0] px-6 py-2 rounded text-white"
      >
        <span className="flex items-center gap-3">
          Sing With Google{" "}
          <span className="text-[#ff6f69] font-bold text-2xl">
            {" "}
            <FaGoogle />
          </span>
        </span>
      </button>
    </div>
  );
};

export default Login;
