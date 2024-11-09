import React, { useState } from "react";

const Header = ({ searchTerm, onSearchChange }) => {
  const [visibleInput, setVisibleInput] = useState(false);

  const handleBackClick = () => {
    setVisibleInput(false);
    onSearchChange("");
  };

  const handleSearchClick = () => {
    setVisibleInput(true);
  };

  return (
    <div className="header">
      {visibleInput && (
        <button className="icon-button back-button" onClick={handleBackClick}>
          ←
        </button>
      )}
      <h1 className="title">Romantic Comedy</h1>
      {visibleInput && (
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          minLength={1}
          maxLength={50}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      )}
      {visibleInput && searchTerm !== "" && (
        <span className="margin-left-40">{searchTerm.length + "/" + 50}</span>
      )}
      {!visibleInput && (
        <button className="icon-button search-icon" onClick={handleSearchClick}>
          🔍
        </button>
      )}
    </div>
  );
};

export default Header;
