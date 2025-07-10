import CartClient from "./CartClient";

export function generateMetadata() {
  return {
    title: "user cart",
    description: "this a user cart",
    openGraph: {
      title: "user cart social media",
      description: "this a user cart social media",
    },
  };
}

export default function Cart() {
  return <CartClient />;
}
