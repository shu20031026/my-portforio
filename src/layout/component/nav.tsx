import React from "react";
import { Link } from "gatsby";
import "twin.macro";
import { css } from "@emotion/react";

const LinkFont = css`
  font-family: "Noto Serif JP", serif;
  font-family: "Rajdhani", sans-serif;
`;

const Navigation: React.VFC = () => {
  return (
    <div tw="fixed pt-32 pl-8">
      <ul>
        <li>
          <Link to="/about" tw="text-xl hover:text-gray-300" css={LinkFont}>
            ・ ABOUT
          </Link>
        </li>
        <div tw="h-6 border-l-2 border-black ml-2" />
        <li>
          <Link to="/works" tw="text-xl hover:text-gray-300" css={LinkFont}>
            ・ WORKS
          </Link>
        </li>
        <div tw="h-6 border-l-2 border-black ml-2" />
        <li>
          <Link to="/history" tw="text-xl hover:text-gray-300" css={LinkFont}>
            ・ HISTORY
          </Link>
        </li>
        <div tw="h-6 border-l-2 border-black ml-2" />
        <li>
          <Link to="/blog" tw="text-xl hover:text-gray-300" css={LinkFont}>
            ・ BLOG
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
