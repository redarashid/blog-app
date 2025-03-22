import React from "react";
import { Category } from "../../models/category.model";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  return (
    <div className=" bg-gray-50 rounded-lg cursor-pointer hover:scale-105 p-4 ">
      <h1>{category.name}</h1>
      <p>{category.description}</p>
    </div>
  );
};

export default CategoryItem;
