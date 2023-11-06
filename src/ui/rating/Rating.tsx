import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Rating = () => {
  const [rating, setRating] = useState(4);

  const handleClick = (index: any) => {
    setRating(index + 1);

    // Faites quelque chose avec la note, comme l'envoyer au serveur via une requête AJAX
    console.log("Note sélectionnée :", rating);
  };

  return (
    <div className="flex  flex-row">
      {[...Array(5)].map((_, index) => (
        <AiFillStar
          key={index}
          color={` ${index < rating ? "#FFC436" : "white"}`}
        />
      ))}
    </div>
  );
};

export default Rating;
