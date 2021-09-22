import axios from "axios";
import { gameDetailsURL, gamescreenshotsURL, gamevideoURL } from "../api";

export const loadDetails = (id) => async (dispatch) => {
  dispatch({
    type: "IS_LOADING",
    payload: {
      isLoading: true,
    },
  });

  const details = await axios(gameDetailsURL(id));
  const screenshots = await axios(gamescreenshotsURL(id));
  const video = await axios(gamevideoURL(id));

  dispatch({
    type: "FETCH_GAME_DETAILS",
    payload: {
      details: details,
      screenshots: screenshots.data.results,
    },
  });

  if (video.data.count > 0) {
    dispatch({
      type: "FETCH_VIDEO",
      payload: {
        video: video.data.results[0],
      },
    });
  } else {
    dispatch({
      type: "FETCH_VIDEO",
      payload: {
        video: [],
      },
    });
  }
};
