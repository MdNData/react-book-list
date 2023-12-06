import React from "react";
import Book from "./Book";
import { books } from "./data";

const BookList = () => {
  return (
    <section>
      {books.map((book) => {
        return <Book src={book.src} text={book.text} author={book.author} />;
      })}
    </section>
  );
};

export default BookList;
