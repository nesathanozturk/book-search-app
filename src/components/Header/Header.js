import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getBooks } from "../../redux/features/books/booksSlice";
import { HeaderContainer, Section, Title, Input } from "./header.style.js";

function Header() {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    dispatch(getBooks({ name: term }));
  };

  return (
    <HeaderContainer>
      <Section>
        <Title>Book Search App</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Search a book"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </form>
      </Section>
    </HeaderContainer>
  );
}

export default Header;
