import { Link } from "react-router-dom";
function ProductPreview({ product, seeMore }) {
  return (
    <>
      <div className="product-flex">
        <div>
          <img src={product.image} alt="product image" />
          <h2>{product.name}</h2>
          {seeMore ? (
            <p>{product.description}</p>
          ) : (
            <Link to={`/products/${product.id}`}>Voir Plus</Link>
          )}
        </div>
      </div>
    </>
  );
}
export default ProductPreview;
