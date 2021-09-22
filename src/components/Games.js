// import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// Components
import DropdownFilter from "./DropdownFilter";
import Filter from "./Filter";
import Pagination from "./Pagination";
import Game from "./Game";
//Actions
import { setPage } from "../actions/ControlAction";
import { setSelectedOption } from "../actions/ControlAction";
import GameListLoader from "./GameListLoader";

const Games = ({ data }) => {
  const myRef = useRef(null);
  const dispatch = useDispatch();

  //Global States
  const pageCount = useSelector((state) => state.games.pageCount);
  const { isLoading } = useSelector((state) => state.games);
  const { page, selectedOption } = useSelector((state) => state.controls);

  const setPageHandler = (page) => {
    dispatch(setPage(page));
  };

  const setSelectedOptionHandler = (selected) => {
    dispatch(setSelectedOption(selected));
  };

  return (
    <Main ref={myRef}>
      <DropdownFilter
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOptionHandler}
        setPage={setPageHandler}
        currentPage={`/page/${page}`}
      />
      <div className="filter-gamelist">
        <Filter />

        <GameList>
          {data.map((game) => (
            <div key={game.id}>
              {!isLoading && <Game game={game} />}

              {isLoading && <GameListLoader />}
            </div>
          ))}
        </GameList>
      </div>

      {/* Needs Page count, page and setpage state, and ref  for auto scroll top*/}
      <Pagination
        data={pageCount}
        setPage={setPageHandler}
        page={page}
        myRef={myRef}
      />
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

export default Games;
