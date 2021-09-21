//Libraries
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
//Components
import Nav from "../components/Nav";
import Featured from "../components/Featured";
import Games from "../components/Games";
import Loading from "../components/LoadingPage";
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
  const { isLoading, featuredGames } = useSelector((state) => state.games);
  const { selectedOption } = useSelector((state) => state.controls);

  useEffect(() => {
    if (featuredGames.length <= 0) {
      dispatch(loadFeatured());
    }
  }, [featuredGames, dispatch]);

  useEffect(() => {
    loadDispatch(setPage(currentPage));
  }, [location.pathname, loadDispatch, currentPage]);

  useEffect(() => {
    dispatch(loadAllgames(currentPage, selectedOption));
  }, [dispatch, selectedOption, currentPage]);

  return (
    <Main>
      {isLoading && <Loading />}
      <Nav />
      <Featured featuredGames={featuredGames} />
      <Games />
      <Footer />
    </Main>
  );
};

const Main = styled.div`
  padding-top: 60px;
`;

export default Home;
