const initialState = {
  page: null,
  selectedOption: "Popular",
  genres: [],
};

const controlsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_PAGE":
      return { ...state, page: action.payload.page };
    case "SELECTED_OPTION":
      return { ...state, selectedOption: action.payload.selectedOption };
    case "ADD_GENRE":
      return {
        ...state,
        genres: [...state.genres, action.payload.genres],
      };
    case "REMOVE_GENRE":
      return {
        ...state,
        genres: state.genres.filter((item) => {
          return item !== action.payload.genres;
        }),
      };
    case "CLEAR_GENRE":
      return {
        ...state,
        genres: [],
      };
    default:
      return { ...state };
  }
};

export default controlsReducer;
