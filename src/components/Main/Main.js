import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Books,
  Image,
  BookInfo,
  Title,
  Author,
  Details,
  WarningDescription,
} from "./main.style";
import Modal from "../Modal/Modal";

function Main() {
  const [modal, setModal] = useState(false);
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
                <Books key={book.id}>
                  <div>
                    <Image
                      src={book.volumeInfo.imageLinks.smallThumbnail}
                      alt={book.volumeInfo.title}
                    />
                  </div>
                  <BookInfo>
                    <Title>{book.volumeInfo.title}</Title>
                    <Author>{book.volumeInfo.authors[0]}</Author>
                  </BookInfo>
                  <Details
                    onClick={() => {
                      setModal(true);
                      setBookItem(book);
                    }}
                  >
                    Details
                  </Details>
                </Books>
                <Modal
                  modal={modal}
                  book={bookItem}
                  onClose={() => setModal(false)}
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
