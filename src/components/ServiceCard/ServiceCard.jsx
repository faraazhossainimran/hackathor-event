import { Link } from "react-router-dom";

const ServiceCard = ({ aData }) => {
  const { id, title, description, image, price } = aData;
  //   console.log(aData);
  return (
    <div className="">
      {/* <Link > */}
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src={image}
              alt={`image of ${title}`}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">{title}</h2>
            <p className="text-[19px] pb-4">
              {description} 
            </p>
            <div className="card-actions">
              <button className="btn">{price ? <p className="font-bold">Package Price: ${price}</p> : <p className="font-bold">Price: Free</p>}</button>
              
              <button className="btn btn-primary font-semibold"><Link to={`/service-details/${id}`}>See Details</Link></button>
            </div>
            <div>
       
      </div>
          </div>
        </div>
      {/* </Link> */}
    </div>
  );
};

export default ServiceCard;
