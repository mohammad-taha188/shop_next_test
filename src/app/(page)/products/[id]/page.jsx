import AddToCart from "@/app/Components/AddToCart";
import Back from "@/app/Components/Back";

export async function generateStaticParams() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const products = await res.json();

  let ids = products.map((product) => {
    return { id: product.id.toString() };
  });
  return ids;
}

export default async function page({ params }) {
  let { id } = await params;

  let res = await fetch(`https://fakestoreapi.com/products/${id}`);
  let products = await res.json();

  return (
    <div className="flex flex-col items-center gap-4 ">
      <img
        src={products.image}
        alt={products.title}
        className="max-h-[500px] rounded-sm object-contain"
      />
      <h1 className="text-2xl">{products.title}</h1>
      <h1 className="text-2xl">{products.price}$</h1>
      <h1 className="text-2xl">⭐{products.rating.rate}</h1>
      <div className="flex gap-2">
        <AddToCart product={products} color={"green"} />
        <Back title="back" />
      </div>
    </div>
  );
}
export async function generateMetadata({ params }) {
  let { id } = await params;
  let res = await fetch(`https://fakestoreapi.com/products/${id}`);
  let products = await res.json();

  return {
    title: products.title,
    description: products.description,
    openGraph: {
      title: `${products.title} social media`,
      description: `${products.description} social media`,
    },
  };
}
