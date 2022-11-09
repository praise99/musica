import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  height: -webkit-fill-available;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 20px;
  height: 60vh;
  overflow-y: scroll;
`;
const Cards = styled.div`
  .selected {
    background-color: ${({ theme }) => theme.colors.bgColor};
  }
`;
const Card = styled.div`
  display: flex;
  align-items: center;
  backdrop-filter: blur(5px);
  border-radius: 15px;
  cursor: pointer;
  width: 100%;
  padding: 8px 10px;
  margin-bottom: 10px;
  .image {
    display: flex;
    align-items: center;
    width: 7%;
    justify-content: space-between;
    @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
      width: 20%;
    }
  }
  .title {
    display: flex;
    align-items: center;
    width: 80%;
    justify-content: space-between;
  }

  .like {
    display: flex;
    align-items: center;
    width: 25%;
    justify-content: space-between;
  }
`;
export { Wrapper, Cards, Card };
