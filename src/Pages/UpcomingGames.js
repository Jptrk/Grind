import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router";
// Components
import Games from "../components/Games";
import Footer from "../components/Footer";

import { loadUpcomingGames } from "../actions/FetchupcomingAction";
import { setPage } from "../actions/ControlAction";

const UpcomingGames = () => {
  const dispatch = useDispatch();
  const loadDispatch = useDispatch();

  const data = useSelector((state) => state.games.upcomingGames);
  const location = useLocation();
  const genre = useSelector((state) => state.controls.genres);
  const currentPage = location.pathname.includes("/page/")
    ? parseInt(location.pathname.split("upcoming/page/")[1])
    : 1;

  useEffect(() => {
    loadDispatch(setPage(currentPage));
  }, [location.pathname, loadDispatch, currentPage]);

  useEffect(() => {
    dispatch(loadUpcomingGames(currentPage, genre));
  }, [dispatch, currentPage, genre]);

  return (
    <Main>
      <Games data={data} url={`/upcoming/`} sort={false} genre={true} />
      <Footer />
    </Main>
  );
};

const Main = styled.div`
  position: relative;
  padding-top: 60px;
`;

export default UpcomingGames;
