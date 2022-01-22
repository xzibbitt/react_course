import React, { useEffect, useState } from "react";
// import Footer from "../../components/common/Footer";
// import Header from "../../components/common/Header";
import PageWrapper from "../../components/common/PageWrapper";
import MainContant from "../../components/MainContant";

const MainPage: React.FC = () => {
  const [contentVisibility, setContentVisibility] = useState(false);
  // const [stateSecond, setStateSecond] = useState(0);

  console.log("main page container");

  //   useEffect(() => {
  //     console.log("UseEffect", `state = ${state}`);
  //   });

  useEffect(() => {
    console.log("main page container mount");
  }, []);

  return (
    <PageWrapper>
      {contentVisibility && <MainContant />}
      <button
        type="button"
        onClick={() => setContentVisibility((prev) => !prev)}>
        {contentVisibility ? "скрыть текст" : "показать текст"}
      </button>
      {/* <button type="button" onClick={() => setStateSecond((prev) => prev + 1)}>
        UPDATE SECOND STATE
      </button> */}
    </PageWrapper>
  );
};

export default MainPage;
