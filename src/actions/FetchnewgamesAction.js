import axios from "axios";
import { newgamesURL } from "../api";

export const loadNewGames = (page, genre) => async (dispatch) => {
  dispatch({
    type: "IS_LOADING",
    payload: {
      isLoading: true,
    },
  });

  const newGames = await axios.get(newgamesURL(page, genre));

  dispatch({
    type: "FETCH_NEWGAMES",
    payload: {
      newGames: newGames.data.results,
      pageCount: newGames.data.count,
    },
  });
};
