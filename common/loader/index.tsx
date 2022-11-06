import styled from "styled-components";

const SpinnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgColor};
`;

const Spin = styled.h6`
  width: 100px;
  margin-top: -200px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid transparent;
  margin-left: 8px;
  border-top-color: black;
  animation: spin 1s linear infinite;
  -webkit-animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

const PageSpinner = () => {
  return (
    <SpinnerWrapper>
      <Spin />
    </SpinnerWrapper>
  );
};

export default PageSpinner;
