import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetailPage = ({ find }) => {
  const { title,details, description, image  } = find;
  // if(loading){
  //     return <span className="loading loading-ring loading-lg"></span>
  // }
  return (
    <div className="">
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage:
            `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-semibold">We offer {title}</h1>
            <p className="mb-5 text-2xl mx-32">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-24">
        <p className="text-2xl md:mx-32">{details}</p>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
