// Basic Types
export type ISBN = string;
export type Price = number;

// Enum for book genres
export enum Genre {
    Fiction,
    NonFiction,
    Mystery,
    SciFi,
    Biography,
    Tech,
    Business,
    MindDevelopment,
}

// Interface for a book
export interface Book {
    title: string;
    author: string;
    isbn: ISBN;
    price: Price;
    genre: Genre;
    publishedYear: number;
  }