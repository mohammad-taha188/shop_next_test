import data from "@/app/data";

export default async function page({ params }) {
  let { category, product } = await params;

  let thisProduct = data[category].find((productInfo) => {
    return productInfo.name == product;
  });

  return (
    <div className="m-5 flex gap-5 flex-col">
      <div className="flex justify-between">
        <h2>name : {thisProduct.name}</h2>
        <h2>price : {thisProduct.price}$</h2>
      </div>
      <h2>desc : {thisProduct.desc}</h2>
    </div>
  );
}
