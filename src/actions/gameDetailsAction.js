import axios from "axios";
import { gameDetailsURL, gamescreenshotsURL } from "../api";

export const loadDetails = (id) => async (dispatch) => {
  dispatch({
    type: "IS_LOADING",
    payload: {
      isLoading: true,
    },
  });

  const details = await axios(gameDetailsURL(id));
  const screenshots = await axios(gamescreenshotsURL(id));

  dispatch({
    type: "FETCH_GAME_DETAILS",
    payload: {
      details: details,
      screenshots: screenshots.data.results,
    },
  });
};
