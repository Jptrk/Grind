import axios from "axios";
import { popularGamesURL } from "../api";

export const loadFeatured = () => async (dispatch) => {
  //Fetch
  const featuredData = await axios.get(popularGamesURL());
  const featuredList = featuredData.data.results;

  for (let i = 0; i < featuredList.length; i++) {
    featuredList[i].carouselId = i + 1;
    if (i === 0) {
      featuredList[i].active = true;
    } else {
      featuredList[i].active = false;
    }
  }

  dispatch({
    type: "FETCH_FEATURED",
    payload: {
      games: featuredList,
    },
  });
};
