import React from "react";
import {
  ModalContainer,
  ModalInner,
  Close,
  ModalBox,
  Image,
  BookName,
  BookAuthor,
  BookTitle,
  Preview,
  Description,
} from "./modal.style.js";

function Modal({ show, book, onClose }) {
  if (!show) {
    return null;
  }

  let thumbnail =
    book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;

  return (
    <ModalContainer>
      <ModalInner>
        <Close onClick={onClose}>X</Close>
        <ModalBox>
          <Image src={thumbnail} alt="" />
          <div>
            <BookName>{book.volumeInfo.title}</BookName>
            <BookAuthor>{book.volumeInfo.authors}</BookAuthor>
            <BookTitle>
              {book.volumeInfo.publisher}
              <span>{book.volumeInfo.publishDate}</span>
            </BookTitle>
            <br />
            <a href={book.volumeInfo.previewLink}>
              <Preview>Preview</Preview>
            </a>
          </div>
        </ModalBox>
        <Description>{book.volumeInfo.description}</Description>
      </ModalInner>
    </ModalContainer>
  );
}

export default Modal;
