import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Prizes = () => {
  const { obj } = useContext(AuthContext);
  console.log(obj);
  return (
    <div>
      <div className="bg-[#eef2ff] py-12">
        <h1 className="text-4xl font-semibold text-center my-4">Prizes</h1>
        <p className="text-xl font-semibold text-center my-2">
          Below are the total prize amounts for each category
        </p>
      </div>
      <div className="container mx-auto mt-24">
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
                <h1 className="text-3xl ml-4">Mobile App</h1>
              </div>
            </div>
            <div className="divider text-xl font-semibold">Prize</div>
            <p className="font-semibold text-3xl text-center">$200</p>
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
            <div className="divider text-xl font-semibold">Prize</div>
            <p className="font-semibold text-3xl text-center">$300</p>
          </div>
          <div className="bg-violet-300 p-4">
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
            <div className="divider text-xl font-semibold">Prize</div>
            <p className="font-semibold text-3xl text-center">$500</p>
          </div>
          <div className="bg-emerald-400 p-4 mb-24">
            <div className="flex">
              <div>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={"https://i.ibb.co/8MM1bfB/Rectangle-4288.png"} />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-3xl mt-6 ml-4">Best Beginner</h1>
              </div>
            </div>
            <div className="divider text-xl font-semibold">Prize</div>
            <p className="font-semibold text-3xl text-center">$100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
