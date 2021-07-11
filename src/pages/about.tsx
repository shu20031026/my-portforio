import React from "react";
import { Link } from "gatsby";
import "twin.macro";
import { css } from "@emotion/react";

const myStyle = css`
  color: red;
`;

const About = () => {
  return (
    <>
      <div css={myStyle}>about page</div>
      <Link to="/">hoge</Link>
    </>
  );
};

export default About;
