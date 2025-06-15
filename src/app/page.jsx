import Link from "next/link";
import data from "./data";

export default async function Home() {
  let products = Object.entries(data);

  return (
    <div>
      <ul className="flex flex-col m-3 gap-2.5">
        {products.map((product, index) => {
          return (
            <Link
              href={`/${product[0]}`}
              className=""
              key={product[1][index].id}
            >
              {product[0]}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
