import React from "react";
import { useDispatch } from "react-redux";
import { init } from "./store/common/actions";
import Script from "react-load-script";
import Routes from "./routes/Routes";

const App = () => {
  const dispatch = useDispatch();

  const initApi = () => {
    const initGapi = (isAuth) => dispatch(init(isAuth));
    window.gapi && window.gapi.load("auth2:client", initGapi);
  };

  return (
    <>
      <Script url="https://apis.google.com/js/api.js" onLoad={initApi} />
      <Routes />
    </>
  );
};

export default App;
