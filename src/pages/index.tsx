import React from "react";
import "twin.macro";
import { css } from "@emotion/react";
import MyPageLayout from "../layout/my-page-layout";

const Main = () => {
  return (
    <div>
      <MyPageLayout tw="h-screen">
        <div>main</div>
      </MyPageLayout>
    </div>
  );
};
export default Main;
