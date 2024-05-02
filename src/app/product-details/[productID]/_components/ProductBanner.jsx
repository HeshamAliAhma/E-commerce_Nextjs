import Image from "next/image";
import React from "react";

function ProductBanner({ product }) {
  return (
    <div className="border-primary">
      <Image src={product?.attributes?.banner?.data?.attributes?.url} alt={'product image'} width={500} height={500}  className="rounded-lg border-primary"/>
    </div>
  );
}

export default ProductBanner;

