import details from "../assets/images/details.png";
import time from "../assets/images/time.png";
const FoodDetails = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row md:-mb-17">
        <div
          className="h-[50vh] md:h-[115vh] w-full md:w-1/2 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${details})`,
          }}
        ></div>

        <div className=" w-full md:w-1/2">
          <div className="w-11/12 md:w-5/6 mx-auto my-4 bg-white py-2 px-3 ">
            <h2 className="text-2xl font-bold mt-6">Jollof Rice with Fried Chicken</h2>
            <p className="text-[#FF7A18] text-xl font-semibold">₦2,800</p>
            <p className="my-4">
              Our signature Jollof rice, cooked to perfection with aromatic
              spices, served with juicy, golden-fried chicken. A classic
              Nigerian comfort food, rich in flavor and satisfying. Perfect for
              a quick lunch or a hearty dinner.
            </p>

            <div className="flex flex-row justify-between mx-3 w-5/6 ">
              <div className="flex flex-row items-center">
                <div>
                  <img src={time} alt="" />
                </div>
                <p className="ml-1">Mildly spicy</p>
              </div>
              <div className="flex flex-row items-center">
                <div>
                  <img src={time} alt="" />
                </div>
                <p className="ml-1">Mildly spicy</p>
              </div>
              <div className="flex flex-row justify-between">
                <div>
                  <img src={time} alt="" />
                </div>
                <p className="ml-1">Mildly spicy</p>
              </div>
            </div>

            <div className="mt-4">
              <h2 className="text-2xl font-semibold">Choose Your Protein</h2>

              <div className="flex flex-col justify-between space-y-4 mt-4">
                <div className="border border-gray-300 p-2 flex items-center rounded-2xl">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="protein"
                      id="chicken"
                      className="hidden peer"
                    />
                    <div className="w-6 h-6 rounded-full border-4 border-gray-400 flex items-center justify-center peer-checked:border-orange-500">
                      <div className="w-2.5 h-2.5 bg-orange-500 rounded-full scale-0 peer-checked:scale-100 transition" />
                    </div>
                    <span>Chicken</span>
                  </label>
                </div>
                <div className="border border-gray-300 p-2 flex items-center rounded-2xl">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="protein"
                      id="chicken"
                      className="hidden peer"
                    />
                    <div className="w-6 h-6 rounded-full border-4 border-gray-400 flex items-center justify-center peer-checked:border-orange-500">
                      <div className="w-2.5 h-2.5 bg-orange-500 rounded-full scale-0 peer-checked:scale-100 transition" />
                    </div>
                    <span>Grilled Fish</span>
                  </label>
                </div>
                <div className="border border-gray-300 p-2 flex items-center rounded-2xl">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="protein"
                      id="chicken"
                      className="hidden peer"
                    />
                    <div className="w-6 h-6 rounded-full border-4 border-gray-400 flex items-center justify-center peer-checked:border-orange-500">
                      <div className="w-2.5 h-2.5 bg-orange-500 rounded-full scale-0 peer-checked:scale-100 transition" />
                    </div>
                    <span>Beef</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h2 className="text-2xl font-semibold">Extra Sides (Optional)</h2>

              <div className="flex flex-col justify-between space-y-4 mt-4">
                <div className="border border-gray-300 p-2 flex items-center rounded-2xl">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="sides"
                      id="chicken"
                      className="hidden peer"
                    />
                    <div className="w-6 h-6 rounded-md border border-gray-400 flex items-center justify-center peer-checked:border-orange-500">
                      <div className="w-2.5 h-2.5 bg-orange-500 rounded-full scale-0 peer-checked:scale-100 transition" />
                    </div>
                    <span>Chicken</span>
                  </label>
                </div>
                <div className="border border-gray-300 p-2 flex items-center rounded-2xl">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="protein"
                      id="chicken"
                      className="hidden peer"
                    />
                    <div className="w-6 h-6 rounded-md border border-gray-400 flex items-center justify-center peer-checked:border-orange-500">
                      <div className="w-2.5 h-2.5 bg-orange-500 rounded-full scale-0 peer-checked:scale-100 transition" />
                    </div>
                    <span>Grilled Fish</span>
                  </label>
                </div>
                <div className="border border-gray-300 p-2 flex items-center rounded-2xl">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="protein"
                      id="chicken"
                      className="hidden peer"
                    />
                    <div className="w-6 h-6 rounded-md border border-gray-400 flex items-center justify-center peer-checked:border-orange-500">
                      <div className="w-2.5 h-2.5 bg-orange-500 rounded-full scale-0 peer-checked:scale-100 transition" />
                    </div>
                    <span>Beef</span>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xl mb-4 mt-6">
                Special Instructions for Restaurant
              </p>
              <div className="">
                <input
                  className="w-full py-6 px-2 border-2 border-gray-200 rounded-md"
                  type="text"
                  placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhh
food is tasty"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDetails;
