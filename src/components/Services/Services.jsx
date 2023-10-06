import ServiceCard from "../ServiceCard/ServiceCard";

const Services = ({ data }) => {
  console.log(data);
  // console.log(service);
  return (
    <div className="container mx-auto">
        <h1 className="text-4xl font-semibold text-center my-12">Our service</h1>
      {data.map((aData) => (
        <ServiceCard key={aData.id} aData={aData}></ServiceCard>
      ))}
    </div>
  );
};

export default Services;
