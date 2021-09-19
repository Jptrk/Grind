const initialState = {
  genreList: [],
};

const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_GAMES":
      return {
        ...state,
        genreList: action.payload.genreList.data.results,
      };
    default:
      return { ...state };
  }
};

export default genresReducer;
