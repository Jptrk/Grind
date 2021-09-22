export const filterGenre = (checked, genre) => async (dispatch) => {
  if (checked) {
    dispatch({ type: "ADD_GENRE", payload: { genres: genre } });
  } else {
    dispatch({ type: "REMOVE_GENRE", payload: { genres: genre } });
  }
};

export const clearGenre = () => async (dispatch) => {
  dispatch({ type: "CLEAR_GENRE" });
};
