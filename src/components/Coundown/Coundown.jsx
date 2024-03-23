import React from "react";
import { Link } from "react-router-dom";

const Coundown = () => {
  return (
    <div className="my-12">
      <div
        className="hero h-[300px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/0BqQSZp/andras-vas-Bd7g-Nn-WJBk-U-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-4xl font-bold">
             Know About Hackathon Event
            </h1>
            <h1 className="text-xl font-semibold my-4">Our Next event is about in 12 days</h1>
            <button className="btn btn-primary"><Link to={"/hackathons"}>More Details</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coundown;
