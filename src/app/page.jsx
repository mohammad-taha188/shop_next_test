import ProductsList from "./Components/ProductsList";

export function generateMetadata() {
  return {
    title: "shop",
    description: "this a shop",
    openGraph: {
      title: "shop social media",
      description: "this a shop social media",
    },
  };
}

export default async function Home() {
  let res = await fetch("https://fakestoreapi.com/products");
  let products = await res.json();

  return (
    <div className="">
      <ProductsList products={products} />
    </div>
  );
}
