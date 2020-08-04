import { createTypes } from "redux-compose-reducer";
import { getAlbum as getAlbumApi, getAlbums as getAlbumsApi } from "../../api";

export const TYPES = createTypes("albums", [
  "setPending",
  "setAlbums",
  "setAlbum",
  "setError",
]);

export const getAlbums = () => async (dispatch) => {
  try {
    dispatch({ type: TYPES.setPending });
    const albums = await getAlbumsApi();
    dispatch({ type: TYPES.setAlbums, payload: albums });
  } catch (error) {
    dispatch({ type: TYPES.setError, payload: error });
  }
};

export const getAlbum = (id) => async (dispatch) => {
  try {
    dispatch({ type: TYPES.setPending });
    const album = await getAlbumApi(id);
    dispatch({ type: TYPES.setAlbum, payload: album });
  } catch (error) {
    dispatch({ type: TYPES.setError, payload: error });
  }
};
