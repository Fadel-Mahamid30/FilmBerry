import axios from "axios";
import { getOptions } from "./options";

export const getMovie = async (movieList = "now_playing") => {
  const dataApi = await axios
    .get(`${import.meta.env.VITE_BASE_URL}/movie/${movieList}?page=2`, getOptions)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });

  return dataApi;
};

export const searchMovie = async (query) => {
  const dataApi = await axios
    .get(
      `${
        import.meta.env.VITE_BASE_URL
      }/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      getOptions
    )
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });

  return dataApi;
};

export const detailsMovie = async (movieID) => {
  const dataApi = await axios
    .get(
      `${import.meta.env.VITE_BASE_URL}/movie/${movieID}?language=en-US`,
      getOptions
    )
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });

  return dataApi;
};

export const getGendreMovie = async () => {
  const dataApi = await axios
    .get(
      `${import.meta.env.VITE_BASE_URL}/genre/movie/list?language=en`,
      getOptions
    )
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });

  return dataApi;
};
