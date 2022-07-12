import { useProductsContext } from "../context/ProductContext";
import { ProductCard } from "./ProductCard";

function ProductList() {
  const { data, isLoading, loadError } = useProductsContext();

  if (isLoading) {
    return <div className="loading">Products is loading...</div>;
  } else if (loadError) {
    return <div>Load Error {loadError.message}</div>;
  } else if (data.length > 0) {
    return (
      <div className="products">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  } else {
    return <div className="loading">No Products in the current category</div>;
  }
}

export default ProductList;

// sideeffect
// useEffect(() => {
//   // this function would run eveytime my data changes
//   if(data){
//     setIsLoading(false);
//   }
// }, [data]);

// get the category name
