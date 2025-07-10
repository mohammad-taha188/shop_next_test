import Link from "next/link";
import AddToCart from "./AddToCart";



export default function ProductsList({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-2.5 ">
      {products.map((product) => {
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
            <AddToCart product={product} />
            <br />
            <Link href={`/products/${product.id}`}>
              <button className="btn btn-yellow cursor-pointer ">
                product details
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
