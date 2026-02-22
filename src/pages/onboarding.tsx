// import React from 'react'
import welcomeImg from "../assets/images/Welcome.png";
import footerImage from "../assets/images/footerimg.png";
import SearchInput from "../ui/search-input";
import { Category, Chef } from "../data";
import Card from "../component/Card";

const OnboardingScreen = () => {
  return (
    <section>
      <div
        className="h-screen  bg-size-[100%_100%] bg-no-repeat flex items-center"
        style={{
          backgroundImage: `url(${welcomeImg})`,
          position: "relative",
          top: -25,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="text-white flex flex-col justify-between items-start w-1/2 h-1/3 z-10 mx-12 ">
          <h1 className="font-bold text-5xl">
            The Heart of Nigerian Home Cooking
          </h1>
          <p className="font-bold text-[34px]">
            Handcrafted with passion, delivered with care.
          </p>
          <button className="py-4 px-4 rounded-xl cursor-pointer bg-[#FF7A18] text-sm font-medium hover:opacity-90">
            Discover what's new
          </button>
        </div>
      </div>
      <div className="relative bottom-15">
        <SearchInput />
      </div>

      <div className="w-5/6 mx-auto">
        <h3 className="text-center text-3xl font-bold">Popular Categories</h3>
      </div>

      <div className="flex flex-wrap gap-8 justify-center mt-8">
        {Category.map((item) => (
          <div key={item.name} className="w-1/2 md:w-1/3 lg:w-1/4">
            <Card name={item.name} img={item.img} />
          </div>
        ))}
      </div>

      <div className="w-5/6 mx-auto mt-48">
        <h3 className="text-center text-3xl font-bold">Chef's Specials</h3>
      </div>

      <div className="flex flex-wrap gap-8 justify-center mt-8">
        {Chef.map((item) => (
          <div key={item.name} className="w-1/2 md:w-1/3 lg:w-1/4">
            <Card
              name={item.name}
              img={item.img}
              description={item.description}
              price={item.price}
            />
          </div>
        ))}
      </div>

      <div
        className="h-screen  bg-size-[100%_100%] bg-no-repeat flex items-center mt-24"
        style={{
          backgroundImage: `url(${footerImage})`,
          position: "relative",
          // top: -25,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="text-white flex flex-col justify-between items-start  h-1/3 z-10 mx-12 ">
          <h1 className="font-bold text-5xl">
            Introducing Our New Menu Additions!
          </h1>
          <p className="font-medium text-2xl w-1/2">
            Explore exciting new dishes, crafted with the freshest ingredients
            and authentic Nigerian flavors. Limited time offer!
          </p>
          <button className="py-4 px-4 rounded-xl cursor-pointer bg-[#FF7A18] text-sm font-medium hover:opacity-90">
            Discover what's new
          </button>
        </div>
      </div>
    </section>
  );
};

export default OnboardingScreen;
