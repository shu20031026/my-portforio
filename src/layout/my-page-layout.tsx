import React from "react";
import { Props } from "../types";
import Header from "./component/header";
import "twin.macro";
import MyContainer from "./component/my-container";
import Footer from "./component/footer";

const MyPageLayout: React.VFC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        <main>
          <MyContainer>{children}</MyContainer>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MyPageLayout;
