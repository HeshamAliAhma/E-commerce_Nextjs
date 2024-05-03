import Image from "next/image";
import React from "react";

function ProductBanner({ product }) {
  return (

    <>
    {
      product?.attributes?.banner?.data?.attributes?.url ? (
        <div className="border-primary">
        <Image src={product?.attributes?.banner?.data?.attributes?.url} alt={'product image'} width={500} height={500}  className="rounded-lg border-primary"/>
      </div>
      ) : (
        <div className="bg-gray-300 w-[400px] h-[300px] animate-pulse rounded-lg">
        </div>
      )
    }


    </>
  );
}

export default ProductBanner;

