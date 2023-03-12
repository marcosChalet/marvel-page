import React, { useContext } from "react";
import { ComicsContext } from "../../context/ComicsContext";
import ComicsClass from "../../core/ComicsClass";
import { CloseIcon } from "../ui/Icons";
import { CartContext } from "../../context/CartContext";

export default function DetalhesQuadrinho() {
  const cartContext = useContext(CartContext);
  const selectedComics = useContext(ComicsContext);

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="relative flex h-[400px] w-[90%] flex-col items-center justify-evenly rounded-md bg-red-900 p-5 sm:w-2/3 md:h-2/4 lg:h-[450px] lg:w-[600px]">
        <button
          className="absolute right-4 top-4 transition ease-in hover:scale-110"
          onClick={() => selectedComics.setComics(ComicsClass.empty())}
        >
          {CloseIcon}
        </button>
        <h1 className="mb-5 text-2xl">{selectedComics.comics.title}</h1>
        <p className="overflow-y-auto text-center text-lg">
          {selectedComics.comics.description !== ""
            ? selectedComics.comics.description
            : "Does not have a description..."}
        </p>
        <button
          className="mt-4 rounded-md bg-yellow-600 py-3 px-2 text-lg font-bold uppercase text-slate-800 transition ease-in hover:scale-105 sm:px-20"
          onClick={() => cartContext.addToCart(selectedComics.comics)}
        >
          add to cart
        </button>
      </div>
    </div>
  );
}
