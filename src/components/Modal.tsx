import React from "react";
import "./../styles/Modal.css";
import { Dog } from "../types/Dog";

// Define props for the DogDetails component
interface DogDetailsProps {
  dog: Dog;
  onClose: () => void; // Function with no arguments
}

const DogDetails: React.FC<DogDetailsProps> = ({ dog, onClose }) => {
  const imageUrl = `https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`;

  return (
    <div className="dog-details-overlay" onClick={onClose}>
      <div
        className="dog-details-modal"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              backgroundColor: "darkgray",
              height: "5px",
              width: "100px",
              borderRadius: "5px",
              marginTop: "-30px",
            }}
            onClick={onClose}
          ></div>
        </div>
        <img src={imageUrl} alt={dog.name} />
        <h2>{dog.name}</h2>
        <div className="detail-list">
          <div className="each-detail">
            <span className="each-detail-span">
              Weight: {dog.weight?.metric || "N/A"} kg
            </span>
            <span className="each-detail-span">
              Height: {dog.height?.metric || "N/A"} ft
            </span>
          </div>
          <div className="each-detail">
            <span className="each-detail-span">
              Life Span: {dog.life_span || "N/A"}
            </span>
            <span className="each-detail-span">
              Breed: {dog.breed_group || "N/A"}
            </span>
          </div>
          <div className="each-detail">
            <span className="each-detail-span">
              Bred for: {dog.bred_for || "N/A"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogDetails;
