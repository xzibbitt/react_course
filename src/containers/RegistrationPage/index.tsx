import React from "react";
// import Footer from "../../components/common/Footer";
// import Header from "../../components/common/Header";
import PageWrapper from "../../components/common/PageWrapper";
import Registration from "../../components/Registraition";

const RegistrationPage: React.FC = () => {
  return (
    <PageWrapper>
      <Registration />
    </PageWrapper>
    // <div className="page_wrapper">
    //   <Header />
    //   <main className="main">
    //     <Registration />
    //   </main>
    //   <Footer />
    // </div>
  );
};

export default RegistrationPage;
