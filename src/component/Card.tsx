import { useNavigate } from "react-router-dom";
import { type card } from "../definitions/definitions";

// const Card = ({ name, img, description, price }: card) => {
//   return (
//     <div className="flex bg-white rounded-2xl">
//       <div className="">
//         <div className=" bg-red-200">
//           <img src={img} alt="" />
//         </div>

//         <div className="">
//           {description ? (
//             <div className="flex-col justify-between m-2">
//               <div>
//                 <h2 className="font-bold">{name}</h2>
//                 <p>{description}</p>
//               </div>
//               <div>
//                 <div className=" flex-row justify-between">
//                   <p>{price}</p>
//                   <button className="py-3.5 px-14 bg-[#FF7A18] font-medium text-sm">
//                     Add to cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="flex bg-amber-300 justify-center ">
//               <p>{name}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

const Card = ({ name, img, description, price }: card) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl ">
      <div className="">
        <img src={img} alt={name} />
      </div>

      {description ? (
        <div className="flex flex-col justify-between p-4  space-y-3">
          <div>
            <h2 className="font-medium text-lg mb-1">{name}</h2>
            <p className="text-sm text-gray-600">{description}</p>
          </div>

          <div className="flex justify-between items-center mt-6 py-4">
            <p className="font-semibold text-[#FF7A18]">{price}</p>
            <button
              className="px-8 py-3 bg-[#FF7A18] text-white rounded-lg text-sm font-medium cursor-pointer"
              onClick={() => navigate("/details")}
            >
              Add to cart
            </button>
          </div>
        </div>
      ) : (
        <div className="p-4 lg:p-18 text-center">
          <p className="font-medium">{name}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
