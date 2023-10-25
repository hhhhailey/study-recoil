import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import styled from "styled-components";

const DefaultLayout: React.FC<any> = ({ children }) => {
  return (
    <StyledWrap>
      <Sidebar />
      <StyledContent>{children}</StyledContent>
    </StyledWrap>
  );
};

export default DefaultLayout;

const StyledWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`;

const StyledContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  padding: 24px;
  padding-left: calc(180px + 24px);
`;
