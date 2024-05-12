import React from 'react';
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(
        <span key={i} className="text-purple-500 text-2xl">
          &#9733;
        </span>,
      );
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <span key={i} className="text-purple-500 text-2xl">
          &#9733;
        </span>,
      );
    } else {
      stars.push(
        <span key={i} className="text-gray-300 text-2xl">
          &#9733;
        </span>,
      );
    }
  }
  return <div>{stars}</div>;
};
export default StarRating;
