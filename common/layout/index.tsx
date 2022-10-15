import React from "react";
import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";
import styled from "styled-components";
interface LayoutProps {
  children: ReactNode;
}
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
`;
const NavContainer = styled.div`
  width: 90px;
  position: fixed;
`;
const SideContainer = styled.div`
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 90px;
  /* position: relative; */
  .header {
    position: fixed;
    top: 0;
    width: calc(100% - 90px);
    height: 73px;
    z-index: 10;
  }
  .footer {
    position: fixed;
    bottom: 0;
    width: calc(100% - 90px);
  }
  .content {
    padding-top: 73px;
  }
`;

export default function Layout({ children }: LayoutProps) {
  return (
    <Wrapper>
      <NavContainer>
        <Sidebar />
      </NavContainer>
      <SideContainer>
        <div className="header">
          <Header />
        </div>
        <div className="content">{children}</div>
        <div className="footer">
          <Footer />
        </div>
      </SideContainer>
    </Wrapper>
  );
}
