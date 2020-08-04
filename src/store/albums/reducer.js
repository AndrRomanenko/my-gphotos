import { TYPES } from "./actions";
import { composeReducer } from "redux-compose-reducer";

const initialState = {
  data: [],
  isLoading: false,
  error: "",
  currentAlbum: [],
};

export const setPending = (state) => {
  return { ...state, isLoading: true, error: "" };
};

export const setAlbums = (state, action) => {
  return { ...state, isLoading: false, data: action.payload };
};

export const setAlbum = (state, action) => {
  return { ...state, isLoading: false, currentAlbum: action.payload };
};

export const setError = (state, action) => {
  return { ...state, isLoading: false, error: action.payload };
};

export default composeReducer({
  types: TYPES,
  initialState,
  reducers: {
    setPending,
    setError,
    setAlbums,
    setAlbum,
  },
});
