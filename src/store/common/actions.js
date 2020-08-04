import { createTypes } from "redux-compose-reducer";

export const TYPES = createTypes("init", ["setGapiInit", "initGapi"]);

export const init = () => async (dispatch) => {
  try {
    const { gapi } = window;
    dispatch({ type: TYPES.setGapiInit, payload: false });

    await gapi.client.init({
      apiKey: process.env.REACT_APP_API_KEY,
      client_id: process.env.REACT_APP_CLIENT_ID,
      scope: "https://www.googleapis.com/auth/photoslibrary",
    });

    dispatch({ type: TYPES.setGapiInit, payload: true });
  } catch (e) {
    console.log(e);
  }
};
