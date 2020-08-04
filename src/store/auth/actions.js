import { createTypes } from "redux-compose-reducer";
import { auth } from "../../api";
import { TYPES as COMMONTYPES } from "../common/actions";

export const TYPES = createTypes("auth", [
  "setAuthStatus",
  "authRequest",
  "authSuccess",
]);

export const authorize = () => async (dispatch) => {
  try {
    const authInstance = await auth();
    const signInResponce = await authInstance.signIn();
    const profile = authInstance.currentUser.get().getBasicProfile();

    const data = {
      user: {
        name: profile.getName(),
        email: profile.getEmail(),
      },
      gapiData: signInResponce.wc,
    };

    const isSignedIn = await authInstance.isSignedIn.get();

    dispatch({ type: COMMONTYPES.setGapiInit, payload: true });
    dispatch({ type: TYPES.authSuccess, payload: data });
    dispatch({ type: TYPES.setAuthStatus, payload: isSignedIn });
  } catch (e) {
    console.log(e);
  }
};
