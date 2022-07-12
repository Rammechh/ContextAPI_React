import { useEffect } from "react";
import useAPI from "../hooks/useAPI";
import { useCategoryContext } from "../context/CategoryContext";
import Category from "./Category";

function Header() {
  const { setSelectedCategory } = useCategoryContext();
  const { data, isLoading, loadError } = useAPI(
    "https://fakestoreapi.com/products/categories/"
  );

  useEffect(() => {
    if (data) {
      setSelectedCategory(data[0]);
    }
  }, [data, setSelectedCategory]);

  if (isLoading) {
    return <div>Data is Loading</div>;
  } else if (loadError) {
    return <div>Load Error</div>;
  } else {
    return (
      <div className="header-items">
        {data.map((category, i) => {
          return <Category key={category} category={category} />;
        })}
      </div>
    );
  }
}
export default Header;
