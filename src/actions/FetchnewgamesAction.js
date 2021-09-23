import axios from "axios";
import { genreListURL, newgamesURL } from "../api";

export const loadNewGames = (page) => async (dispatch) => {
  dispatch({
    type: "IS_LOADING",
    payload: {
      isLoading: true,
    },
  });

  const newGames = await axios.get(newgamesURL(page));
  const genreList = await axios.get(genreListURL());

  dispatch({
    type: "FETCH_NEWGAMES",
    payload: {
      newGames: newGames.data.results,
      pageCount: newGames.data.count,
      genreList: genreList,
    },
  });
};
