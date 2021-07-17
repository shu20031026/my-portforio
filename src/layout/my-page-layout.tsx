import React from "react";
import { Props } from "../types";
import Header from "./component/header";
import "twin.macro";
import Footer from "./component/footer";
import Navigation from "./component/nav";

const MyPageLayout: React.VFC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <main tw="pt-52 sm:pt-32">{children}</main>
      <Footer />
    </div>
  );
};

export default MyPageLayout;
