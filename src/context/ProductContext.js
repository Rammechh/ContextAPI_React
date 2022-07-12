import { createContext, useContext } from "react";
import { useParams } from "react-router-dom";
import useApi from "../hooks/useAPI";
import { useCategoryContext } from "./CategoryContext";

export const ProductsContext = createContext();

export default function ProductsProvider({ children }) {
  const { selectedCategory } = useCategoryContext();
  const { isLoading, data, loadError } = useApi(
    `https://fakestoreapi.com/products/category/${selectedCategory}`
  );

  return (
    <ProductsContext.Provider
      value={{
        isLoading,
        data,
        loadError
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function ProductsPageProvider({ children }) {
  const { categoryName } = useParams();
  const { isLoading, data, loadError } = useApi(
    `https://fakestoreapi.com/products/category/${categoryName}`
  );

  return (
    <ProductsContext.Provider
      value={{
        isLoading,
        data,
        loadError
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export const useProductsContext = () => useContext(ProductsContext);
