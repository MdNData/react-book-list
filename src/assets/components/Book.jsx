import React from "react";

const Book = ({ src, text, author }) => {
  return (
    <article>
      <Image src={src} />
      <Title text={text} />
      <Author author={author} />
    </article>
  );
};

const Image = ({ src }) => (
  <img
    src={
      src
        ? src
        : "https://images-na.ssl-images-amazon.com/images/I/91vnzZO5yPL._AC_UL600_SR600,400_.jpg"
    }
    alt=""
  />
);

const Title = ({ text }) => (
  <h2>{text ? text : "The Very Hungry Caterpillar"}</h2>
);

const Author = ({ author }) => <h4>by {author ? author : "Eric Carle"}</h4>;

export default Book;
