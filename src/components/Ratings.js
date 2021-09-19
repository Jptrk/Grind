// Assets
import starFull from "../Assets/star-full-2@2.png";
import starEmpty from "../Assets/star-empty@2x.png";

import styled from "styled-components";

const Rating = (game) => {
  // Handlers
  const getStars = (data) => {
    const stars = [];
    const rating = Math.round(data.game);

    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<img src={starFull} alt="star" key={i} />);
      } else {
        stars.push(<img src={starEmpty} alt="star" key={i} />);
      }
    }
    return stars;
  };

  return <Star>{getStars(game)}</Star>;
};

const Star = styled.div`
  img {
    width: 13px;
    height: 13px !important;
    margin-right: 8px;
    object-fit: initial;
    min-height: 13px !important;
    max-width: 13px !important;
  }
`;
export default Rating;
