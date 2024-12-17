import React, { useState } from "react";
import "./../styles/App.css";

// Define props for the SearchBar component
interface SearchBarProps {
  onSearch: (query: string) => void; // Function that takes a string and returns void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(input); // Trigger search only on button click
    setInput(""); // Clear the input field after search
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name or breed..."
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>🔍</button>
    </div>
  );
};

export default SearchBar;
