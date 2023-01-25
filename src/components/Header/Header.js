import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getBooks } from "../../redux/features/books/booksSlice";
import { HeaderContainer, Title, Input } from "./header.style.js";

function Header() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    dispatch(getBooks({ name: search }));
  };

  return (
    <HeaderContainer>
      <Title>Search Books App</Title>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search a book"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </HeaderContainer>
  );
}

export default Header;
