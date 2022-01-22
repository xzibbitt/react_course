import React, { useEffect } from "react";

const MainContant = () => {
  const handler = () => {
    console.log("click");
  };
  useEffect(() => {
    console.log("Main content mount");
    document.body.addEventListener("click", handler);
    return () => {
      console.log("main content unmount!!");
      document.body.removeEventListener("click", handler);
    };
  }, []);
  return (
    <div>
      <h1>Main Page Content</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto fuga
        quidem id blanditiis molestias modi praesentium maxime non unde omnis
        fugiat cupiditate laboriosam commodi eum, quaerat reiciendis, voluptas
        eaque consectetur! Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Asperiores excepturi quis totam eius nostrum nemo sint. Sit odio
        voluptate ullam beatae neque quasi, accusamus deserunt odit nostrum
        facere aliquid ipsam?
      </p>
    </div>
  );
};

export default MainContant;
