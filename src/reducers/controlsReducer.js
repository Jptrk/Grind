const initialState = {
  page: null,
  selectedOption: "Popular",
};

const controlsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_PAGE":
      return { ...state, page: action.payload.page };
    case "SELECTED_OPTION":
      return { ...state, selectedOption: action.payload.selectedOption };
    default:
      return { ...state };
  }
};

export default controlsReducer;
