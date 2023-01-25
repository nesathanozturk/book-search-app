import React from "react";
import { useSelector } from "react-redux";

function Main() {
  const booksList = useSelector((state) => state.books.books);

  return (
    <div>
      {booksList && booksList.length > 0 ? (
        booksList.map((book) => {
          return (
            book.volumeInfo.imageLinks &&
            book.volumeInfo.authors && (
              <div key={book.id} className="book-card">
                <div className="book-image">
                  <img
                    src={book.volumeInfo.imageLinks.smallThumbnail}
                    alt={book.volumeInfo.title}
                  />
                </div>
                <div className="book-detail">
                  <h3>{book.volumeInfo.title}</h3>
                  <h4>{book.volumeInfo.authors[0]}</h4>
                </div>
              </div>
            )
          );
        })
      ) : (
        <div>
          <p>There is not any book you can see at the moment!</p>
        </div>
      )}
    </div>
  );
}

export default Main;
