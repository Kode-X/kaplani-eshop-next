// src/components/ProductCard.tsx
import { Category } from "@/types/CategoryType";

interface ProductCardProps {
  category: Category;
}

const CategoryCard: React.FC<ProductCardProps> = ({ category }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <img
        src={category.imageUrl}
        alt={category.categoryName}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h2 className="text-xl font-semibold mb-2">{category.categoryName}</h2>
    </div>
  );
};

export default CategoryCard;
