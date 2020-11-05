import * as actionTypes from "./actions";

const initialState = {
  actions: {
    data: [],
    type: "actions",
  },
  comedy: {
    data: [],
    type: "comedy",
  },
  crime: {
    data: [],
    type: "crime",
  },
  current: null,
  show: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FILMS_ACTIONS:
      return {
        ...state,
        actions: {
          data: [...action.data],
          type: "actions",
        },
      };
    case actionTypes.ADD_FILMS_COMEDY:
      return {
        ...state,
        comedy: {
          data: [...action.data],
          type: "comedy",
        },
      };
    case actionTypes.ADD_FILMS_CRIME:
      return {
        ...state,
        crime: {
          data: [...action.data],
          type: "crime",
        },
      };

    case actionTypes.SHOW_FILMS:
      let type = state[action.filmType]
      const currentFilm = {
        ...type.data[action.filmIndex],
        type: action.filmType
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
