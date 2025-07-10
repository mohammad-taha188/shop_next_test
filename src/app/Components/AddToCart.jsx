"use client";
import { useEffect, useState } from "react";

export default function AddToCart({ product, color = "red" }) {
  let [isToCart, setIsToCart] = useState("");
  let [clicked, setClicked] = useState(false);

  useEffect(() => {
    setIsToCart(
      JSON.parse(localStorage?.getItem("products")).find((p) => {
        return p.id == product.id;
      })
    );
  }, []);

  return !isToCart ? (
    !clicked ? (
      <button
        className={`btn btn-${color} cursor-pointer`}
        onClick={() => {
          let prev = localStorage.getItem("products");

          let products = prev ? JSON.parse(prev) : [];

          if (!products.includes(product)) {
            products.push(product);
            localStorage.setItem("products", JSON.stringify(products));
          }
          setClicked(true);
        }}
      >
        add to cart
      </button>
    ) : (
      <p className="bg-gray-500 text-center m-auto p-2 rounded-sm cursor-not-allowed select-none">
        this item added to cart
      </p>
    )
  ) : (
    <p className="bg-gray-500 text-center m-auto p-2 rounded-sm cursor-not-allowed select-none">
      this item added to cart
    </p>
  );
}
