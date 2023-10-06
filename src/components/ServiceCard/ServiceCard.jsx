const ServiceCard = ({ aData }) => {
  const { id, title, details } = aData;
  console.log(aData);
  return (
    <div>
        
      <div className="card w-[100%] lg:card-side m-4">
        <figure className="w-[50%]">
          <img
            className="w-[600px]"
            src="https://images.unsplash.com/photo-1523582407565-efee5cf4a353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{title}</h2>
          <p className=""></p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
