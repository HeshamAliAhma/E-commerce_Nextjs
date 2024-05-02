'use client'
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import productsAPIs from '@/utils/productsAPIs';


function ProductSection() {
  const [productList , setProductList] = useState()
  useEffect(()=>{
    getLatestProducts_();
  },[])
  const getLatestProducts_ = ()=>{
    productsAPIs.getLatestProducts().then(res=>{
      setProductList(res.data.data)
    })
  }
  return (
    <div className='px-5 md:px-10 mb-4'>
      <h2 className='text-2xl my-5 font-bold border rounded-sm p-4 w-fit hover:border-primary cursor-pointer hover:rounded-lg transition hover:text-primaryHover'>Our Latest Product</h2>
      <ProductList productList={productList} className=''/>
    </div>
  )
}

export default ProductSection
