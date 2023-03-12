import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

import { ArrowLeftIcon, CheckMark, TrashIcon } from "../ui/Icons";

function RenderCart() {
  const cartContext = useContext(CartContext);
  return (
    <>
      {cartContext.cart.length === 0 ? (
        <p className="bg-slate-600 p-3">empty cart...</p>
      ) : (
        cartContext.cart.map((item, idx) => {
          return (
            <ul key={item.id}>
              <li
                className={`flex justify-between p-3 ${
                  idx % 2 === 0 ? "bg-slate-600" : "bg-slate-700"
                }`}
              >
                <p>{item.title}</p>
                <button
                  onClick={() => cartContext.removeItem(item)}
                  className="text-[#ca8a04] hover:scale-110"
                >
                  {TrashIcon}
                </button>
              </li>
            </ul>
          );
        })
      )}
    </>
  );
}

export default function OrderList() {
  const navigate = useNavigate();

  return (
    <>
      <button className="mb-10 h-16 w-11" onClick={() => navigate("/")}>
        {ArrowLeftIcon}
      </button>
      <div className="mb-3 flex items-center">
        {CheckMark}
        <h1 className="pl-3 text-2xl uppercase">order list</h1>
      </div>

      <div className="w-full overflow-hidden rounded-md">
        <RenderCart />
      </div>
    </>
  );
}
