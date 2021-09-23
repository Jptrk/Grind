import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router";
// Components
import Games from "../components/Games";
import Footer from "../components/Footer";

import { loadNewGames } from "../actions/FetchnewgamesAction";
import { setPage } from "../actions/ControlAction";

function NewGames() {
  const dispatch = useDispatch();
  const loadDispatch = useDispatch();
  const data = useSelector((state) => state.games.newGames);
  const location = useLocation();

  const currentPage = location.pathname.includes("/page/")
    ? parseInt(location.pathname.split("new/page/")[1])
    : 1;

  useEffect(() => {
    loadDispatch(setPage(currentPage));
  }, [location.pathname, loadDispatch, currentPage]);

  useEffect(() => {
    dispatch(loadNewGames(currentPage));
  }, [dispatch, currentPage]);

  return (
    <Main>
      <Games data={data} url={`/new/`} sort={false} genre={false} />
      <Footer />
    </Main>
  );
}

const Main = styled.div`
  position: relative;
  padding-top: 60px;
`;

export default NewGames;
