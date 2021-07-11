import React from "react";
import MyContainer from "./my-container";
import "twin.macro";
import { css } from "@emotion/react";

const footerItems = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer: React.VFC = () => {
  return (
    <div tw="bg-gray-100">
      <MyContainer>
        <div css={footerItems}>
          <div tw="text-gray-500 text-xs">
            © {new Date().getFullYear()} Shu Nakashima.
          </div>
          <div>
            <a href="https://twitter.com/hiiragi61848684" target="_blank">
              T
            </a>
            <a href="https://github.com/shu20031026" target="_blank">
              G
            </a>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Footer;
