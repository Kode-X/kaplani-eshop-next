// src/components/ProductCard.tsx
import { Product } from '../types/ProductType';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-gray-900 font-bold mb-2">${product.price}</p>
      <p className="text-gray-600 mb-2">Stock: {product.stock}</p>
      <p className="text-gray-600 mb-4">Category: {product.category}</p>
      <p className="text-yellow-500 mb-4">Ratings: {product.ratings}</p>
      <div className="reviews">
        <h3 className="font-semibold">Reviews:</h3>
        {product.reviews.map((review, index) => (
          <div key={index} className="border-t mt-2 pt-2">
            <p className="text-gray-800"><strong>{review.userName}</strong> ({review.rating}): {review.comment}</p>
            <p className="text-gray-500 text-sm">Date: {review.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
