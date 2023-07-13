import React, { useState } from 'react';

const StarRating = ({ rating, onChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (hoverRating) => {
    setHoverRating(hoverRating);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (selectedRating) => {
    onChange(selectedRating);
  };

  const renderStar = (starNumber) => {
    if (starNumber <= (hoverRating || rating)) {
      return <span onClick={() => handleClick(starNumber)}>★</span>;
    } else {
      return (
        <span
          onClick={() => handleClick(starNumber)}
          onMouseEnter={() => handleMouseEnter(starNumber)}
          onMouseLeave={handleMouseLeave}
        >
          ☆
        </span>
      );
    }
  };

  return (
    <div>
      {renderStar(1)}
      {renderStar(2)}
      {renderStar(3)}
      {renderStar(4)}
      {renderStar(5)}
    </div>
  );
};

export default StarRating;
