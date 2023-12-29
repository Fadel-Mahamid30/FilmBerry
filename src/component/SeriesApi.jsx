import axios from "axios";
import { getOptions } from "./options";

export const getSeries = async () => {
  const dataApi = await axios
    .get(`${import.meta.env.VITE_BASE_URL}/tv/popular?page=2`, getOptions)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });

  return dataApi;
};

export const searchSeries = async (query) => {
  const dataApi = await axios
    .get(
      `${
        import.meta.env.VITE_BASE_URL
      }/search/tv?query=${query}&include_adult=false&language=en-US&page=1`,
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

export const detailsSeries = async (seriesID) => {
  const dataApi = await axios
    .get(
      `${import.meta.env.VITE_BASE_URL}/tv/${seriesID}?language=en-US`,
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

export const getGendreSeries = async () => {
  const dataApi = await axios
    .get(`${import.meta.env.VITE_BASE_URL}/genre/tv/list?language=en`, getOptions)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });

  return dataApi;
};
