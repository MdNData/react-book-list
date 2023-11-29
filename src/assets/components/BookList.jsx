import React from "react";
import Book from "./Book";

const BookList = () => {
  return (
    <section>
      <Book />
      <Book
        src="./imgs/snoop-doog-cook-book.jpg"
        text="From Crook to Cook : Platinum Recipes"
        author="Snoop Dogg"
      />
      <Book
        src="https://images-na.ssl-images-amazon.com/images/I/71hwUY5ZmxL._AC_UL600_SR600,400_.jpg"
        text="Interest Facts For Curious Minds"
        author="Jordan moore"
      />
      <Book
        src="./imgs/snoop-doog-cook-book.jpg"
        text="From Crook to Cook : Platinum Recipes"
        author="Snoop Dogg"
      />
      <Book />
      <Book
        src="https://images-na.ssl-images-amazon.com/images/I/71hwUY5ZmxL._AC_UL600_SR600,400_.jpg"
        text="Interest Facts For Curious Minds"
        author="Jordan moore"
      />
      <Book />
      <Book
        src="https://images-na.ssl-images-amazon.com/images/I/71hwUY5ZmxL._AC_UL600_SR600,400_.jpg"
        text="Interest Facts For Curious Minds"
        author="Jordan moore"
      />
      <Book
        src="./imgs/snoop-doog-cook-book.jpg"
        text="From Crook to Cook : Platinum Recipes"
        author="Snoop Dogg"
      />
    </section>
  );
};

export default BookList;
