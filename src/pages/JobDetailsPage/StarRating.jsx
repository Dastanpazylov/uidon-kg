import React from 'react';

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const decimalPart = rating - fullStars;

    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars.push(<span key={i} className="text-purple-500 text-2xl">&#9733;</span>);
        } else if (i === fullStars && decimalPart >= 0.5) {
            stars.push(<span key={i} className="text-purple-500 text-2xl">&#9733;</span>);
        } else if (i === fullStars && decimalPart > 0 && decimalPart < 0.5) {
            stars.push(
                <span key={i} className="text-purple-500 text-2xl">
                    &#9733;<span className="text-gray-300">&#9733;</span>
                </span>
            );
        } else {
            stars.push(<span key={i} className="text-gray-300 text-2xl">&#9733;</span>);
        }
    }

    return <div>{stars}</div>;
};

export default StarRating;