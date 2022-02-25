import React, { useCallback, useState } from "react";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import useEmblaCarousel from "embla-carousel-react";

import Image1 from "../asset/images/Hero_Image1.png";
import Image2 from "../asset/images/Hero_Image2.png";
import Image3 from "../asset/images/Hero_Image3.png";
import Button from "./Button";

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
  font-size: 65px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 6.5px;
  color: #d34848;
  opacity: 1;
  margin: 0;
`;

const SubTitle = styled.p`
  // width: 820px;
  margin-top: 25px;
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
  }
`;

const Page6 = () => {
  const [emblaRef] = useEmblaCarousel();
  const [bgImages, setBgImages] = useState([Image1, Image2, Image3]);
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
          background: #191919;
          height: 814px;
          width: 100vw;
          /* width: 100vw; */
        `}>
        {/* <Img src={Image1} alt="Image1" /> */}

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
                      top: 101px;import Background from "./Background";

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
          {/* <div></div> */}
        </header>
        <main
          className={css`
            display: flex;
            align-items: center;
            padding-left: 170px;
            padding-right: 170px;
            height: 70%;
            justify-content: space-between;
          `}>
          <div
            className={css`
              display: flex;
              flex-direction: column;
            `}>
            <Title>GET MUS|CON NOW</Title>
            <SubTitle>Purchase and sownload the app.</SubTitle>
          </div>
          <div
            className={css`
              position: relative;
              margin: 0;
              /* z-index: 600; */
            `}>
            <Button
              name={"Try It Now"}
              size={"large"}
              style={{
                zIndex: 500,
                top: -85,
                left: -300,
              }}
            />
          </div>
        </main>
      </div>

      {/* footer */}
      <div
        className={css`
          background: #5e33d1;
          display: flex;
          flex-direction: column;
          color: white;
          align-items: center;
          width: 100vw;
          height: 538px;
        `}>
        <p
          className={css`
            align-self: flex-start;
            margin-top: 180px;
            margin-left: 10%;
            font-size: 2rem;
            font-weight: 500;
            letter-spacing: 3px;
          `}>
          ✉ support@experienceconcerts.co
        </p>
        <h3
          className={css`
            font-size: 2.5rem;
            font-weight: 500;
            margin-top: 80px;
          `}>
          MUS | CON
        </h3>
        <p
          className={css`
            font-size: 1.5rem;
          `}>
          2019 © All Rights Reserved | Speer Technologies Incorporated
        </p>
      </div>
    </>
  );
};

export default Page6;
