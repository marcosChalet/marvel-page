import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart({ children }: { children: JSX.Element }) {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <>
      <button
        className="peer relative z-20 ml-5 h-6 w-6"
        onClick={() => navigate("/checkout")}
      >
        <span
          className={
            "absolute -top-3 -right-3 text-xs font-bold text-slate-300"
          }
        >
          {cartContext.cart.length > 0 ? cartContext.cart.length : ""}
        </span>
        {children}
      </button>
      <div className="absolute right-3 top-16 hidden max-w-[250px] flex-col flex-nowrap overflow-hidden bg-slate-400 hover:flex peer-hover:flex">
        {cartContext.cart.map((item) => {
          return (
            <p
              key={item.id}
              className="mb-0.5 inline bg-slate-700 p-2 text-slate-400"
            >
              {item.title}
            </p>
          );
        })}
      </div>
    </>
  );
}
