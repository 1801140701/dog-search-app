import React from "react";
import { Dog } from "../types/Dog";


// Define props for the DogCard component
interface DogCardProps {
  dog: Dog;
  onClick: () => void; // onClick expects a function with no arguments
}

const DogCard: React.FC<DogCardProps> = ({ dog, onClick }) => {
  const imageUrl = `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`;

  return (
    <div className="dog-card" onClick={onClick}>
      <img src={imageUrl} alt={dog.name} />
      <div className="dog-info">
        <h3>{dog.name}</h3>
        <p>{dog.breed_group || "N/A"}</p>
      </div>
    </div>
  );
};

export default DogCard;
