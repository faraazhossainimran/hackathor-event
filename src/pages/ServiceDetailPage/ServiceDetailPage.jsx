import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SignUpBanner from "../../components/SignUpBanner/SignUpBanner";

const ServiceDetailPage = ({ find }) => {
  const { title,details, description, image  } = find;
  // if(loading){
  //     return <span className="loading loading-ring loading-lg"></span>
  // }
  return (
    <div className="">
      <div
        className="hero md:h-[600px]"
        style={{
          backgroundImage:
            `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-2xl md:text-5xl font-semibold">We offer {title}</h1>
            <p className="mb-5 md:text-2xl md:mx-32">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-8 md:my-24">
        <p className="mx-8 text-md md:text-2xl md:mx-32">{details}</p>
        <SignUpBanner heading={"Participate on Event"}></SignUpBanner>
      </div>
      
    </div>
  );
};

export default ServiceDetailPage;
