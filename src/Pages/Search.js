import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
// Components
import Games from "../components/Games";
import Footer from "../components/Footer";

import { setPage } from "../actions/ControlAction";
import { fetchSearchedGames } from "../actions/FetchallgamesAction";

const Search = () => {
  const dispatch = useDispatch();
  const loadDispatch = useDispatch();

  const data = useSelector((state) => state.games.searchedGames);
  const search = useSelector((state) => state.controls.search);
  const location = useLocation();
  const history = useHistory();

  const currentPage = location.pathname.includes("/page/")
    ? parseInt(location.pathname.split("search/page/")[1])
    : 1;

  useEffect(() => {
    if (search === "" || search.length === 0) {
      history.push("/");
    }
  }, []);

  useEffect(() => {
    loadDispatch(setPage(currentPage));
  }, [location.pathname, loadDispatch, currentPage]);

  useEffect(() => {
    dispatch(fetchSearchedGames(currentPage, search));
  }, [dispatch, currentPage, search]);

  return (
    <Main>
      <Games data={data} url={`/search/`} sort={false} genre={false} />
      <Footer />
    </Main>
  );
};

const Main = styled.div`
  position: relative;
  padding-top: 60px;
`;

export default Search;
