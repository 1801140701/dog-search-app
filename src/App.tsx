import React, { useState, useEffect } from "react";
import "./styles/App.css";
import "./styles/Responsive.css";
import DogDetails from "./components/Modal";
import SearchBar from "./components/SearchBar";
import DogList from "./components/DogList";
import SortingButtons from "./components/SortingButtons";
import { fetchDogs, searchDogs } from "./api";
import { Dog } from "./types/Dog";

const App: React.FC = () => {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [originalDogs, setOriginalDogs] = useState<Dog[]>([]); // For resetting filters
  const [selectedDog, setSelectedDog] = useState<Dog | null>(null);

  // Fetch initial dog data
  useEffect(() => {
    fetchDogs().then((data) => {
      setDogs(data);
      setOriginalDogs(data); // Store original data for reset
    });
  }, []);

  // Handle search functionality
  const handleSearch = async (term: string) => {
    if (term === "") {
      fetchDogs().then((data) => {
        setDogs(data);
        setOriginalDogs(data);
      });
    } else {
      const results = await searchDogs(term);
      setDogs(results);
    }
  };

  const handleSort = (field: keyof Dog, order: "asc" | "desc") => {
    const sortedDogs = [...dogs].sort((a, b) => {
      // Safely extract values, handling undefined and 'metric' property
      const extractValue = (dog: Dog, field: keyof Dog): number => {
        const value = dog[field];
        if (value && typeof value === 'object' && 'metric' in value) {
          return parseFloat((value as { metric: string }).metric || '0');
        }
        return value !== undefined && value !== null ? parseFloat(String(value)) : 0;
      };
  
      const aValue = extractValue(a, field);
      const bValue = extractValue(b, field);
  
      return order === "asc" ? aValue - bValue : bValue - aValue;
    });
  
    setDogs(sortedDogs);
  };
  

  // Reset search and sorting filters
  const resetFilters = () => {
    setDogs(originalDogs); // Reset to the original dogs list
  };

  // Handle selecting a dog to show details
  const handleSelectDog = (dog: Dog) => {
    setSelectedDog(dog);
  };

  return (
    <div className="app-container">
      <div
        className="left-section"
        style={{ width: selectedDog ? "90%" : "" }}
      >
        <h1>Dogs</h1>
        <SearchBar onSearch={handleSearch} />
        <SortingButtons onSort={handleSort} resetFilters={resetFilters} />
        <DogList dogs={dogs} onSelectDog={handleSelectDog} />
      </div>
      {selectedDog && (
        <DogDetails dog={selectedDog} onClose={() => setSelectedDog(null)} />
      )}
    </div>
  );
};

export default App;
