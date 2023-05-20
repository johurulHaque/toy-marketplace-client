// import { FaceFrownIcon } from '@heroicons/react/24/solid'
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import lottieError from "../../assets/404-page.json";
import Lottie from "lottie-react";
import "./ErrorPage.css";
const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-10">
      <div>
        <Lottie animationData={lottieError} loop={true} />
      </div>

      <div>
        <h2 className="text-4xl text-sky-400">Page Not Found</h2>
        <p className="text-2xl">Status code: {status || 404}</p>
        <p className="text-2xl">
          Error: <span className="text-red-400"> {error?.message}</span>
        </p>
        <Link to="/">
          <button className="btn btn-outline btn-info ">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
