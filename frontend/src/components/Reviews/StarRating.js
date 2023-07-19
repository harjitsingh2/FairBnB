

import { useState, useEffect } from "react";
import "./StarRating.css";


const StarRating = ({ rating, name, handleChange }) => {
  const [activeRating, setActiveRating] = useState(rating);

  useEffect(() => {
    setActiveRating(rating)}
    , [rating]);

  return (
    <div className="star-rating-container">
      <span className="rating-type">{name}</span>
      <div
        className="rating-input"
        onMouseLeave={() => setActiveRating(rating)}
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            className={activeRating >= i ? "selected" : "empty"}
            key={i}
            onMouseEnter={() => setActiveRating(i)}
            onClick={() => handleChange(name, i)}
          >
            <div id='empty-review-star'>☆</div>
          </div>
        ))}
      </div>
      <div>
        <select className="number-input" value={rating} onChange={(e) => handleChange(name, e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
  );
};

export default StarRating;
