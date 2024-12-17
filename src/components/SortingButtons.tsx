import React, { useState } from "react";
import "./../styles/Sorting.css";
import { Dog } from "../types/Dog";

interface SortingButtonsProps {
  onSort: (field: keyof Dog, order: "asc" | "desc") => void;
  resetFilters: () => void;
}

const SortingButtons: React.FC<SortingButtonsProps> = ({ onSort, resetFilters }) => {
  const [activeSort, setActiveSort] = useState<string>("");

  const handleSort = (field: keyof Dog, order: "asc" | "desc") => {
    onSort(field, order);
    setActiveSort(`${field}-${order}`);
  };

  return (
    <div className="sorting">
      <div className="sort-options">
        <span className="reset" onClick={resetFilters}>
          Reset
        </span>
        <div className="sort-options2">
          <span className="sort-text">Sort by</span>
          <span
            className={`sort-text ${activeSort === "height-desc" ? "active" : ""}`}
            onClick={() => handleSort("height", "desc")}
          >
            Height
          </span>
          <span
            className={`sort-text ${activeSort === "weight-asc" ? "active" : ""}`}
            onClick={() => handleSort("weight", "asc")}
          >
            Weight ↑
          </span>
          <span
            className={`sort-text ${activeSort === "weight-desc" ? "active" : ""}`}
            onClick={() => handleSort("weight", "desc")}
          >
            ↓
          </span>
        </div>
      </div>
    </div>
  );
};

export default SortingButtons;
