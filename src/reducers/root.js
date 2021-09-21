import { combineReducers } from "redux";
import genresReducer from "./genreReducer";
import gamesReducer from "./gameReducer";
import controlsReducer from "./controlsReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  genres: genresReducer,
  controls: controlsReducer,
});

export default rootReducer;
