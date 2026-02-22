import type { card } from "../definitions/definitions";
import plus from "../assets/images/plus.png";
import minus from "../assets/images/name.png";
import cancel from "../assets/images/cancel.png";

const UpdateCheckout = ({ name, img, description, price }: card) => {
  return (
    <div className="flex justify-between items-center">
      <div className=" flex flex-row items-center w-2/5">
        <div className="w-28 h-28 rounded-md overflow-hidden">
          <img src={img} alt="" className="w-full h-full object-cover" />
        </div>
        <div className=" ml-8">
          <h4 className="font-bold text-2xl mb-2">{name}</h4>
          <p>{description}</p>
        </div>
      </div>

      <div className="flex items-center justify-between space-x-2 w-1/8">
        <button className="p-1 rounded-md bg-[#BDBDBD]">
          <img src={plus} alt="" />
        </button>
        <p className="font-bold text-3xl">1</p>
        <button className="py-3 px-1.5 rounded-md bg-[#BDBDBD]">
          <img src={minus} alt="" />
        </button>
      </div>

      <div className="text-[#FF7A18] font-bold text-xl">
        <p>{price}</p>
      </div>

      <div>
        <button>
          <img src={cancel} alt="" />
        </button>
      </div>
    </div>
  );
};

export default UpdateCheckout;
