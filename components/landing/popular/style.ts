import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily.Quicksand};
  font-style: normal;
  padding-top: 34px;
  .release {
    margin-bottom: 15px;
  }
  .desc {
    padding: 12px 0px 8px 0px;
    color: #ffffff;
  }
`;
export { Wrapper };
