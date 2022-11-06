import React from "react";
import { Wrapper, IconsWrapper } from "./style";
import { Logo } from "assets";
import Image from "next/image";
import Link from "next/link";
import { FirstSection, SecondSection } from "./data";
import { useRouter } from "next/router";
const Sidebar = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <Image src={Logo} alt="logo" />
      <IconsWrapper>
        {FirstSection.map((item) => {
          return (
            <Link href={item.route} key={item.id}>
              <a className={router.pathname == item.route ? "active" : ""}>
                {item.image}
              </a>
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
