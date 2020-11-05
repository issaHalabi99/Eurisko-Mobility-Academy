import axiosAction from "../axios-instance/axios-films-action";

export const ADD_FILMS = "ADD_FILMS";
export const SHOW_FILMS = "SHOW_FILMS";
export const DISABLE_FILMS = "DISABLE_FILMS";

export const addActionFilms = (data) => {
  return {
    type: ADD_FILMS,
    data: data,
  };
};

export const add_Films = () => {
  return (dispatch) => {
    axiosAction
      .get()
      .then((res) => {
        dispatch(addActionFilms([...res.data.results]));
      });
  };
};

