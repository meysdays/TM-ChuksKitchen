// import React from 'react'
import welcomeImg from "../assets/images/Welcome.png";
import footerImage from "../assets/images/footerimg.png";
import SearchInput from "../ui/search-input";
import { Category, Chef } from "../data";
import Card from "../component/Card";
import { useState } from "react";

const OnboardingScreen = () => {
  const [showAll, setShowAll] = useState(false);

  // const visibleItems = showAll ? Category : Category.slice(0, 3);

  const isMobile = window.innerWidth < 768; // simplistic example
  const visibleItems = isMobile && !showAll ? Category.slice(0, 3) : Category;

  return (
    <section>
      <div
        className="h-screen bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `url(${welcomeImg})`,
          position: "relative",
          top: -25,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="text-white flex flex-col justify-between items-start w-5/6 lg:w-1/2 h-1/4 lg:h-1/3 z-10 mx-12 ">
          <h1 className="font-bold text-4xl lg:text-5xl">
            The Heart of Nigerian Home Cooking
          </h1>
          <p className="font-normal lg:font-bold text-[18px] lg:text-3xl">
            Handcrafted with passion, delivered with care.
          </p>
          <button className="py-4 px-4 rounded-xl cursor-pointer bg-[#FF7A18] text-sm font-medium hover:opacity-90">
            Discover what's new
          </button>
        </div>
      </div>
      <div className=" w-11/12 lg:w-3/6 mx-auto relative bottom-15">
        <SearchInput />
      </div>

      <div className="w-5/6 mx-auto">
        <h3 className="text-center text-3xl font-bold">Popular Categories</h3>
      </div>

      <div className="flex flex-wrap gap-8 justify-center mt-8">
        {visibleItems.map((item) => (
          <div key={item.name} className=" mx-6 md:w-1/3 lg:w-1/4">
            <Card name={item.name} img={item.img} />
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="mt-6 text-center md:hidden">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 bg-[#FF7A18] text-white rounded-xl"
          >
            View All
          </button>
        </div>
      )}

      <div className="w-5/6 mx-auto mt-48">
        <h3 className="text-center text-3xl font-bold">Chef's Specials</h3>
      </div>

      <div className="flex flex-wrap gap-8 justify-center mt-8">
        {Chef.map((item) => (
          <div key={item.name} className="mx-6 md:w-1/3 lg:w-1/4">
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
        className="h-screen bg-cover bg-center bg-no-repeat flex items-center mt-24"
        style={{
          backgroundImage: `url(${footerImage})`,
          position: "relative",
          // top: -25,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="text-white flex flex-col justify-between items-start  w-5/6 lg:w-1/2 h-1/4 lg:h-1/3 z-10 mx-12 ">
          <h1 className="font-bold text-4xl lg:text-5xl ">
            Introducing Our New Menu Additions!
          </h1>
          <p className="font-medium text-2xl mt-4">
            Explore exciting new dishes, crafted with the freshest ingredients
            and authentic Nigerian flavors. Limited time offer!
          </p>
          <button className="py-4 px-4 rounded-xl cursor-pointer bg-[#FF7A18] text-sm font-medium hover:opacity-90 mt-4">
            Discover what's new
          </button>
        </div>
      </div>
    </section>
  );
};

export default OnboardingScreen;
