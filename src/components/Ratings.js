// Assets
import starFull from "../Assets/star-full-2@2.png";
import starEmpty from "../Assets/star.png";

import styled from "styled-components";

const Rating = ({ game, size, spacing }) => {
  // Handlers
  const getStars = (data) => {
    const stars = [];
    const rating = Math.round(data);

    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <img
            src={starFull}
            alt="star"
            key={i}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              minHeight: `${size}px`,
              marginRight: `${spacing}px`,
            }}
          />
        );
      } else {
        stars.push(
          <img
            src={starEmpty}
            alt="star"
            key={i}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              minHeight: `${size}px`,
              marginRight: `${spacing}px`,
            }}
          />
        );
      }
    }
    return stars;
  };

  return <Star>{getStars(game)}</Star>;
};

const Star = styled.div`
  img {
    margin-right: 8px;
    object-fit: initial;
  }
`;
export default Rating;
