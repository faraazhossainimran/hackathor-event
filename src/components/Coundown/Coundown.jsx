import React from "react";
import { Link } from "react-router-dom";

const Coundown = () => {
  return (
    <div className="my-12">
      <div
        className="hero h-[300px]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2030&q=80)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-4xl font-bold">
             Join Us on the Journey
            </h1>
            <button className="btn btn-primary"><Link to={"/register"}>Get Started</Link></button>
            <h1 className="text-3xl font-semibold my-4">Next event is about in 12 days</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coundown;
