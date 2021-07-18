import React from "react";
import "twin.macro";
import { css } from "@emotion/react";
import MyPageLayout from "../layout/my-page-layout";

const MainPage: React.VFC = () => {
  return (
    <div>
      <MyPageLayout tw="h-screen">
        <div>main</div>
      </MyPageLayout>
    </div>
  );
};
export default MainPage;
