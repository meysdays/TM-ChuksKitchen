import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
    const navigate = useNavigate();
  return (
    <div className="w-11/12 md:w-3/5 mx-auto bg-white py-2 px-3 my-28">
      <div className="border-b-2 border-gray-200 pb-2">
        <h2 className="font-bold text-2xl">Order Summary</h2>
      </div>

      <div className="flex flex-col mt-6">
        <p className="text-xl mb-2">Add a Promo Code</p>
        <div className="flex flex-row justify-between">
          <div className="w-3/4 border-2 border-gray-200 rounded-md p-2">
            <input type="text" placeholder="Enter Code here" />
          </div>
          <button className="bg-[#FF7A18] px-13 py-2 rounded-md text-white">
            Login
          </button>
        </div>
      </div>

      <div className="flex flex-col mt-8 border-b-2 border-gray-200">
        <div className="flex flex-row justify-between mb-1">
          <p>Subtotal</p>
          <p>₦9,200</p>
        </div>
        <div className="flex flex-row justify-between mb-1">
          <p>Delivery Fee</p>
          <p>₦500</p>
        </div>
        <div className="flex flex-row justify-between mb-1">
          <p>Service Fee</p>
          <p>₦200</p>
        </div>
        <div className="flex flex-row justify-between mb-1">
          <p>Tax</p>
          <p>₦0</p>
        </div>
      </div>

      <div className="flex flex-row justify-between mb-4 mt-4 font-bold text-xl">
        <h4>Total</h4>
        <p>₦9,900</p>
      </div>

      <div className="flex mb-4">
        <div className="bg-[#FF7A18] w-1/2 text-center p-2 rounded-l-md text-white">
          <button>Delivery</button>
        </div>
        <div className="bg-[#BDBDBD] w-1/2 text-center p-2 rounded-r-md text-white">
          <button>Pickup</button>
        </div>
      </div>

      <div>
        <p className="text-xl mb-2">Special Instructions for Restaurant</p>
        <div className="">
          <input
            className="w-full py-6 px-2 border-2 border-gray-200 rounded-md"
            type="text"
            placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhh
food is tasty"
          />
        </div>
      </div>

      <div className="bg-[#FF7A18] text-center py-3 rounded-md mt-6 text-white cursor-pointer" onClick={() => navigate("/delivery")}>
        <button >Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
