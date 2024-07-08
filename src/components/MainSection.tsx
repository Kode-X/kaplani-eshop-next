// src/components/MainSection.tsx

import ProductCategoryGrid from "./ProductCategoryGrid";

const MainSection = () => (
  // <main className="container mx-auto mt-8">
  //   <h2 className="text-3xl font-bold mb-4">Shop Now</h2>
  //   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  //     {/* Product Cards or Listings */}
  //     <div className="p-4 bg-white shadow-md rounded-md">
  //       <img src="https://placeimg.com/400/225/arch" alt="Product" className="mb-4" />
  //       <h3 className="text-lg font-bold mb-2">Product Name</h3>
  //       <p className="text-gray-600 mb-2">Product description goes here.</p>
  //       <button className="btn btn-primary">Add to Cart</button>
  //     </div>
  //     <div className="p-4 bg-white shadow-md rounded-md">
  //       {/* Another product card */}
  //     </div>
  //     <div className="p-4 bg-white shadow-md rounded-md">
  //       {/* Another product card */}
  //     </div>
  //   </div>
  // </main>
  <ProductCategoryGrid />
);

export default MainSection;
