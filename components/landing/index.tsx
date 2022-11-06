import React from "react";
import { Wrapper } from "./style";
import Header from "./heading";
import Release from "./release";
import Popular from "./popular";
const Landing = () => {
  return (
    <Wrapper>
      <Header />
      <Release />
      <Popular />
    </Wrapper>
  );
};

export default Landing;
