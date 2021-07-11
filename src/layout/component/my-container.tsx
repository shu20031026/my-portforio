import React, { ReactNode } from "react";
import "twin.macro";
import { Props } from "../../types/index";

const MyContainer: React.VFC<Props> = ({ children }) => {
  return <div className={`w-full max-w-6xl mx-auto px-5`}>{children}</div>;
};

export default MyContainer;
