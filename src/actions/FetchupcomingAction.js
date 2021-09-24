import axios from "axios";
import { upcomingGamesURL } from "../api";

export const loadUpcomingGames = (page, genre) => async (dispatch) => {
  dispatch({
    type: "IS_LOADING",
    payload: {
      isLoading: true,
    },
  });

  let genres = genre;
  if (genre === undefined || genre === "" || genre === null) {
    genres = "";
  }

  const upcomingGames = await axios.get(upcomingGamesURL(page, genres));

  dispatch({
    type: "FETCH_UPCOMING_GAMES",
    payload: {
      upcomingGames: upcomingGames.data.results,
      pageCount: upcomingGames.data.count,
    },
  });
};
