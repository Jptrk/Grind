// Libararies
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// Components
import Rating from "./Ratings";
//Functions
import { smallerImage, releaseDate } from "../Functions/functions.js";

const Game = ({ game }) => {
  const { isLoading } = useSelector((state) => state.games);

  return (
    <Card>
      <Link to={`/game/${game.id}`}>
        {!isLoading && (
          <img src={smallerImage(game.background_image, 640)} alt={game.name} />
        )}
      </Link>
      <div className="details">
        <div>
          <Link to={`/game/${game.id}`} className="title">
            {game.name.substring(0, 40)}
            {game.name.length >= 40 && "..."}
          </Link>
        </div>
        <div className="genre">
          <p style={{ color: "rgba(255,255,255, 0.3" }}>
            Release Date: &nbsp;&nbsp;
            <span style={{ color: "rgba(255,255,255" }}>
              {releaseDate(game.released)}
            </span>
          </p>
        </div>
        <div className="rating">
          <Rating game={game.rating} size={13} />
        </div>
      </div>
    </Card>
  );
};

const Card = styled.div`
  background-color: #171717;
  border: solid 1px #272727;
  height: 360px;
  overflow: hidden;
  padding: 20px;
  img {
    height: 70%;
    width: 100%;
    object-fit: cover;
  }

  .details {
    padding: 20px 0;
  }

  .title {
    font-family: Bahnschrift;
    font-size: 16px;
    font-weight: 700;
    width: fit-content;
  }

  .genre {
    font-family: Bahnschrift;
    display: flex;
    flex-wrap: wrap;
    font-size: 13px;
    margin-top: 10px;
    margin-bottom: 10px;

    p {
      margin-right: 10px;
    }
  }
`;

export default Game;
