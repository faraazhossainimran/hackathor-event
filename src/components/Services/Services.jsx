import ServiceCard from "../ServiceCard/ServiceCard";

const Services = ({ data }) => {
//   console.log(data);
  return (
    <div className="container mx-auto">
        <h1 className="text-4xl font-semibold text-center my-12">Our service</h1>
      <div className=" grid m-4 md:m-0 grid-rows md:grid-cols-3 gap-8">
      {data.map((aData) => (
        <ServiceCard key={aData.id} aData={aData}></ServiceCard>
      ))}
      </div>
    </div>
  );
};

export default Services;
