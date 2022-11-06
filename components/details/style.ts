import styled from "styled-components";
import bg from "assets/svg/tomorrow.svg";

const Wrapper = styled.div`
  width: 100%;
  height: -webkit-fill-available;
  background-color: ${({ theme }) => theme.colors.bgColor};
  padding: 20px;
  height: auto;
  padding-bottom: 200px;
`;
export { Wrapper };
