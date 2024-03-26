const Testimonials = () => {
  const testimonials = [
    {
      name: "William Noah",
      designation: "Founder", 
      company: "Katno", 
      review: "I recently participated in a hackathon organized by Hackathon Event, and it was an absolutely fantastic experience!", 
      image: "https://eventornado-files.ams3.cdn.digitaloceanspaces.com/static/images/testimonials/testimonial_maria_rahamagi.jpeg",
    }, 
    {
      name: "Thomas Henry",
      designation: "Programmar", 
      company: "Pro Code", 
      review: "I attended the hackathon organized by Hackathon Event as a seasoned software engineer, looking for a way to challenge myself and explore new technologies.", 
      image: "https://eventornado-files.ams3.cdn.digitaloceanspaces.com/static/images/testimonials/testimonials_ricky_marton.jpeg",
    }, 
    {
      name: "James David",
      designation: "Coordinator", 
      company: "Taskado", 
      review: "I had the pleasure of taking part in my first hackathon ever, organized by Hackathon Event, and it exceeded all my expectations!", 
      image: "https://eventornado-files.ams3.cdn.digitaloceanspaces.com/static/images/testimonials/testimonials_michele_erba.jpeg",
    }, 

  ]
  return (
    <div className="container mx-auto md:mb-24">
       <h1 className="text-4xl font-semibold text-center my-12">What Heros Say About Us</h1>
      <div className="grid grid-rows m-4 md:m-0 md:grid-cols-3 gap-4">
        {testimonials.map((testimonial, index)=><div key={index} className="bg-[#f3f9fb] p-4 shadow-xl">
      <div className="flex">
        <div>
          <div className="avatar">
            <div className="w-20 rounded-full">
              <img src={testimonial.image} />
            </div>
          </div>
        </div>
        <div>
        <h1 className="text-3xl mt-4 ml-4">{testimonial.name}</h1>
        <p className="ml-4">{testimonial.designation} - {testimonial.company}</p>
        </div>
        
      </div>
      <p className="text-[#6c757d]">{testimonial.review} </p>
      </div>)}
      </div>
    </div>
  );
};

export default Testimonials;
