import React from "react";
import { Link } from "react-router-dom";

const SignUpBanner = ({heading}) => {
  return (
    <div>
      <div
        className="hero rounded-2xl my-12"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/py5Bt26/lorenzo-herrera-p0j-m-E6m-Go4-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl p-6">
            <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
            <p className="mb-5 text-xl">
              At Hackathon Event, we are on a mission to inspire innovation,
              creativity, and collaboration through the power of hackathons.
            </p>
            <button className="btn btn-primary">
              <Link to={"/register"}>Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpBanner;
