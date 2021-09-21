const initialState = {
  allGames: [],
  featuredGames: [],
  pageCount: 0,
  isLoading: true,
  gameDetails: [],
  screenshots: [],
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_FEATURED":
      return {
        ...state,
        featuredGames: action.payload.games,
        isLoading: false,
      };
    case "FETCH_ALL_GAMES":
      return {
        ...state,
        allGames: action.payload.games,
        isLoading: false,
        pageCount: action.payload.pageCount,
      };
    case "FETCH_GAME_DETAILS":
      return {
        ...state,
        gameDetails: action.payload.details,
        screenshots: action.payload.screenshots,
        isLoading: false,
      };

    case "IS_LOADING":
      return { ...state, isLoading: action.payload.isLoading };
    default:
      return { ...state };
  }
};

export default gamesReducer;
