import axios from "axios";
import { allGamesURL, genreListURL } from "../api";

export const loadAllgames = (page, sort) => async (dispatch) => {
  let order = "";
  if (sort === "Release Date") {
    order = "released";
  }
  if (sort === "Popular") {
    order = "popular";
  }
  if (sort === "Rating") {
    order = "rating";
  }

  // Fetch
  const gameData = await axios.get(allGamesURL(page, order));
  const allGameList = gameData.data.results;
  const genreList = await axios.get(genreListURL());

  dispatch({
    type: "FETCH_ALL_GAMES",
    payload: {
      games: allGameList,
      genreList: genreList,
    },
  });
};
