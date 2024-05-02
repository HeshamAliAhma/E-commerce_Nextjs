"use client";
import BreadCumbs from "@/components/BreadCumbs";
import productsAPIs from "@/utils/productsAPIs";
import React, { useEffect, useState } from "react";
import ProductBanner from "./_components/ProductBanner";
import ProductInfo from "./_components/ProductInfo";
import { usePathname } from "next/navigation";


function ProductIDPage({ params }) {
  const path =  usePathname()

  const [ProductDetails, setProductDetails] = useState({});

  useEffect(() => {
    getProductID_();
  }, [params.productID]);

  const getProductID_ = () => {
    productsAPIs.getProductID(params.productID).then((res) => {
      setProductDetails(res.data.data);
    });
  };

  return (
    <div className="px-10 md:px-20 py-10">
      <BreadCumbs path={path} />
      <div className="flex flex-wrap items-center justify-around mt-10">
        <ProductBanner product={ProductDetails} />
        <ProductInfo product={ProductDetails} />
        <div></div>
      </div>
    </div>
  );
}

export default ProductIDPage;
