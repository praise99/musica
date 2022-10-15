import React from "react";
import { Wrapper } from "./style";
import { Search } from "assets";
import Image from "next/image";
const Header = () => {
  return (
    <Wrapper>
      <div className="input-box">
        <Image src={Search} alt="search" />
        <input id="Search" name="Search" type="search" placeholder="Search" />
      </div>
    </Wrapper>
  );
};

export default Header;
