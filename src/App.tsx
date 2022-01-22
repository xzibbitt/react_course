import React, { useEffect } from "react";
import "./App.css";
import MainPage from "./containers/MainPageContainer";
// import Registration from "./containers/RegistrationPage";

const App = () => {
  useEffect(() => {
    console.log("app mount");
  }, []);
  // return <Registration />;
  return <MainPage />;
};

export default App;
