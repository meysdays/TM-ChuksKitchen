import UpdateCheckout from "../component/update-checkout";
import plus from "../assets/images/blueplus.png";
import { Cart } from "../data";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
  const navigate = useNavigate();
  return (
    <div className="w-11/12 mx-auto bg-white my-16 py-8 px-2">
      <h2 className="font-bold text-2xl">Your Cart</h2>

      {Cart.map((item, index) => (
        <div
          key={index}
          className="border-2 border-gray-300 px-4 py-1 mb-2 rounded-md"
        >
          <UpdateCheckout
            name={item.name}
            img={item.img}
            description={item.description}
            price={item.price}
          />
        </div>
      ))}

      <div className="flex flex-row items-center justify-between">
        <div className="text-[#1E88E5] flex flex-row items-center">
          <div className="w-4 h-4">
            <img src={plus} alt="" className="w-full object-cover" />
          </div>
          <p className="ml-2">Add more items from Chuks Kitchen</p>
        </div>
        <div className="bg-[#FF7A18] px-6 py-2 rounded-md cursor-pointer">
          <button onClick={() => navigate("/checkout")}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
