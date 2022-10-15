import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 73px;
  font-family: ${({ theme }) => theme.fontFamily.Quicksand};
  font-style: normal;
  background-color: ${({ theme }) => theme.colors.bgColor};
  .input-box {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    padding-left: 25px;
    input {
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      color: rgba(255, 255, 255, 0.25);
      background-color: transparent;
      border: none;
      height: 100%;
      width: 70%;
    }
    #Search {
      padding-left: 15px;
      background-image: url("assets/svg/cancel.svg");
      background-repeat: no-repeat;
      background-position: center;
      outline: 0;
    }

    #Search::-webkit-search-cancel-button {
      position: relative;
      right: 20px;
      font-size: 40px;
    }
  }
`;
export { Wrapper };
