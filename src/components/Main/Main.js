import React from "react";

function Main({ books }) {
  const renderedBooks = books.map((book, index) => <div key={index}></div>);

  return { renderedBooks };
}

export default Main;
