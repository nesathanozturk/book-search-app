import React from "react";
import "./Header.css";

function Header({ search, setSearch }) {
  return (
    <header>
      <div>
        <h1>Search Books App</h1>
        <form>
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
