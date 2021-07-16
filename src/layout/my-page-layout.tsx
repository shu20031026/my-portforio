import React from "react";
import { Props } from "../types";
import Header from "./component/header";
import "twin.macro";
import Footer from "./component/footer";

const MyPageLayout: React.VFC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MyPageLayout;
