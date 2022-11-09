import styled from "styled-components";
import bg from "assets/svg/tomorrow.svg";

const Wrapper = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily.Quicksand};
  font-style: normal;
`;
const Cards = styled.div`
  margin-top: 49px;
  .selected {
    background-color: ${({ theme }) => theme.colors.bgColor};
  }
`;
const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(51, 55, 59, 0.37);
  backdrop-filter: blur(5px);
  border-radius: 15px;
  cursor: pointer;
  width: 100%;
  padding: 8px 10px;
  margin-bottom: 10px;
  .none {
    @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
      display: none !important;
    }
  }
  .image {
    display: flex;
    align-items: center;
    width: 7%;
    justify-content: space-between;
    @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
      flex-direction: column;
    }
  }
  .title {
    display: flex;
    align-items: center;
    width: 40%;
    justify-content: space-between;
    @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
      flex-direction: column;
      width: 70%;
      align-items: flex-start;
      margin-left: 14px;
    }
    .single {
      @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
        padding-top: 6px;
      }
    }
  }

  .like {
    display: flex;
    align-items: center;
    width: 25%;
    justify-content: space-between;
    @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
      flex-direction: column;
      width: 15%;
    }
    .first {
      @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
        order: 2;
      }
    }
    .second {
      @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
        order: 1;
      }
    }
  }
`;
export { Wrapper, Cards, Card };
