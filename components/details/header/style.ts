import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme.fontFamily.Quicksand};
  font-style: normal;
  display: flex;
  align-items: flex-end;
  @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
    flex-direction: column;
  }
  .image-info {
    width: 25%;
    @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
      width: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
    }
  }
  .bottom {
    display: flex;
    align-items: center;
    padding-top: 40px;
    .middle {
      margin: 0px 10px;
    }
  }
  .information {
    width: 75%;
    padding-left: 30px;
    margin-bottom: 10px;
    @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
      width: 100%;
      padding-left: 0px;
      padding-top: 25px;
    }
    .title-desc {
      color: "#EFEEE0";
      padding: "10px 0px";
      width: "70% ";
      @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
        width: 100%;
        padding-top: 10px;
      }
    }
    .title-time {
      @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
        padding-top: 15px;
      }
    }
  }
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  padding: 11px 10px;
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(5px);
  border-radius: 32px;
  .text {
    padding-left: 11.33px;
  }
`;
export { Wrapper, Tag };
