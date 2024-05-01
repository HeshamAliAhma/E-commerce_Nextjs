import ProductItem from "./ProductItem";

function ProductList({ productList }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-col-3 md:grid-col-4 w-[400px]">
      {productList?.map((product) => (
          <ProductItem product={product} key={product.id}/>
      ))}
    </div>
  );
}

export default ProductList;
