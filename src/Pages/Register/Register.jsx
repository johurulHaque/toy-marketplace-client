import React, { useContext, useState } from "react";
import "./Register.css";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, googleSign, updateUser, allSignOut } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
//   const [pass, setPass] = useState("password");

  const handleRegister = (event) => {
    setError("");
    setSuccess("");
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const photoURL = form.photoURL.value;

    if (email === "" || password === "") {
      setError("Email or Password cant be empty.");
      return;
    } else if (password.length < 6) {
      setError("Password must be in six character.");
      return;
    } else if (password != confirmPassword) {
      setError("Confirm Password doesn't match.");
      return;
    }
    // console.log({ name, email, password, confirmPassword, photoURL });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();

        updateUserProfile(user, {
          displayName: name,
          photoURL: photoURL,
        });

        setSuccess("successfully register the user");
        // navigate(from);
        handleSignOut();
        navigate("/login");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  const updateUserProfile = (user, obj) => {
    updateUser(user, obj)
      .then(() => {
        // console.log(user);
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };



  
  const handleGoogle = () => {
    googleSign()
      .then((result) => {
        const user = result.user;
        setSuccess("user has create successfully");
        navigate(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        // console.log(errorMessage);
      });
  };

  const handleSignOut = () => {
    allSignOut()
      .then(() => {
        // setUser(null);
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  //   const showPass = () => {
  //     setPass("text");
  //   };
  //   const hidePass = () => {
  //     setPass("password");
  //   };
  return (
    <div className="register-form">
      <h2 className="text-2xl font-bold mb-4">Please Register here</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="input input-bordered"
          />
        </div>
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
        <div className="mb-6">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            className="input input-bordered"
          />
        </div>
        <div className="mb-6">
          <input
            type="url"
            id="photoURL"
            name="photoURL"
            placeholder="Enter Photo url"
            className="input input-bordered"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      <span className="text-green-500">{success}</span>
      <span className="text-red-500">{error}</span>
      <button  onClick={handleGoogle}  className="btn btn-primary">
        Sing With Google <FaGoogle />
      </button>
    </div>
  );
};

export default Register;
