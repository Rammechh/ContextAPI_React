import "./styles.css";
import Header from "./components/Header";
import CategoryProvider from "./context/CategoryContext";
import ProductProvider from "./context/ProductContext";
import ProductList from "./components/ProductList";

export default function App() {
  return (
    <CategoryProvider>
      <Header />;
      <ProductProvider>
        <ProductList />
      </ProductProvider>
    </CategoryProvider>
  );
}
