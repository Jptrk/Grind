import { combineReducers } from "redux";
import genresReducer from "./genreReducer";
import gamesReducer from "./gameReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  genres: genresReducer,
});

export default rootReducer;
