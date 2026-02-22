import exploreImg from "../assets/images/exploreimg.png";
import Card from "../component/Card";
import SectionDropdown from "../component/section-dropdown";
import { Chef } from "../data";
const ExplorePage = () => {
  return (
    <section>
      <div className="h-[70vh]">
        <div className="flex h-full">
          <div
            className="w-full bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${exploreImg})`,
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 text-white flex flex-col justify-center h-full px-12 space-y-6">
              <h1 className="font-bold text-5xl">Chuks Kitchen</h1>
              <p className="font-medium text-2xl">
                Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)
              </p>
              <button className="py-4 px-6 rounded-xl bg-[#FF7A18] text-sm font-medium hover:opacity-90 w-fit">
                Discover what's new
              </button>
            </div>
          </div>

          {/* 30% Empty Side */}
          {/* <div className="w-[30%] bg-gray-100"></div> */}
        </div>
      </div>

      <div>
        <div className="mx-auto w-5/6 mt-12">
          <SectionDropdown />
        </div>

        <section id="popular">
          <p className="ml-40 font-bold text-2xl mt-4 -mb-8">Popular</p>
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
        </section>
      </div>
    </section>
  );
};

export default ExplorePage;
