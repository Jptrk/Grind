import axios from "axios";
import { allGamesURL, genreListURL } from "../api";

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
  const genreList = await axios.get(genreListURL());

  dispatch({
    type: "FETCH_ALL_GAMES",
    payload: {
      games: allGameList,
      genreList: genreList,
      pageCount: gameData.data.count,
    },
  });
};
