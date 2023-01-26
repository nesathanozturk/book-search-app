import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Books,
  Image,
  BookInfo,
  Title,
  Author,
  WarningDescription,
} from "./main.style";
import Modal from "../Modal/Modal";

function Main() {
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState();

  const booksList = useSelector((state) => state.books.books);

  return (
    <Container>
      {booksList && booksList.length > 0 ? (
        booksList.map((book) => {
          return (
            book.volumeInfo.imageLinks &&
            book.volumeInfo.authors && (
              <section>
                <Books key={book.id} className="book-card">
                  <div className="book-image">
                    <Image
                      src={book.volumeInfo.imageLinks.smallThumbnail}
                      alt={book.volumeInfo.title}
                    />
                  </div>
                  <BookInfo className="book-detail">
                    <Title>{book.volumeInfo.title}</Title>
                    <Author>{book.volumeInfo.authors[0]}</Author>
                  </BookInfo>
                  <p
                    onClick={() => {
                      setShow(true);
                      setBookItem(book);
                    }}
                  >
                    Details
                  </p>
                </Books>
                <Modal
                  show={show}
                  book={bookItem}
                  onClose={() => setShow(false)}
                />
              </section>
            )
          );
        })
      ) : (
        <div>
          <WarningDescription>
            There is not anything you can see!
          </WarningDescription>
        </div>
      )}
    </Container>
  );
}

export default Main;
