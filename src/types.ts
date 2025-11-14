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
    isbn: string;
    price: string;
    genre: Genre;
    publishedYear: number;
}

const myBook:Book = {
    title:"the world world",
    author:"myh name",
    isbn:"1223223",
    price:"5000",
    genre:Genre.Fiction,
    publishedYear:1992
}