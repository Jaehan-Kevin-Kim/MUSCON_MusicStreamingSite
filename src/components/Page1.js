import React, { useCallback, useState } from "react";
// import styled from 'styled-components';
import { css } from "@emotion/css";
import styled from "@emotion/styled";

import { zoomInDown, zoomIn, fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

import Background from "./Background";
import Image1 from "../asset/images/Hero_Image1.png";
import Button from "./Button";

// const P1Container = styled.div``;

const Hamburger = styled.div`
  display: flex;
  align-items: center;
  width: 56px;
  height: 34px;
  z-index: 2;
  cursor: pointer;
`;

const HamburgerBar = styled.div`
  width: 100%;
  height: 7px;
  position: relative;
  background: white 0% 0% no-repeat padding-box;
  opacity: 1;

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 7px;
    background: white 0% 0% no-repeat padding-box;
    opacity: 1;
  }

  &::after {
    bottom: 14px;
  }

  &::before {
    top: 14px;
  }
`;

const Title = styled.h1`
  margin-top: 355px;
  text-align: center;
  font-size: 65px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 6.5px;
  color: white;
  opacity: 1;

  // width: 100%;
  // height: 100%;
`;

const SubTitle = styled.p`
  width: 820px;
  margin: 0 auto;
  margin-top: 32px;
  text-align: center;
  font-size: 32px;
  letter-spacing: 3.2px;
  color: #ffffff;
  opacity: 1;
`;

const Img = styled.img`
  position: absolute;
  z-index: -1000;
  opacity: 0.9;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
  }
`;

const HamburgerClicked = styled.div`
  position: absolute;
  background: black;
  top: -300px;
  left: -300px;
  border-radius: 50%;
  width: 900px;
  height: 800px;
  /* transform: scale(3); */
  animation: zoom 0.5s linear;

  @keyframes zoom {
    0% {
      transform: scale(0);
    }
    50% {
      /* transform: translateX(35px); */
    }
    50% {
      /* transform: translateY(-35px); */
    }
    50% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
    100% {
      /* transform: translateX(35px); */
    }
    100% {
      /* transform: translateY(-35px); */
    }
    /* 25% {
      transform: translateX(100px);
    }
    25% {
      transform: scaleX(2);
    }
    25% {
      transform: translateY(-100px);
    }
    25% {
      transform: scaleY(2);
    } */
  }
`;

const styles = {
  zoomInDown: {
    animation: "x 1s",
    animationName: Radium.keyframes(zoomInDown, "zoomInDown"),
  },
  zoomIn: {
    animation: "x 2s",
    animationName: Radium.keyframes(zoomIn, "zoomIn"),
  },
  fadeIn: {
    animation: "x 2s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};

const Page1 = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  const onClickHamburger = useCallback(() => {
    console.log("clicked");
    setHamburgerClicked((prev) => !prev);
  }, []);

  return (
    // <P1Container>
    <>
      {/* <Background /> */}

      <div className={css``}>
        <Img src={Image1} alt="Image1" />

        <header
          className={css`
            padding: 86px 0 0 83px;
            display: flex;
            align-items: center;
            height: 87px;
          `}>
          <div
            className={css`
              display: flex;
              align-items: center;
            `}>
            {/* {hamburgerClicked ? <HamburgerClicked> <Hamburger onClick={onClickHamburger} >
                        <HamburgerBar class="bar"></HamburgerBar>
                    </Hamburger></HamburgerClicked> :  */}
            <div
              className={css`
                /* position: relative; */
              `}>
              {hamburgerClicked && (
                <>
                  {/* <StyleRoot> */}
                  <span
                    className={css`
                      position: absolute;
                      font-size: 48px;
                      margin-left: 37.87px;
                      letter-spacing: 4.8px;
                      color: white;
                      text-align: left;
                      z-index: 500 !important;
                      top: 101px;
                      left: 120px;
                    `}>
                    MUS|CON
                  </span>
                  <HamburgerClicked
                    className={css``}
                    // style={styles.fadeIn}
                  ></HamburgerClicked>
                  <ul
                    className={css`
                      position: absolute;
                      color: #d34848;
                      list-style: none;
                      left: 45px;
                      font-size: 25px;
                      top: 155px;
                      font-weight: 600;
                    `}>
                    <li>WHAT IS IT</li>
                    <li>PERKS</li>
                    <li>PRICING</li>
                  </ul>

                  {/* </StyleRoot> */}
                  {/* <StyleRoot>
                    <div
                      className={css`
                        position: absolute;
                        background: blue;
                        top: -30%;
                        border-radius: 50%;
                        width: 60px;
                        height: 60px;
                        transform: scale(3);
                        transition: 3s linear;
                      `}
                      style={styles.zoomIn}></div>
                  </StyleRoot> */}
                </>
              )}
              <Hamburger onClick={onClickHamburger}>
                <HamburgerBar class="bar"></HamburgerBar>
              </Hamburger>
            </div>

            {/* } */}
            <span
              className={css`
                font-size: 48px;
                margin-left: 37.87px;
                letter-spacing: 4.8px;
                color: white;
                text-align: left;
              `}>
              MUS|CON
            </span>
          </div>
          <div></div>
        </header>
        <main
          className={css`
            display: flex;
            flex-direction: column;
          `}>
          <Title>Interactive concert experience</Title>
          <SubTitle>Experience your favorite artists like never before and from the comfort of your own home</SubTitle>
          <div
            className={css`
              position: relative;
            `}>
            <Button
              // className={css`
              //   position: absolute;
              //   height: 100px;
              //   width: 320px;
              //   left: 818px;
              //   bottom: 326px;

              //   &::before {
              //     // content: ${(props) => props.name};
              //     content: "";
              //     position: absolute;
              //     width: 100%;
              //     height: 100%;
              //     top: 28px;
              //     left: 0;
              //     right: 0;
              //     bottom: 0;
              //     // font-size: 25px;
              //     // letter-spacing: 6px;
              //     // font-weight: 700;
              //     // cursor: pointer;
              //   }

              //   &::after {
              //     content: "";
              //     height: 500px;
              //     width: 500px;
              //     position: absolute;
              //     z-index: -1;
              //     left: -90px;
              //     top: -200px;

              //     background: transparent
              //       linear-gradient(90deg, #1fe1e9 0%, #5e33d1 34%, #d34848 65%, #ffb33f 100%) 0% 0%
              //       no-repeat padding-box;
              //     animation: spin 3s linear infinite;
              //   }

              //   &:hover::after {
              //     opacity: 0.8;
              //     outline: #1fe1e9;
              //   }
              //   @keyframes spin {
              //     100% {
              //       transform: rotate(360deg);
              //     }
              //   }
              // `}
              name={"Try It Now"}
              size={"large"}
            />
          </div>
        </main>
      </div>

      {/* </P1Container> */}
    </>
  );
};

export default Page1;
