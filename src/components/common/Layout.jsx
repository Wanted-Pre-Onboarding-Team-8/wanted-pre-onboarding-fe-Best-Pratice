import React from "react";
import styled from "styled-components";
import { palette } from "../../style/palette";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  width: 500px;
  box-shadow: 0 0 10px ${palette.gray1};
`;
