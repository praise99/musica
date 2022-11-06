import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fontFamily.Quicksand};
  font-style: normal;
  @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 61%;
  background: #609eaf;
  padding: 38px 45px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.card};
  height: 373px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
    width: 100%;
  }
  .content {
    display: flex;
    height: 100%;
    justify-content: space-between;
    flex-direction: column;
    width: 50%;
    @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
      width: 100%;
    }
  }
  .absolute {
    position: absolute;
    right: 0;
    border-radius: 50%;
    @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
      top: 0;
      right: -20px;
      transform: rotate(270deg);
      width: 50%;
    }
  }
  .image {
    width: 50%;
    position: absolute;
    bottom: -4px;
    right: 0;
    @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
      display: none;
    }
  }
  .flex {
    display: flex;
    align-items: center;
    .love {
      padding: 0px 12px;
    }
  }
`;
const RightSide = styled.div`
  width: 39%;
  padding-left: 30px;
  padding-right: 10px;
  @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 47px;
  }
`;
const Cards = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 20px;
  height: 96px;
  cursor: pointer;
  width: 100%;
  display: flex;
  padding: 17px;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
    height: auto;
  }
  .each-card {
    display: flex;
    align-items: center;

    .desc {
      padding-left: 14px;
    }
  }
  .name {
    color: rgba(255, 255, 255, 0.5);
    margin: 6px 0px;
  }
  .pointer {
    cursor: pointer;
  }
`;
export { Wrapper, LeftSide, RightSide, Cards, Card };
