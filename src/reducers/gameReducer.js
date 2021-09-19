const initialState = {
  allGames: [],
  featuredGames: [],
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_FEATURED":
      return { ...state, featuredGames: action.payload.games };
    case "FETCH_ALL_GAMES":
      return {
        ...state,
        allGames: action.payload.games,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
