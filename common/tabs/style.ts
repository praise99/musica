import styled from "styled-components";
export const Wrapper = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.Quicksand};
  font-style: normal;
  font-weight: normal;
  margin-top: 1rem;
  .wrap {
    display: flex;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
      width: 100%;
    }
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 27px;
    padding: 13px 25px;
    background-color: transparent;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    margin-right: 20px;
    color: ${({ theme }) => theme.colors.light};
    border: 1px solid ${({ theme }) => theme.colors.light};
  }

  .btn.active-btn {
    background: ${({ theme }) => theme.colors.secondary};
    border: none;
    color: ${({ theme }) => theme.colors.dark};
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
  }
`;
