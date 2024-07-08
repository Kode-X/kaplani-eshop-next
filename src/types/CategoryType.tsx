export interface Category {
  id: string; // Unique identifier for the product
  categoryName: string; // Name of the product
  imageUrl: string; // URL of the product image
}

export const categories: Category[] = [
  {
    id: "1",
    categoryName: "Leather Wallet",
    imageUrl:
      "https://www.myjerusalemstore.com/media/catalog/product/cache/ea436a10ff4f5fdf22e095e2f092bc24/l/s/ls-92165_3.jpg",
  },
  {
    id: "2",
    categoryName: "Leather Belt",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWOWXf6v2661iPSqtWtje6cLnGAeea2Own7A&s",
  },
  {
    id: "3",
    categoryName: "Leather Bags",
    imageUrl:
      "https://cdn.dribbble.com/userupload/8600799/file/still-dbc55d2a8c0e964190fd12bd656127ec.gif?resize=400x0",
  },
  {
    id: "4",
    categoryName: "Leather Accesories",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIeJ8i4hFrF5QCLzj6inBub3vItqoOGXz0cw&s",
  },
];
