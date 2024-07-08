// src/types/Review.ts

export interface Review {
    userId: string; // Unique identifier of the user who wrote the review
    userName: string; // Name of the user who wrote the review
    rating: number; // Rating given by the user
    comment: string; // Review comment
    date: string; // Date when the review was written
  }