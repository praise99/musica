import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  height: -webkit-fill-available;
  background-color: ${({ theme }) => theme.colors.bgColor};
  padding: 20px;
  height: auto;
  padding-bottom: 200px;
  .tab-content {
    display: none;
  }

  .tab-content.active-content {
    display: block;
    padding-top: 23px;
  }
`;
export { Wrapper };
