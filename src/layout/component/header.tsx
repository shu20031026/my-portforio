import React from "react";
import "twin.macro";
import { Link } from "gatsby";
import { css } from "@emotion/react";

const Header: React.VFC = () => {
  return (
    <div tw="bg-gray-100">
      <Link to="/" tw="pl-8 py-12 text-6xl flex sm:flex-row flex-col">
        <p tw="mr-5">Shu</p>
        <p>Nakashima</p>
      </Link>
    </div>
  );
};

export default Header;
