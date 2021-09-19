// import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
// Components
import DropdownFilter from "./DropdownFilter";
import Filter from "./Filter";
import Rating from "./Ratings";
// Actions
import { loadAllgames } from "../actions/FetchallgamesAction";

const Games = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.games.allGames);
  const [selectedOption, setSelectedOption] = useState("Release Date");

  //Fetch Games
  useEffect(() => {
    dispatch(loadAllgames(1, selectedOption));
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadAllgames(1, selectedOption));
  }, [selectedOption]);

  return (
    <Main>
      <DropdownFilter
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <div className="filter-gamelist">
        <Filter />

        <GameList>
          {data.map((game) => (
            <Game key={game.id}>
              <img src={game.background_image} alt={game.name} />
              <div className="details">
                <p className="title">
                  {game.name.substring(0, 40)}
                  {game.name.length >= 40 && "..."}
                </p>
                <div className="genre">
                  <p style={{ color: "rgba(255,255,255, 0.75" }}>
                    Release Date:{" "}
                    <span style={{ color: "rgba(255,255,255" }}>
                      {game.released}
                    </span>
                  </p>
                </div>
                <div className="rating">
                  <Rating game={game.rating} />
                </div>
              </div>
            </Game>
          ))}
        </GameList>
      </div>
    </Main>
  );
};

const Main = styled.div`
  padding: 60px 0;

  width: 100%;
  color: white;
  width: 1200px;
  margin: auto;
  user-select: none;

  @media (max-width: 1366px) {
    width: 100%;
  }

  .filter-gamelist {
    display: grid;
    margin-left: -280px;
    grid-template-columns: 280px 1200px;
    @media (max-width: 1850px) {
      grid-template-columns: 1200px;
      margin-left: 0;
    }
    @media (max-width: 1366px) {
      display: block;
      width: 100%;
    }
  }

  .sort {
    display: flex;
    align-items: center;
    p {
      margin-right: 20px;
    }
  }

  @media (max-width: 1366px) {
    width: 100%;
    padding: 60px 40px;
  }

  @media (max-width: 425px) {
    padding: 60px 20px;
  }
`;

const GameList = styled.div`
  padding: 40px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  grid-row-gap: 30px;
  grid-column-gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  @media (max-width: 375px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

const Game = styled.div`
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

  @media (max-width: 1366px) {
  }
`;

export default Games;
