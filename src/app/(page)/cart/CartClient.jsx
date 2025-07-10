"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartClient() {
  let [products, setProducts] = useState();
  let [remover, setRemover] = useState(0);

  function getTotalPrice() {
    let total = 0;
    products?.forEach((p) => (total += p.price));
    return total.toFixed(2);
  }

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("products") || "[]"));
  }, [remover]);

  return (
    <div className="">
      <br />
      <h2 className="text-center">total price : {getTotalPrice()}$</h2>
      <div className="w-full h-0.5 bg-black"></div>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-2.5 ">
        {products?.map((product) => {
          return (
            <div
              key={product.id}
              className="border m-3 flex items-center flex-col h-auto p-2.5 shadow-sm rounded-sm bg-gray-50"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40  bg-contain rounded-sm"
              />
              <h2>{product.title}</h2>
              <h2>{product.price}$</h2>
              <br />
              <div className="flex flex-col items-center gap-2">
                <button
                  onClick={() => {
                    let items = JSON.parse(localStorage.getItem("products"));
                    let newProducts = items.filter((item) => {
                      return item.id !== product.id;
                    });
                    localStorage.setItem(
                      "products",
                      JSON.stringify(newProducts)
                    );
                    setRemover(Math.random() * 100000000000);
                  }}
                  className="btn btn-red"
                >
                  remove product
                </button>
                <Link href={`/products/${product.id}`}>
                  <button className="btn btn-yellow cursor-pointer ">
                    product details
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
