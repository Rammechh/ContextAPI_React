import React, { useCallback } from "react";
import { useCategoryContext } from "../context/CategoryContext";

function Category({ category }) {
  const { setSelectedCategory } = useCategoryContext();
  const handleClick = useCallback(() => setSelectedCategory(category), [
    setSelectedCategory,
    category
  ]);
  return (
    <div onClick={handleClick} className="header-item">
      {category}
    </div>
  );
}

export default Category;
