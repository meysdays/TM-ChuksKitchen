import { useNavigate } from "react-router-dom";

const DeliveryPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-11/12 md:w-3/5 mx-auto bg-white py-8 px-3 my-28">
      <div className="border-b-2 border-gray-200 pb-2">
        <h2 className="font-bold text-2xl">Delivery Details</h2>
      </div>

      <div className="mt-4">
        <input
          className="w-full py-6 px-2 border-2 border-gray-200 rounded-md"
          type="text"
          placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhh
food is tasty"
        />
      </div>

      <div className="mt-6">
        <p className="text-md font-semibold mb-2">Delivery Time</p>
        <div className="">
          <input
            className="w-full py-3 px-2 border-2 border-gray-200 rounded-md"
            type="text"
            placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhh
food is tasty"
          />
        </div>
      </div>
      <div className="mt-6">
        <p className="text-md font-semibold mb-2">Delivery Instructions (Optional)</p>
        <div className="">
          <input
            className="w-full py-6 px-2 border-2 border-gray-200 rounded-md"
            type="text"
            placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhh
food is tasty"
          />
        </div>
      </div>
      <div className="mt-6">
        <p className="text-md font-semibold mb-2">Contact Address</p>
        <div className="">
          <input
            className="w-full py-3 px-2 border-2 border-gray-200 rounded-md"
            type="text"
            placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhh
food is tasty"
          />
        </div>
      </div>

      <div className="bg-[#FF7A18] text-center py-3 rounded-md mt-6 text-white cursor-pointer" onClick={() => navigate("/delivery")}>
        <button >Complete Payment</button>
      </div>
    </div>
  );
};

export default DeliveryPage;
