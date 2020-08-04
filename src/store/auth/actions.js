import { createTypes } from "redux-compose-reducer";
import { auth } from "../../api";

export const TYPES = createTypes("auth", [
  "setAuthStatus",
  "authRequest",
  "authSuccess",
]);

export const authorize = () => async (dispatch) => {
  try {
    const response = await auth();

    const data = {
      user: {
        name: response.Ot.Cd,
        email: response.Ot.yu,
      },
      gapiData: response.wc,
    };

    dispatch({ type: TYPES.authSuccess, payload: data });
  } catch (e) {
    console.log(e);
  }
};
