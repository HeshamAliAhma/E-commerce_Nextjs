import Image from "next/image";
import React from "react";
import {AlignLeft} from 'lucide-react';
import Link from "next/link";
function ProductItem({ product }) {
  return (
    <Link href={`/product-details/${product?.id}`} className="hover:shadow-md border transition hover:border rounded-lg hover:border-primary cursor-pointer">
      <Image
        src={product?.attributes?.banner?.data?.attributes?.url}
        alt="banner-card"
        width={300}
        height={0}
        className="rounded-t-lg h-auto w-full object-cover"
      />
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-b-lg">
        <div className="p-3">
        <h2 className="text-[17px] font-medium line-clamp-1">
          {product?.attributes?.Title}
        </h2>
        <h2 className="flex gap-1 text-[13px] items-center text-gray-400"><AlignLeft className="w-4 h-4 "/>{product?.attributes?.Catigory}</h2>
      </div>
      <h2>${product?.attributes?.price}</h2>
        </div>
    </Link>
  );
}

export default ProductItem;
