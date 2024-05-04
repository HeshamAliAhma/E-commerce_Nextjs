'use client';
import React, {useContext} from "react";
import { CiShoppingCart } from "react-icons/ci";
import { LuBadgeCheck, LuBadgeX } from "react-icons/lu";
import Sekelton from "./Sekelton";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import cartAPIs from "../../../../utils/cartAPIs";
import { CartContext } from "../../../../context/CartContext";


function ProductInfo({ product }) {
  const { user } = useUser();
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);
  const handleAddToCart = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      // loginc to add to cart
      const data = {
        data: {
          userName: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: [product.id],
        },
      };
      cartAPIs
        .addToCart(data)
        .then((res) => {
          console.log("cart create successfully");
          setCart((oldCart) => [
            ...oldCart,
            {
              id: res.data.data.id,
              product,
            },
          ]);
        })
        .catch((err) => {
          console.log("error" + err);
        });
    }
  };
  return (
    <div className="mt-4">
      {product.id ? (
        <>
          <h1 className="text-3xl">{product?.attributes?.Title}</h1>
          <p className="mb-4 mt-2 text-gray-400">
            {product?.attributes?.Catigory}
          </p>
          <p>{product?.attributes?.Description[0]?.children[0]?.text}</p>
          <h2 className="text-[11px] text-gray-500 flex gap-2 mt-2 items-center">
            {product?.attributes?.instantDelivery ? (
              <LuBadgeCheck className="text-2xl text-green-600" />
            ) : (
              <LuBadgeX className="text-2xl text-red-600" />
            )}
            Eligible For Instant Delivery
          </h2>
          <p className="text-2xl my-2 text-primary font-bold">
            $ {product?.attributes?.price}
          </p>

          <button
            onClick={() => handleAddToCart()}
            className="flex items-center gap-2 bg-primary text-white hover:bg-primaryHover rounded-md p-4"
          >
            <CiShoppingCart className="text-2xl" />
            Add To Cart
          </button>
        </>
      ) : (
        <Sekelton />
      )}
    </div>
  );
}

export default ProductInfo;
