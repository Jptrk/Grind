import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router";
// Components
import Games from "../components/Games";
import Footer from "../components/Footer";

import { setPage } from "../actions/ControlAction";
import { fetchSearchedGames } from "../actions/FetchallgamesAction";

const UpcomingGames = () => {
  const dispatch = useDispatch();
  const loadDispatch = useDispatch();

  const data = useSelector((state) => state.games.searchedGames);
  const location = useLocation();

  const currentPage = location.pathname.includes("/page/")
    ? parseInt(location.pathname.split("upcoming/page/")[1])
    : 1;

  useEffect(() => {
    loadDispatch(setPage(currentPage));
  }, [location.pathname, loadDispatch, currentPage]);

  useEffect(() => {
    dispatch(fetchSearchedGames(currentPage, search));
  }, [dispatch, currentPage, genre]);

  return (
    <Main>
      <Games data={data} url={`/search/`} sort={false} genre={true} />
      <Footer />
    </Main>
  );
};

const Main = styled.div`
  position: relative;
  padding-top: 60px;
`;

export default UpcomingGames;
