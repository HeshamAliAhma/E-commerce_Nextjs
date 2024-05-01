import Image from "next/image";
import React from "react";
import {AlignLeft} from 'lucide-react';
function ProductItem({ product }) {
  return (
    <div>
      <Image
        src={product?.attributes?.banner?.data?.attributes?.url}
        alt="banner-card"
        width={300}
        height={0}
        className="rounded-t-lg h-[200px] object-cover"
      />
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-b-lg">
        <div className="p-3">
        <h2 className="text-[12px] font-medium">
          {product?.attributes?.Title}
        </h2>
        <h2 className="flex gap-1 text-[10px] items-center text-gray-400"><AlignLeft className="w-4 h-4 "/>{product?.attributes?.Catigory}</h2>
      </div>
      <h2>${product?.attributes?.price}</h2>
        </div>
    </div>
  );
}

export default ProductItem;
