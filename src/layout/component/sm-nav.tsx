import React from "react";
import { Link } from "gatsby";
import "twin.macro";
import { css } from "@emotion/react";

const LinkFont = css`
  font-family: "Noto Serif JP", serif;
  font-family: "Rajdhani", sans-serif;
`;

const SmNavigation: React.VFC = () => {
  return (
    <div tw="w-full border-l-4 border-r-4 border-white flex">
      <Link
        to="/about"
        tw=" py-2 w-1/3 border-t-4 border-r-4  border-white text-center"
        css={LinkFont}
      >
        about
      </Link>
      <Link
        to="/blog"
        tw="py-2 w-1/3 border-t-4 border-r-4 border-white text-center"
        css={LinkFont}
      >
        blog
      </Link>
      <Link
        to="/works"
        tw="py-2 w-1/3 border-t-4 border-white text-center"
        css={LinkFont}
      >
        works
      </Link>
    </div>
  );
};

export default SmNavigation;
