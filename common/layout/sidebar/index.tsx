import React from "react";
import { Wrapper, IconsWrapper } from "./style";
import { Logo } from "assets";
import Image from "next/image";
import Link from "next/link";
import { FirstSection, SecondSection } from "./data";
const Sidebar = () => {
  return (
    <Wrapper>
      <Image src={Logo} alt="logo" />
      <IconsWrapper>
        {FirstSection.map((item) => {
          return (
            <Link href={item.route} key={item.id}>
              <a>{item.image}</a>
            </Link>
          );
        })}
      </IconsWrapper>
      <IconsWrapper>
        {SecondSection.map((item) => {
          return (
            <Link href={item.route} key={item.id}>
              <a>{item.image}</a>
            </Link>
          );
        })}
      </IconsWrapper>
    </Wrapper>
  );
};

export default Sidebar;
