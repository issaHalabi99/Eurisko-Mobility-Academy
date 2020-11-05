import * as actionTypes from "./actions";

const initialState = {
  actions: [],
  current: null,
  show: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FILMS:
      return {
        ...state,
        actions: [...action.data],
      };

    case actionTypes.SHOW_FILMS:
      const currentFilm = {
        ...state.actions[action.filmIndex],
      };

      return {
        ...state,
        current: currentFilm,
        show: true,
      };

    case actionTypes.DISABLE_FILMS:
      return {
        ...state,
        show: false,
      };

    default:
      //return state;
  }

  return state;
};

export default reducer;
