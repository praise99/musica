import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 125px;
  font-family: ${({ theme }) => theme.fontFamily.Quicksand};
  font-style: normal;
  backdrop-filter: blur(7px) hue-rotate(20deg);
  filter: drop-shadow(0px -25px 100px rgba(16, 16, 16, 0.51));
  display: flex;
  flex-direction: column;
  justify-content: center;

  input[type="range"] {
    -webkit-appearance: none;
    background-color: transparent;
    width: 70%;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 1px 1px 1px #facd66;
    background: #facd66;
    border-radius: 50px;
    border: 1px solid #facd66;
  }
  input[type="range"]::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #fff12b;
    border: 3px solid #ffffff;
    height: 23px;
    width: 23px;
    border-radius: 23px;
    background: #facd66;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7.5px;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #facd66;
  }
  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 12px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 1px 1px 1px #facd66;
    background: #facd66;
    border-radius: 1px;
    border: 1px solid #facd66;
  }
  input[type="range"]::-moz-range-thumb {
    box-shadow: 0px 0px 0px #fff12b;
    border: 3px solid #ffffff;
    height: 23px;
    width: 23px;
    border-radius: 23px;
    background: #facd66;
    cursor: pointer;
  }
  input[type="range"]::-ms-track {
    width: 100%;
    height: 12px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type="range"]::-ms-fill-lower {
    background: #facd66;
    border: 1px solid #facd66;
    border-radius: 2px;
    box-shadow: 1px 1px 1px #facd66;
  }
  input[type="range"]::-ms-fill-upper {
    background: #facd66;
    border: 1px solid #facd66;
    border-radius: 2px;
    box-shadow: 1px 1px 1px #facd66;
  }
  input[type="range"]::-ms-thumb {
    margin-top: 1px;
    box-shadow: 0px 0px 0px #fff12b;
    border: 3px solid #ffffff;
    height: 23px;
    width: 23px;
    border-radius: 23px;
    background: #facd66;
    cursor: pointer;
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: #facd66;
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: #facd66;
  }
`;
const Top = styled.div`
  display: flex;
  padding: 0px 40px;
  align-items: center;
  justify-content: space-between;
  .none {
    @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
      display: none !important;
    }
  }
  .music_name {
    display: flex;
    width: 34%;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
      width: 80%;
    }
    .description {
      padding-left: 10px;
      margin-top: -20px;
      .textColor {
        color: ${({ theme }) => theme.colors.white};
      }
      .descColor {
        color: rgba(255, 255, 255, 0.44);
        margin-top: 5px;
      }
    }
  }
  .music_control {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34%;
    margin-top: -20px;
    @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
      width: 20%;
    }
    .previous {
      margin-left: 48px;
    }
    .next {
      margin-right: 48px;
      @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
        margin-right: 10px;
        margin-left: 10px;
      }
    }
    .pointer {
      cursor: pointer;
    }
  }
  .music_volume {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 33%;
    .range {
      padding-left: 15px;
      margin-top: -10px;
      input {
        border-radius: 42px;
        height: 3px;
        width: 160px;
        -webkit-appearance: none;
        outline: none;
        background-color: ${({ theme }) => theme.colors.secondary};
        -webkit-transition: 0.2s;
        transition: opacity 0.2s;
      }
    }
  }
`;
const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
    display: none;
  }
`;
const Cover = styled.div`
  display: flex;
  align-items: center;
  height: 25.545289993286133px;
  width: 25px;
  border-radius: 99.16666412353516px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 0px 18px rgba(255, 255, 255, 0.3);
  justify-content: center;
  margin: 0px 44px;
  @media (max-width: ${({ theme }) => theme.responsive.ipad}) {
    margin: 0px 0px;
  }
  cursor: pointer;
`;
export { Wrapper, Top, Bottom, Cover };
