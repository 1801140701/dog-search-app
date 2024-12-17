import React from "react";
import DogCard from "./DogCard";
import "./../styles/DogList.css";
import { Dog } from "../types/Dog";

// Define props for the DogList component
interface DogListProps {
  dogs: Dog[];
  onSelectDog: (dog: Dog) => void; // Function that takes a Dog object
}

const DogList: React.FC<DogListProps> = ({ dogs, onSelectDog }) => {
  return (
    <div className="dog-list">
      {dogs.map((dog, index) => (
        <DogCard key={index} dog={dog} onClick={() => onSelectDog(dog)} />
      ))}
    </div>
  );
};

export default DogList;
