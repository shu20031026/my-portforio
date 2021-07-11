import React from "react";
import "twin.macro";
import { Link } from "gatsby";

const Header: React.VFC = () => {
  return (
    <div tw="h-20 mt-8">
      <Link to="/" tw=" ml-11 text-6xl ">
        Shu Nakashima
      </Link>
    </div>
  );
};

export default Header;
