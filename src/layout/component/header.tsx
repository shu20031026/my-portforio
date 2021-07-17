import React from "react";
import "twin.macro";
import { Link } from "gatsby";
import { css } from "@emotion/react";
import Navigation from "./nav";
import SmNavigation from "./sm-nav";

const TitleFont = css`
  font-family: "Poiret One", cursive;
  font-weight: bold;
`;

const TextFont = css`
  font-family: "Noto Serif JP", serif;
`;

const Header: React.VFC = () => {
  return (
    <>
      <div tw="bg-gray-100 w-full fixed mt-0">
        <Link
          to="/"
          tw="pl-8 py-6 text-4xl flex sm:flex-row flex-col"
          css={TitleFont}
        >
          <p tw="mr-5">Shu</p>
          <p>Nakashima</p>
        </Link>
        <div tw="sm:hidden">
          <SmNavigation />
        </div>
      </div>
      <div tw="invisible sm:visible">
        <Navigation />
      </div>
    </>
  );
};

export default Header;
