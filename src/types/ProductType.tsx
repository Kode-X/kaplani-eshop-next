import { Review } from "./ReviewType";

export interface Product {
  id: string; // Unique identifier for the product
  name: string; // Name of the product
  description: string; // Detailed description of the product
  price: number; // Price of the product
  category: string; // Category to which the product belongs
  imageUrl: string; // URL of the product image
  stock: number; // Quantity available in stock
  ratings: number; // Average rating of the product
  reviews: Review[]; // List of reviews for the product
}


export const products: Product[] = [
    {
      id: '1',
      name: 'Leather Wallet',
      description: 'A high-quality leather wallet with multiple compartments.',
      price: 49.99,
      category: 'Accessories',
      imageUrl: 'https://www.myjerusalemstore.com/media/catalog/product/cache/ea436a10ff4f5fdf22e095e2f092bc24/l/s/ls-92165_3.jpg',
      stock: 50,
      ratings: 4.5,
      reviews: [
        {
          userId: 'user1',
          userName: 'John Doe',
          rating: 5,
          comment: 'Excellent quality! Very satisfied with this wallet.',
          date: '2024-01-05',
        },
        {
          userId: 'user2',
          userName: 'Jane Smith',
          rating: 4,
          comment: 'Good wallet, but a bit pricey.',
          date: '2024-02-10',
        },
      ],
    },
    {
      id: '2',
      name: 'Leather Belt',
      description: 'A durable leather belt that goes well with any outfit.',
      price: 35.00,
      category: 'Accessories',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmBmcGsOaxaFYDDnnjmmhrFcz8d2qZm2FuCw&s',
      stock: 30,
      ratings: 4.0,
      reviews: [
        {
          userId: 'user3',
          userName: 'Alice Brown',
          rating: 4,
          comment: 'Nice belt, matches with most of my outfits.',
          date: '2024-03-15',
        },
      ],
    },
    {
      id: '3',
      name: 'Leather Jacket',
      description: 'A stylish leather jacket that provides warmth and comfort.',
      price: 199.99,
      category: 'Clothing',
      imageUrl: 'https://www.zvnder.com/img/collection/wallets/zvnder_wallet1_side_open.jpg',
      stock: 20,
      ratings: 4.8,
      reviews: [
        {
          userId: 'user4',
          userName: 'Chris Green',
          rating: 5,
          comment: 'Fantastic jacket, very comfortable and warm.',
          date: '2024-04-22',
        },
        {
          userId: 'user5',
          userName: 'Eve White',
          rating: 4.5,
          comment: 'Great jacket, but could be a bit cheaper.',
          date: '2024-05-18',
        },
      ],
    },
    {
        id: '4',
        name: 'Leather Jacket',
        description: 'A stylish leather jacket that provides warmth and comfort.',
        price: 199.99,
        category: 'Clothing',
        imageUrl: 'https://www.zvnder.com/img/collection/wallets/zvnder_wallet1_side_open.jpg',
        stock: 20,
        ratings: 4.8,
        reviews: [
          {
            userId: 'user4',
            userName: 'Chris Green',
            rating: 5,
            comment: 'Fantastic jacket, very comfortable and warm.',
            date: '2024-04-22',
          },
          {
            userId: 'user5',
            userName: 'Eve White',
            rating: 4.5,
            comment: 'Great jacket, but could be a bit cheaper.',
            date: '2024-05-18',
          },
        ],
      },
      {
        id: '1',
        name: 'Leather Wallet',
        description: 'A high-quality leather wallet with multiple compartments.',
        price: 49.99,
        category: 'Accessories',
        imageUrl: 'https://www.myjerusalemstore.com/media/catalog/product/cache/ea436a10ff4f5fdf22e095e2f092bc24/l/s/ls-92165_3.jpg',
        stock: 50,
        ratings: 4.5,
        reviews: [
          {
            userId: 'user1',
            userName: 'John Doe',
            rating: 5,
            comment: 'Excellent quality! Very satisfied with this wallet.',
            date: '2024-01-05',
          },
          {
            userId: 'user2',
            userName: 'Jane Smith',
            rating: 4,
            comment: 'Good wallet, but a bit pricey.',
            date: '2024-02-10',
          },
        ],
      },
      {
        id: '2',
        name: 'Leather Belt',
        description: 'A durable leather belt that goes well with any outfit.',
        price: 35.00,
        category: 'Accessories',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmBmcGsOaxaFYDDnnjmmhrFcz8d2qZm2FuCw&s',
        stock: 30,
        ratings: 4.0,
        reviews: [
          {
            userId: 'user3',
            userName: 'Alice Brown',
            rating: 4,
            comment: 'Nice belt, matches with most of my outfits.',
            date: '2024-03-15',
          },
        ],
      },
      {
        id: '3',
        name: 'Leather Jacket',
        description: 'A stylish leather jacket that provides warmth and comfort.',
        price: 199.99,
        category: 'Clothing',
        imageUrl: 'https://www.zvnder.com/img/collection/wallets/zvnder_wallet1_side_open.jpg',
        stock: 20,
        ratings: 4.8,
        reviews: [
          {
            userId: 'user4',
            userName: 'Chris Green',
            rating: 5,
            comment: 'Fantastic jacket, very comfortable and warm.',
            date: '2024-04-22',
          },
          {
            userId: 'user5',
            userName: 'Eve White',
            rating: 4.5,
            comment: 'Great jacket, but could be a bit cheaper.',
            date: '2024-05-18',
          },
        ],
      },
      {
          id: '4',
          name: 'Leather Jacket',
          description: 'A stylish leather jacket that provides warmth and comfort.',
          price: 199.99,
          category: 'Clothing',
          imageUrl: 'https://www.zvnder.com/img/collection/wallets/zvnder_wallet1_side_open.jpg',
          stock: 20,
          ratings: 4.8,
          reviews: [
            {
              userId: 'user4',
              userName: 'Chris Green',
              rating: 5,
              comment: 'Fantastic jacket, very comfortable and warm.',
              date: '2024-04-22',
            },
            {
              userId: 'user5',
              userName: 'Eve White',
              rating: 4.5,
              comment: 'Great jacket, but could be a bit cheaper.',
              date: '2024-05-18',
            },
          ],
        },
  ];