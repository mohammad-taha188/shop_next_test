import data from "../data";
import Link from "next/link";

export default async function Category({ params }) {
  let { category } =await params;

  let products = Object.entries(data);

  let categoryName = products.find((product) => product[0] == category);

  return (
    <ul className="flex flex-col m-3 gap-2.5">
      {categoryName[1].map((product) => {
        return (
          <Link href={`/${categoryName[0]}/${product.name}`} key={product.id}>
            {product.name}
          </Link>
        );
      })}
    </ul>
  );
}
