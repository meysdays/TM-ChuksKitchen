import type { card } from "../definitions/definitions";
import plus from "../assets/images/plus.png";
import minus from "../assets/images/name.png";
import cancel from "../assets/images/cancel.png";

const UpdateCheckout = ({ name, img, description, price }: card) => {
  return (
    <div className="flex  items-center">
      <div className="flex flex-row items-center md:w-1/8">
        <div className="w-30 h-28 md:w-28 md:h-28 rounded-md overflow-hidden mr-4">
          <img src={img} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex-1 ">
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="md:w-2/8 mb-3 md:mb-0">
            <h4 className="font-bold text-xl md:text-2xl md:mb-2">{name}</h4>
            <p>{description}</p>
          </div>

          <div className="flex items-center justify-between space-x-2 md:w-3/8 mb-3 md:mb-0">
            <button className="p-1 rounded-md bg-[#BDBDBD]">
              <img src={plus} alt="" />
            </button>
            <p className="font-bold text-3xl">1</p>
            <button className="py-3 px-1.5 rounded-md bg-[#BDBDBD]">
              <img src={minus} alt="" />
            </button>
          </div>

          <div className="flex flex-row justify-between items-center md:w-1/6">
            <div className="text-[#FF7A18] font-bold text-xl">
              <p>{price}</p>
            </div>

            <button>
              <img src={cancel} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCheckout;
