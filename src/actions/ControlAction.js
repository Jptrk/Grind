export const setPage = (page) => (dispatch) => {
  dispatch({
    type: "CHANGE_PAGE",
    payload: {
      page: page,
    },
  });
};

export const setSelectedOption = (selected) => (dispatch) => {
  dispatch({
    type: "SELECTED_OPTION",
    payload: {
      selectedOption: selected,
    },
  });
};

export const searchonChange = (input) => (dispatch) => {
  dispatch({
    type: "SEARCH_INPUT",
    payload: {
      search: input,
    },
  });
};
