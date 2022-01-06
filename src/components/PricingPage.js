import React from "react";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import Background from "./Background";

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

const PricingTitle = styled.div`
  font-size: 74px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 6.5px;
  color: white;
`;

const PricingSubTitle = styled.p`
  font-size: 51px;
  letter-spacing: 3.2px;
  color: #ffffff;
`;

const PricingListTitle = styled.div`
  /* color: #d24848; */
  font-size: 15px;
  font-weight: 600;
  /* &:nth-child(2) {
    color: #ffb33f;
  }
  &:nth-child(3) {
    color: #1fe1e9;
  } */
  &.listTop {
    font-size: 42px;
  }
  &.listMid {
    font-size: 47px;
    padding-top: 30px;
  }
  &.listBot {
    font-size: 134px;
  }
`;

const PricingUl = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 47px;
  font-weight: 100;
  letter-spacing: 2px;
`;
const PricingList = styled.li`
  color: white;
`;

const PerksTitle = styled.div`
  margin-top: 150px;
  font-size: 65px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 6.5px;
  color: white;
  opacity: 1;
`;
const PerksWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #d34848;
`;

const PerksSubTitle = styled.p`
  font-size: 35px;
  color: #fff;
`;
const PerksP = styled.p`
  font-size: 20px;
  color: #000;
  letter-spacing: 0.1px;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px 20px;
  color: white;
  text-transform: uppercase;
  width: 335px;
  height: 84px;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 2px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  &.firstBtn {
    background: #d24848;
  }
  &.secondBtn {
    background: #ffb33f;
  }
  &.thirdBtn {
    background: #1fe1e9;
  }
`;

const PricingPage = () => {
  return (
    <>
      {/* All page */}
      <div
        className={css`
          background: #191919;
          /* height: 3395px; */
          /* width: 1920px; */
          /* width: "100%"; */
          color: white;
        `}>
        {/* first page */}
        <div
          className={css`
            background: #191919;
            height: 1890px;
            // width: 1920px;
          `}>
          <div
            className={css`
              display: flex;
              align-items: center;
              margin-left: 5%;
              padding-top: 5%;
            `}>
            <Hamburger>
              <HamburgerBar class="bar"></HamburgerBar>
            </Hamburger>
            <div
              className={css`
                margin-left: 1rem;
                font-size: 2.5rem;
              `}>
              <span>EXP | CON</span>
            </div>
          </div>
          <div>
            <main
              className={css`
                margin-top: 5%;
                padding-left: 7%;
                padding-right: 7%;
                display: flex;
                flex-direction: column;
              `}>
              <PricingTitle>PRICING</PricingTitle>
              <PricingSubTitle>
                Test out our app today! Choose from three subcription Based
                payment models.
              </PricingSubTitle>
              <div
                className={css`
                  display: flex;
                  justify-content: space-between;
                  max-width: 1920px;
                `}>
                <div
                  className={css`
                    color: #d24848;
                  `}>
                  <PricingListTitle className="listTop">BASIC</PricingListTitle>
                  <PricingListTitle>_______</PricingListTitle>
                  <PricingListTitle className="listMid">
                    MONTHLY
                  </PricingListTitle>
                  <PricingListTitle className="listBot">$9</PricingListTitle>
                  <PricingUl>
                    <PricingList>☘ Very good</PricingList>
                    <PricingList>☘ Amazing</PricingList>
                    <PricingList>☘ Perfect job</PricingList>
                    <PricingList>☘ Love this</PricingList>
                    <PricingList>☘ It's so good</PricingList>
                    <PricingList>☘ Features</PricingList>
                  </PricingUl>
                  <Button className="firstBtn">SELECT</Button>
                </div>
                <div
                  className={css`
                    color: #ffb33f;
                  `}>
                  <PricingListTitle className="listTop">
                    ADVANCED
                  </PricingListTitle>
                  <PricingListTitle>_______</PricingListTitle>
                  <PricingListTitle className="listMid">
                    YEARLY
                  </PricingListTitle>
                  <PricingListTitle className="listBot">$99</PricingListTitle>
                  <PricingUl>
                    <PricingList>☘ Very very good</PricingList>
                    <PricingList>☘ Even Amazing</PricingList>
                    <PricingList>☘ Perfect job</PricingList>
                    <PricingList>☘ Love this more</PricingList>
                    <PricingList>☘ It's so so good</PricingList>
                    <PricingList>☘ More Features</PricingList>
                  </PricingUl>
                  <Button className="secondBtn">SELECT</Button>
                </div>
                <div
                  className={css`
                    color: #1fe1e9;
                  `}>
                  <PricingListTitle className="listTop">PRO</PricingListTitle>
                  <PricingListTitle>_______</PricingListTitle>
                  <PricingListTitle className="listMid">
                    YEARLY
                  </PricingListTitle>
                  <PricingListTitle className="listBot">$120</PricingListTitle>
                  <PricingUl>
                    <PricingList>☘ Very very good</PricingList>
                    <PricingList>☘ Even Amazing</PricingList>
                    <PricingList>☘ Perfect job</PricingList>
                    <PricingList>☘ Love this more</PricingList>
                    <PricingList>☘ It's so so good</PricingList>
                    <PricingList>☘ More Features</PricingList>
                  </PricingUl>
                  <Button className="thirdBtn">SELECT</Button>
                </div>
              </div>
            </main>
          </div>
        </div>
        {/* second page */}
        <div
          className={css`
            background: #d34848;
            height: 967px;
            // width: 1920px;
          `}>
          <div
            className={css`
              display: flex;
              align-items: center;
              margin-left: 5%;
              padding-top: 5%;
            `}>
            <Hamburger>
              <HamburgerBar class="bar"></HamburgerBar>
            </Hamburger>
            <div
              className={css`
                margin-left: 1rem;
                font-size: 2.5rem;
              `}>
              <span>EXP | CON</span>
            </div>
          </div>
          <div>
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
                `}>
                <PerksTitle>PERKS</PerksTitle>
                <div
                  className={css`
                    display: grid;
                    grid-template-columns: 220px 220px 220px;
                    grid-gap: 150px;
                  `}>
                  <PerksWrap>
                    <PerksSubTitle>_____</PerksSubTitle>
                    <PerksSubTitle>Subscription Payment Model</PerksSubTitle>
                    <PerksP>
                      No commitment, cancel anytime. Never worry about
                      forgetting a payment again!
                    </PerksP>
                  </PerksWrap>
                  <PerksWrap>
                    <PerksSubTitle>_____</PerksSubTitle>
                    <PerksSubTitle>No Fee Cancelation Policy</PerksSubTitle>
                    <PerksP>
                      No commitment, cancel anytime. Never worry about
                      forgetting a payment again!
                    </PerksP>
                  </PerksWrap>
                  <PerksWrap>
                    <PerksSubTitle>_____</PerksSubTitle>
                    <PerksSubTitle>Subscription Payment Model</PerksSubTitle>
                    <PerksP>
                      No commitment, cancel anytime. Never worry about
                      forgetting a payment again!
                    </PerksP>
                  </PerksWrap>
                </div>
              </div>
            </main>
          </div>
        </div>
        {/* last page */}
        <div
          className={css`
            background: #5e33d1;
            display: flex;
            flex-direction: column;
            color: white;
            align-items: center;
            // width: 1920px;
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
      </div>
    </>
  );
};

export default PricingPage;
