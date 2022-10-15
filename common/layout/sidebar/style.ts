import styled from "styled-components";
const Wrapper = styled.div`
  width: 96px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgColor};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 0px;
  font-family: ${({ theme }) => theme.fontFamily.Quicksand};
  font-style: normal;
`;
const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 28px;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 32px;
  width: 52px;
  margin-top: 20px;

  a {
    margin-top: 28px;
    color: #efeee0;
    opacity: 0.25;
    :hover {
      color: yellow;
      opacity: 1;
    }
  }
`;
export { Wrapper, IconsWrapper };
