import React, { useCallback, useState, useEffect } from "react";
// import styled from 'styled-components';
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import Slick from "react-slick";
import useEmblaCarousel from "embla-carousel-react";

import Button from "./Button";
import BackgroundImg from "../asset/images/Hero_Image3.png";
import Audio2 from "../asset/images/Audio2.png";
// import url from "../asset/music/music.mp3";

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
  // text-align: center;
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
  /* margin: 0 auto; */
  margin-top: 25px;
  /* text-align: center; */
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 3.2px;
  color: #000;
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

export const SlickWrapper = styled.div`
  height: calc(100% - 44px);
  background: #090909;
`;

export const ImgWrapper = styled.div`
  padding: 32px;
  text-align: center;

  & img {
    margin: 0 auto;
    max-height: 750px;
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

const Page3 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  const onClickHamburger = useCallback(() => {
    console.log("clicked");
    setHamburgerClicked((prev) => !prev);
  }, []);

  const onMouseMove = (e) => {
    //   document.onmouse
    document.onmousemove = (e) => {
      console.log(e);
      const x = e.pageX - e.target.offsetLeft;
      const y = e.pageY - e.target.offsetTop;
      e.target.style.setProperty("--x", `${x}px`);
      e.target.style.setProperty("--y", `${y}px`);
    };
  };

  return (
    <>
      <div
        className={css`
          /* display: block; */
          position: relative;
          background-color: #ffb33f;
          height: 1080px;
          width: 100vw;
          /* height: 1080px;
          width: 1920px; */
        `}>
        <div
          className={css`
            position: absolute;
            top: 30em;
            left: 20em;
            width: 15%;
            height: 25%;
            border-radius: 50%;
            /* background-image: url("../asset/images/Hero_Image3.png"); */
            background: black;
            z-index: 1;
            &::after {
              content: "";
              position: absolute;
              top: -120px;
              left: 150px;
              width: 200px;
              height: 200px;
              border-radius: 50%;
              /* background-image: url("../asset/images/Hero_Image3.png"); */
              background: black;
              z-index: 2;
            }
          `}></div>
        <div
          className={css`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            /* background-image: url("../asset/images/Hero_Image3.png"); */
            background: black;
            z-index: -1;
          `}></div>
        <header
          className={css`
            padding: 86px 0 0 83px;
            display: flex;
            align-items: center;
            width: 80%;
            height: 87px;
            justify-content: space-between;
            z-index: 5;
          `}>
          <div
            className={css`
              display: flex;
              align-items: center;
            `}>
            <div
              className={css`
                /* position: relative; */
              `}>
              {hamburgerClicked && (
                <>
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
                  <HamburgerClicked className={css``}></HamburgerClicked>
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
                </>
              )}
              <Hamburger onClick={onClickHamburger}>
                <HamburgerBar class="bar"></HamburgerBar>
              </Hamburger>
            </div>
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
          <Button
            name={"Try It Now"}
            size={"small"}
            fontColor={"#d34848"}
            bgColor={"white"}
          />
        </header>
        <main
          className={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding-right: 250px;
            padding-left: 200px;
          `}>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              margin-top: -150px;
            `}>
            <Title>SUPERIOR SOUND</Title>
            <SubTitle>
              Experience live versions of your favorite songs.
            </SubTitle>
            <div
              className={css`
                position: relative;
              `}>
              <Button
                onMouseMove={onMouseMove}
                name={"See Demo"}
                bgColor={"white"}
                fontColor={"#d34848"}
                size={"hover"}
              />
            </div>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              position: relative;
            `}>
            <div
              className={css`
                position: abosolute;
                margin-top: -100px !important;
                bottom: -20px;
                right: 180px;
                /* margin-top: -100px;
                 */
                margin-bottom: 100px;
                width: 100px;
                height: 100px;
                border-radius: 50%;
                border: 1px white solid;
                color: white;
                margin: auto auto;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;

                &:hover {
                  background: white;
                  color: black;
                }
              `}>
              <span
                className={css`
                  /* margin: auto auto; */
                  font-size: large;
                  font-weight: bolder;
                  text-transform: uppercase;
                `}>
                Click
              </span>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Page3;
