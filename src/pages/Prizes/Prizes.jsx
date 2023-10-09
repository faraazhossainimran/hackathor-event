import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const Prizes = () => {
    const {obj} = useContext(AuthContext)
    console.log(obj);
    return (
        <div>
            <div className="bg-[#eef2ff] py-12">
            <h1 className="text-4xl font-semibold text-center my-4">Prizes</h1>
            <p className="text-xl font-semibold text-center my-2">Below are the total prize amounts for each category</p>
            </div>
            <div className="container mx-auto mt-8">
            <div className="grid grid-rows m-4 md:m-0 md:grid-cols-3 gap-4">
      <div className="bg-sky-400 p-4">
      <div className="flex">
        <div>
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={"https://i.ibb.co/8MM1bfB/Rectangle-4288.png"} />
            </div>
          </div>
        </div>
        <div>
        <h1 className="text-3xl mt-6 ml-4">Mobile App</h1>
        </div>
        
      </div>
      <p>I recently participated in a hackathon organized by Hackathon Event, and it was an absolutely fantastic experience! </p>
      </div>
      <div className="bg-yellow-400 p-4">
      <div className="flex">
        <div>
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={"https://i.ibb.co/8MM1bfB/Rectangle-4288.png"} />
            </div>
          </div>
        </div>
        <div>
        <h1 className="text-3xl mt-6 ml-4">Desktop App</h1>
        </div>
        
      </div>
      <p>I attended the hackathon organized by Hackathon Event as a seasoned software engineer, looking for a way to challenge myself and explore new technologies. </p>
      </div>
      <div className="bg-emerald-400 p-4">
      <div className="flex">
        <div>
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={"https://i.ibb.co/8MM1bfB/Rectangle-4288.png"} />
            </div>
          </div>
        </div>
        <div>
        <h1 className="text-3xl mt-6 ml-4">IOS App</h1>
        </div>
        
      </div>
      <p>I had the pleasure of taking part in my first hackathon ever, organized by Hackathon Event, and it exceeded all my expectations!</p>
      </div>
      </div>
            </div>
        </div>
    )
}

export default Prizes 