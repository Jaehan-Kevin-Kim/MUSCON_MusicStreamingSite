import React, { useCallback, useState, useEffect } from "react";
// import styled from 'styled-components';
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import Slick from "react-slick";
import useEmblaCarousel from "embla-carousel-react";
import SpeakerUp from "../asset/images/SmallSpeaker_Up.png";
import SpeakerDown from "../asset/images/SmallSpeaker_Down.png";
import Button from "./Button";
import BackgroundImg from "../asset/images/Hero_Image3.png";

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

const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  color: #d34848;
`;

const ListHeader = styled.p`
  font-size: 35px;
  &.first {
    color: #d34848;
  }
  &.second {
    color: #1fe1e9;
  }
  &.third {
    color: #ffb33f;
  }
`;

const ListP = styled.p`
  font-size: 20px;
  color: #000;
  letter-spacing: 0.1px;
  &.star {
    font-size: 25px;
    font-weight: 600;
  }
  &.writer {
    color: #fff;
    font-weight: 600;
  }
  height: 10px;
`;

const SpeakerImg = styled.img`
  width: 400px;
  &.speaker_up {
    margin-top: 150px;
    margin-bottom: -50px;
  }
  &.speaker_down {
    margin-left: 80px;
    margin-top: -120px;
  }
`;

const Page5 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  const onClickHamburger = useCallback(() => {
    console.log("clicked");
    setHamburgerClicked((prev) => !prev);
  }, []);

  return (
    <>
      <div
        className={css`
          /* display: block; */
          position: relative;
          background-color: #1fe1e9;

          height: 1080px;
          width: 1920px;
        `}>
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
            fontColor={"#1fe1e9"}
            bgColor={"white"}
          />
        </header>
        <main
          className={css`
            /* display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding-right: 250px;
            padding-left: 200px; */
            display: grid;
            grid-template-columns: 1fr 4fr;
          `}>
          <div>
            <SpeakerImg
              className="speaker_up"
              src={SpeakerUp}
              alt="SpeakerUp"
            />
            <SpeakerImg
              className="speaker_down"
              src={SpeakerDown}
              alt="SpeakerDown"
            />
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: column;
              margin-top: -150px;
            `}>
            <Title>REVIEWS</Title>
            <div
              className={css`
                /* margin: 0 auto; */
                display: grid;
                grid-template-columns: 220px 220px 220px;
                /* align-items: center; */
                grid-gap: 150px;
                /* padding: 0 50px; */
              `}>
              <ListWrap>
                <ListP className="star">★★★★★</ListP>
                <ListP className="writer">ARTIST</ListP>
                <ListP>
                  "Love it, it's the Best. I can't live without it!"
                </ListP>
              </ListWrap>
              <ListWrap>
                <ListP className="star">★★★★★</ListP>
                <ListP className="writer">PRODUCER</ListP>
                <ListP>
                  "Love it, it's the Best. I can't live without it!"
                </ListP>
              </ListWrap>
              <ListWrap>
                <ListP className="star">★★★★★</ListP>
                <ListP className="writer">MUSIC FAN</ListP>
                <ListP>
                  "Love it, it's the Best. I can't live without it!"
                </ListP>
              </ListWrap>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Page5;
