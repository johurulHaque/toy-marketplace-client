// import { FaceFrownIcon } from '@heroicons/react/24/solid'
import React from "react";
import { Link, useRouteError } from "react-router-dom";

// import errorLottie from "../../assets/error.json";
import "./ErrorPage.css";
const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div  className="p-5">
          {/* <Lottie animationData={errorLottie} loop={true} /> */}
        </div>
        <div  className="p-0">
          <div className="errorPage">
            <div>
              <h2 className="chef_text">
                <span>
                  We fatch some problem to serve you, we are waiting to see you
                  soon.
                </span>
                {status || 404}
              </h2>
              <p>{error?.message}</p>
              <Link to="/">
                <button>Back to home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
