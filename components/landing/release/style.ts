import styled from "styled-components";
const Wrapper = styled.div`
  /* width: 100%; */
  font-family: ${({ theme }) => theme.fontFamily.Quicksand};
  font-style: normal;
  display: flex;
  align-items: center;
  overflow: hidden;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    height: 0px;
  }
  .image {
    margin-right: 30px;
    border-radius: 25px;
    height: 153px;
    width: 153px !important;
    border-radius: 25px;
  }
`;
export { Wrapper };
