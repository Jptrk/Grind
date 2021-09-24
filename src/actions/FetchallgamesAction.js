import axios from "axios";
import { allGamesURL, genreListURL, searchedGamesURL } from "../api";

export const loadAllgames = (page, sort, genre) => async (dispatch) => {
  dispatch({
    type: "IS_LOADING",
    payload: {
      isLoading: true,
    },
  });

  let order = "";
  if (sort === "Release Date") {
    order = "released";
  }
  if (sort === "Popular") {
    order = "relevance";
  }
  if (sort === "Rating") {
    order = "rating";
  }

  let genres = genre;
  if (genre === undefined || genre === "" || genre === null) {
    genres = "";
  }

  // Fetch
  const gameData = await axios.get(allGamesURL(page, order, genres));
  const allGameList = gameData.data.results;

  dispatch({
    type: "FETCH_ALL_GAMES",
    payload: {
      games: allGameList,
      pageCount: gameData.data.count,
    },
  });
};

export const fetchGenre = () => async (dispatch) => {
  const genreList = await axios.get(genreListURL());
  dispatch({
    type: "FETCH_GENRES",
    payload: {
      genreList: genreList,
    },
  });
};

export const fetchSearchedGames = (page, search) => async (dispatch) => {
  dispatch({
    type: "IS_LOADING",
    payload: {
      isLoading: true,
    },
  });

  const searchedGames = await axios.get(searchedGamesURL(page, search));
  dispatch({
    type: "FETCH_SEARCHED_GAMES",
    payload: {
      searchedGames: searchedGames.data.results,
      pageCount: searchedGames.data.count,
    },
  });
};
