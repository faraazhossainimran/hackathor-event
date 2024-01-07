const Testimonials = () => {
  return (
    <div className="container mx-auto md:mb-24">
       <h1 className="text-4xl font-semibold text-center my-12">What Heros Say About Us</h1>
      <div className="grid grid-rows m-4 md:m-0 md:grid-cols-3 gap-4">
      <div className="bg-[#f3f9fb] p-4">
      <div className="flex">
        <div>
          <div className="avatar">
            <div className="w-20 rounded-full">
              <img src={"https://eventornado-files.ams3.cdn.digitaloceanspaces.com/static/images/testimonials/testimonial_maria_rahamagi.jpeg"} />
            </div>
          </div>
        </div>
        <div>
        <h1 className="text-3xl mt-4 ml-4">William Noah</h1>
        <p className="ml-4">Founder - katno</p>
        </div>
        
      </div>
      <p className="text-[#6c757d]">I recently participated in a hackathon organized by Hackathon Event, and it was an absolutely fantastic experience! </p>
      </div>
      <div className="bg-[#f3f9fb] p-4">
      <div className="flex">
        <div>
          <div className="avatar">
            <div className="w-20 rounded-full">
              <img src={"https://eventornado-files.ams3.cdn.digitaloceanspaces.com/static/images/testimonials/testimonials_ricky_marton.jpeg"} />
            </div>
          </div>
        </div>
        <div>
        <h1 className="text-3xl mt-4 ml-4">Thomas Henry</h1>
        <p className="ml-4">Programmar - Pro Code</p>
        </div>
        
      </div>
      <p className="text-[#6c757d]">I attended the hackathon organized by Hackathon Event as a seasoned software engineer, looking for a way to challenge myself and explore new technologies. </p>
      </div>
      <div className="bg-[#f3f9fb] p-4">
      <div className="flex">
        <div>
          <div className="avatar">
            <div className="w-20 rounded-full">
              <img src={"https://eventornado-files.ams3.cdn.digitaloceanspaces.com/static/images/testimonials/testimonials_michele_erba.jpeg"} />
            </div>
          </div>
        </div>
        <div>
        <h1 className="text-3xl mt-4 ml-4">James David</h1>
        <p className="ml-4">Coordinator - Taskado</p>
        </div>
        
      </div>
      <p className="text-[#6c757d]">I had the pleasure of taking part in my first hackathon ever, organized by Hackathon Event, and it exceeded all my expectations!</p>
      </div>
      </div>
    </div>
  );
};

export default Testimonials;
