import React from "react";
import styled from "styled-components";
import { palette } from "../../style/palette";

const Input = ({ type = "text", validation, validationMessage, ...rest }) => {
  return (
    <InputWrapper isValid={validation === "valid"}>
      <input type={type} {...rest} />
      <span>{validation === "invalid" && validationMessage}</span>
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.3s border;
  > input {
    height: 40px;
    font-size: 16px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid
      ${({ isValid }) => (isValid ? palette.green1 : palette.gray2)};
  }

  > span {
    height: 15px;
    padding: 5px 10px;
    font-size: 12px;
    color: ${palette.red1};
  }
`;
