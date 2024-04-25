import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
} from "mdb-react-ui-kit";

// State to control the modal visibility

const Card = ({
  property,
  onAddToFavorites,
  removeFromFavorites,
  isFavorite,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  // Function to open and close the modal

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Function to handle adding/removing favorites

  const handleOnClick = (id) => {
    if (isFavorite) {
      removeFromFavorites(id);
    } else {
      onAddToFavorites({ property });
    }
  };

  const getFirst10Words = (text) => {
    const words = text.split(" ");
    return words.slice(0, 10).join(" ");
  };

  const description = getFirst10Words(property.description);

  
  return (
    <>
    {/* Property Card */}

      <div className="border rounded-lg border-zinc-400 w-[300px]">
        <img
          src={property.picture}
          alt="House"
          className="w-[300px] h-[200px] object-cover rounded-t-lg"
          onClick={openModal}
          style={{ cursor: "pointer" }}
        />

        <div className="my-[10px] px-[20px] flex flex-col gap-[10px]">
          <p className="text-[20px]">{property.id}</p>
          <p>Price: ${property.price}</p>
          <p className="h-[75px]">{description}</p>
          
          {/* Add to Favorite button */}

          {isFavorite ? (
            <button
              className="bg-[#28a739] text-white h-[35px] rounded-lg"
              onClick={() => removeFromFavorites(property.id)}
            >
              Remove From Favorite
            </button>
          ) : (
            <button
              className="bg-[#28a739] text-white h-[35px] rounded-lg"
              onClick={() => onAddToFavorites({ property })}
            >
              Add To Favorite
            </button>
          )}
        </div>
      </div>

      {/* Modal Content */}
      {modalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: "999",
          }}
          onClick={closeModal}
        ></div>
      )}

      {/* Image */}
      {modalOpen && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            zIndex: "1000",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "600px",
            height: "auto",
          }}
        >
          <img src={property.picture} alt={`Modal`} style={{ width: "100%" }} />
          <p>{description}</p>
          <p>Price: $ {property.price}</p>
          <p>Bedroom: {property.bedrooms}</p>
          <p>Location: {property.location}</p>
          {/* Add additional details as needed */}
          <button type="button" className="bg-red-500 text-white rounded-lg p-2" onClick={closeModal}>
              Close
            <i className="fas fa-circle-xmark text-red-500"></i>
          </button>
        </div>
      )}
    </>
  );
};

export default Card;