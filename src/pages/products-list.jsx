import ProductPreview from "../components/product-proview/product-preview";
import ProductService from "../models/services/productService";

function ProductList() {
  const data = ProductService.getProducts();

  return (
    <>
      <ul className="product-flex2">
        {data.map((product, index) => (
          <li key={index}>
            <ProductPreview product={product} seeMore={false}></ProductPreview>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductList;
