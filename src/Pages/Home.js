//Libraries
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
//Components

import Featured from "../components/Featured";
import Games from "../components/Games";
import Footer from "../components/Footer";
//Actions
import { loadFeatured } from "../actions/FeaturedAction";
import { loadAllgames } from "../actions/FetchallgamesAction";
import { setPage } from "../actions/ControlAction";

const Home = () => {
  const dispatch = useDispatch();
  const loadDispatch = useDispatch();
  const location = useLocation();

  const currentPage = location.pathname.includes("/page/")
    ? parseInt(location.pathname.split("/page/")[1])
    : 1;

  //Global States
  const { featuredGames } = useSelector((state) => state.games);
  const { selectedOption, genres } = useSelector((state) => state.controls);
  const data = useSelector((state) => state.games.allGames);

  const genreList = genres
    .map((item) => {
      return item;
    })
    .join(",");

  useEffect(() => {
    if (featuredGames.length <= 0) {
      dispatch(loadFeatured());
    }
  }, [featuredGames, dispatch]);

  useEffect(() => {
    loadDispatch(setPage(currentPage));
  }, [location.pathname, loadDispatch, currentPage]);

  useEffect(() => {
    dispatch(loadAllgames(currentPage, selectedOption, genreList));
  }, [dispatch, selectedOption, currentPage, genreList]);

  return (
    <Main>
      <Featured featuredGames={featuredGames} />
      <Games data={data} url={"/"} sort={true} genre={true} />
      <Footer />
    </Main>
  );
};

const Main = styled.div`
  position: relative;
  padding-top: 60px;
`;

export default Home;
