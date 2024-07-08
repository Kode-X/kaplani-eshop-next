// src/components/ProductCategoryGrid.tsx

import { categories } from "@/types/CategoryType";
import CategoryCard from "./CategoryCard";

const ProductCategoryGrid = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div> */}
    </>
  );
};

export default ProductCategoryGrid;
