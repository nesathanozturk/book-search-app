import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getBooks } from "../../redux/features/books/booksSlice";
import "./Header.css";

function Header() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    dispatch(getBooks({ name: search }));
  };

  return (
    <header>
      <div>
        <h1>Search Books App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search a book"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
    </header>
  );
}

export default Header;
