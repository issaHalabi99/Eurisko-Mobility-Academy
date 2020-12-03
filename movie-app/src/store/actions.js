/* eslint-disable no-undef */
import axios from "../axios-instance/axios-films";

export const ADD_FILMS_ACTIONS = "ADD_FILMS_ACTIONS";
export const ADD_FILMS_COMEDY = "ADD_FILMS_COMEDY";
export const ADD_FILMS_CRIME = "ADD_FILMS_CRIME";

export const SHOW_FILMS = "SHOW_FILMS";
export const DISABLE_FILMS = "DISABLE_FILMS";


export const add_Films = () => {
  return (dispatch) => {
    Promise.all([
      axios.get(`/tv?api_key=${process.env.REACT_APP_THE_MOVIE_DATABASE_API_KEY_ACTIONS}`),
      axios.get(`/tv?api_key=${process.env.REACT_APP_THE_MOVIE_DATABASE_API_KEY_COMEDY}`),
      axios.get(`/tv?api_key=${process.env.REACT_APP_THE_MOVIE_DATABASE_API_KEY_CRIME}`)
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

export const onShowFilm = (filmType, index) => {
  return {
    type: SHOW_FILMS,
    filmType: filmType,
    filmIndex: index,
    
  };
};

export const onDisableFilm = () => {
  return {
    type: DISABLE_FILMS,
  };
};
