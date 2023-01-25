import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
`;

const Books = styled.div`
  background-color: #2e3030;
  width: 16rem;
  padding: 2rem;
  margin: 1.8rem 1rem 1rem 2rem;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
`;

const BookInfo = styled.div`
  color: #eee;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 0.6rem;
  padding: 0.5rem 1rem 1rem;
  font-size: 0.8rem;
`;

const Title = styled.h3`
  margin-bottom: 1rem;
`;

function Main() {
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
                    <h4>{book.volumeInfo.authors[0]}</h4>
                  </BookInfo>
                </Books>
              </section>
            )
          );
        })
      ) : (
        <div>
          <p>There is not any book you can see at the moment!</p>
        </div>
      )}
    </Container>
  );
}

export default Main;
