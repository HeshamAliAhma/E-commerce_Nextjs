import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { LuBadgeCheck,LuBadgeX  } from "react-icons/lu";

function ProductInfo({ product }) {
  return (
    <div className="mt-4">
      <h1 className="text-3xl">{product?.attributes?.Title}</h1>
      <p className="mb-4 mt-2 text-gray-400">{product?.attributes?.Catigory}</p>
      <p>{product?.attributes?.Description[0]?.children[0]?.text}</p>
      <h2 className="text-[11px] text-gray-500 flex gap-2 mt-2 items-center">
        {product?.attributes?.instantDelivery ? (
            <LuBadgeCheck className="text-2xl text-green-600"/>
        ) : (
<LuBadgeX className="text-2xl text-red-600"/>
        )}
        Eligible For Instant Delivery
        </h2>
      <p className="text-2xl my-2 text-primary font-bold">$ {product?.attributes?.price}</p>
      <button className="flex items-center gap-2 bg-primary text-white hover:bg-primaryHover rounded-md p-4">
        <CiShoppingCart className="text-2xl"/>
        Add To Cart
        </button>
    </div>
  );
}

export default ProductInfo;
