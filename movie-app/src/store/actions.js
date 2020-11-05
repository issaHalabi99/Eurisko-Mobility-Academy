import axios from "../axios-instance/axios-films";

export const ADD_FILMS_ACTIONS = "ADD_FILMS_ACTIONS";
export const ADD_FILMS_COMEDY = "ADD_FILMS_COMEDY";
export const ADD_FILMS_CRIME = "ADD_FILMS_CRIME";

export const SHOW_FILMS = "SHOW_FILMS";
export const DISABLE_FILMS = "DISABLE_FILMS";

export const addActionFilms = (data) => {
  return {
    type: ADD_FILMS_ACTIONS,
    data: data,
  };
};
export const addComedyFilms = (data) => {
  return {
    type: ADD_FILMS_COMEDY,
    data: data,
  };
};
export const addCrimeFilms = (data) => {
  return {
    type: ADD_FILMS_CRIME,
    data: data,
  };
};

export const add_Films = () => {
  return (dispatch) => {
    Promise.all([
      axios.get("/tv?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_genres=28"),
      axios.get("/tv?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_genres=35"),
      axios.get("/tv?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&with_genres=80"),
    ])
      .then((res) => {
        dispatch(addActionFilms([...res[0].data.results]));
        dispatch(addComedyFilms([...res[1].data.results]));
        dispatch(addCrimeFilms([...res[2].data.results]));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
