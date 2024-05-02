import ProductItem from "./ProductItem";

function ProductList({ productList }) {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-8">
      {productList?.map((product) => (
          <ProductItem product={product} key={product.id}/>
      ))}
    </div>
  );
}

export default ProductList;
