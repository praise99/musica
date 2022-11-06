import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
    justify-content: center;
  }
`;
const Card = styled.div`
  position: relative;
  overflow: hidden;
  width: 200px;
  height: 234px;
  margin-right: 24px;
  border-radius: 25px;
  margin-bottom: 24px;
  text-align: center;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: absolute;
  width: 100%;
  padding: 0px 19px;
  bottom: 15px;
  .title-below {
    padding-top: 32px;
  }
  .white {
    color: ${({ theme }) => theme.colors.white};
  }
  .limit {
    color: ${({ theme }) => theme.colors.light};
  }
  .name {
    color: ${({ theme }) => theme.colors.light};
    opacity: 0.75;
  }
`;
export { Wrapper, Card, Content };
