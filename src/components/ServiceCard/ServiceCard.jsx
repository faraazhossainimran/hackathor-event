import { Link } from "react-router-dom";

const ServiceCard = ({ aData }) => {
  const { id, title, details, description, image } = aData;
  //   console.log(aData);
  return (
    <div className="">
      <Link to={`/service-details/${id}`}>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src={image}
              alt={`image of ${title}`}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="text-[19px]">
              {description} 
            </p>
            <div className="card-actions justify-end">
              {/* <button className="btn btn-primary">Buy Now</button> */}

            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
