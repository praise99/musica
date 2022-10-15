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
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  /* height: 100vh; */
  flex-direction: column;
  justify-content: space-between;
`;

export default function Layout({ children }: LayoutProps) {
  return (
    <Wrapper>
      <Sidebar />
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </Wrapper>
  );
}
