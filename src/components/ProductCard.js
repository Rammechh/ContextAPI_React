export function ProductCard({ product }) {
  return (
    <div className="product">
      <img className="image" src={product.image} alt={product.title} />
      <div className="product-description">
        <div className="product-title">{product.title}</div>
      </div>
      <div className="product-footer">
        <div className="product-price">${product.price}</div>
      </div>
    </div>
  );
}
