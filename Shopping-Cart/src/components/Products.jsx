import ProductItem from "./ProductItem";
import productData from "../productData";

const Products = () => {
  return (
    <div className="grid grid-cols-3 gap-10 mb-8">
      {productData.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
