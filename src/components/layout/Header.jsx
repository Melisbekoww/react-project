import { useState } from "react";
import {Link} from "react-router-dom"
const Header = ({ setSearch, search }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value.trim()) return;
    setSearch(value.trim().replace(/\s+/g, "+"));
  };
  return (
    <header className="Searchbar">
      <Link className="logo-link" to={"/"}>pixabay</Link>
      <form onSubmit={handleSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Header;
