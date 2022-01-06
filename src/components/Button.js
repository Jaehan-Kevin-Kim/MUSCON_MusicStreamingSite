import React from "react";
import styled from "@emotion/styled";
import "./Button.css";

const ButtonHover = styled.button`
  position: relative;
  appearance: none;
  background-color: ${(props) => props.bgColor};
  padding: 1em 2em;
  border: none;
  color: ${(props) => props.fontColor};
  font-size: 1.2em;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  border-radius: 100px;
  text-transform: uppercase;

  span {
    position: relative;
  }

  &::before {
    --size: 0;
    content: "";
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(circle closest-side, #4405f7, transparent);
    transform: translate(-50%, -50%);
    transition: width 1s ease, height 1s ease;
  }

  &:hover::before {
    --size: 400px;
  }
`;

const LargeButton = styled.button`
  margin-top: 43px;
  position: absolute;
  left: 818px;
  // bottom: 326px;
  background: transparent;
  border: none;
  overflow: hidden;
  color: white;
  // cursor: pointer;
  // font-size: 25px;
  // letter-spacing: 6px;
  // font-weight: 700;
  // text-transform: uppercase;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 28px;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &::after {
    content: "";
    height: 500px;
    width: 500px;
    position: absolute;
    z-index: -1;
    left: -90px;
    top: -200px;

    background: transparent
      linear-gradient(90deg, #1fe1e9 0%, #5e33d1 34%, #d34848 65%, #ffb33f 100%)
      0% 0% no-repeat padding-box;
    animation: spin 3s linear infinite;
  }

  &:hover::after {
    opacity: 0.8;
    outline: #1fe1e9;
  }
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const SmallButton = styled.button`
  // color: #d34848;
  color: ${(props) => props.fontColor};
  /* position: absolute !important; */
  top: 95px;
  background-color: ${(props) => props.bgColor};
  /* right: 79px; */
`;

const Button = ({ name, size, fontColor, bgColor, style }) => {
  console.log("fontColor", fontColor);
  return (
    <>
      {size === "large" && (
        <LargeButton className="btn__large" style={style}>
          {name}
        </LargeButton>
      )}
      {size === "small" && (
        <SmallButton
          className="btn__small"
          fontColor={fontColor}
          bgColor={bgColor}
          style={style}>
          {name}
        </SmallButton>
      )}
      {size === "hover" && (
        <ButtonHover fontColor={fontColor} bgColor={bgColor} style={style}>
          {name}
        </ButtonHover>
      )}
    </>
  );
};

export default Button;
