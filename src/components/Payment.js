import React from "react";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { PaymentData } from "../asset/PaymentData";
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
  background: #0b0b0b 0% 0% no-repeat padding-box;
  opacity: 1;

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 7px;
    background: #0b0b0b 0% 0% no-repeat padding-box;
    opacity: 1;
  }

  &::after {
    bottom: 14px;
  }

  &::before {
    top: 14px;
  }
`;

const PaymentTitle = styled.div`
  font-size: 74px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 6.5px;
  color: #0b0b0b;
`;

const PaymentQ = styled.div`
  font-size: 45px;
  font-weight: 500;
  margin-top: 150px;
`;

const QPlanLabel = styled.label`
  font-size: 37px;
  margin-right: 80px;
  &.basic {
    color: #d24848;
  }
  &.advenced {
    color: #ffb33f;
  }
  &.pro {
    color: #1fe1e9;
  }
`;

const QPlanInput = styled.input`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

const QLabel = styled.label`
  margin-top: 15px;
  display: block;
`;

const Button = styled.button`
  position: relative;
  border-radius: 50px;
  padding: 5px 20px;
  color: white;
  text-transform: uppercase;
  width: 210px;
  z-index: 10;
  height: 60px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2px;
  cursor: pointer;
  background: transparent;
  overflow: hidden;
  border: none;

  &::before {
    content: "";
    color: white;
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
    left: -100px;
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

  /* &:hover {
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
  } */
`;

const Payment = () => {
  return (
    <>
      {/* All page */}
      <div
        className={css`
          background: #fff;
          /* height: 3395px; */
          /* width: 1920px; */
          /* width: "100%"; */
          color: #0b0b0b;
        `}>
        {/* first page */}
        <div
          className={css`
            background: #fff;
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
                input {
                  height: 25px;
                }
                select {
                  height: 29px;
                }
              `}>
              <PaymentTitle>Payment</PaymentTitle>
              <form>
                <div>
                  <PaymentQ>1. Select your plan</PaymentQ>
                  <div
                    className={css`
                      margin-top: 30px;
                      font-weight: bold;
                      margin: 0.5rem;

                      input[type="radio"] {
                        position: absolute;
                        opacity: 0;
                        + label {
                          &:before {
                            content: "";
                            background: #fff;
                            border-radius: 100%;
                            box-shadow: inset 0 0 0 4px black;
                            display: inline-block;
                            width: 1em;
                            height: 1em;
                            position: relative;
                            top: -0.2em;
                            margin-right: 1em;
                            vertical-align: top;
                            cursor: pointer;
                            text-align: center;
                            transition: all 250ms ease;
                          }
                        }
                        &:checked {
                          + label {
                            &:before {
                              background-color: blue;
                              /* box-shadow: inset 0 0 0 4px black; */
                              border: none;
                            }
                          }
                        }
                        &:focus {
                          + label {
                            &:before {
                              outline: none;
                              border: none;
                            }
                          }
                        }
                        &:disabled {
                          + label {
                            &:before {
                              box-shadow: inset 0 0 0 4px black;
                              /* border: none; */
                              background: black;
                            }
                          }
                        }
                        + label {
                          &:empty {
                            &:before {
                              margin-right: 0;
                            }
                          }
                        }
                      }
                    `}>
                    <QPlanInput
                      type="radio"
                      id="basic"
                      name="plan"
                      value="BASIC"
                    />
                    <QPlanLabel className="basic" htmlFor="basic">
                      BASIC
                    </QPlanLabel>
                    <QPlanInput
                      type="radio"
                      id="advanced"
                      name="plan"
                      value="ADVANCED"
                    />
                    <QPlanLabel className="advenced" htmlFor="advanced">
                      ADVANCED
                    </QPlanLabel>
                    <QPlanInput type="radio" id="pro" name="plan" value="PRO" />
                    <QPlanLabel className="pro" htmlFor="pro">
                      PRO
                    </QPlanLabel>
                  </div>
                </div>
                <div
                  className={css`
                    display: flex;
                    justify-content: space-between;
                  `}>
                  <div
                    className={css`
                      display: flex;
                      flex-direction: column;
                      margin-right: 10px;
                      /* width: 45%; */
                    `}>
                    <PaymentQ>2. Billing Information</PaymentQ>

                    <QLabel>FULL NAME</QLabel>
                    <input type="text" />

                    <QLabel>BILLING ADDRESS</QLabel>
                    <input type="text" />
                    <div
                      className={css`
                        display: flex;
                        justify-content: space-between;
                      `}>
                      <div>
                        <QLabel for="countries">CITY</QLabel>
                        <input type="text" />
                      </div>
                      <div>
                        <QLabel>POSTAL CODE</QLabel>
                        <input type="text" />
                      </div>
                    </div>
                    <QLabel>COUNTRY</QLabel>
                    <select id="countries">
                      {PaymentData.countries.map((v) => (
                        <option key={v} value={v}>
                          {v}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div
                    className={css`
                      display: flex;
                      flex-direction: column;
                      margin-left: 10px;
                    `}>
                    <PaymentQ>3. Credit Card Information</PaymentQ>
                    <QLabel>CARDHOLDER'S NAME</QLabel>
                    <input type="text" />
                    <QLabel>CARD NUMBER</QLabel>
                    <input type="number" />
                    <div
                      className={css`
                        display: flex;
                        justify-content: space-between;
                      `}>
                      <div
                        className={css`
                          width: 45%;
                        `}>
                        <QLabel for="months">EXPIRY MONTH</QLabel>
                        <select
                          id="months"
                          className={css`
                            width: 90%;
                          `}>
                          {PaymentData.EXPIRY_MONTH.map((v) => (
                            <option key={v} value={v}>
                              {v}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div
                        className={css`
                          width: 45%;
                        `}>
                        <QLabel for="years">EXPIRY YEAR</QLabel>
                        <select
                          id="years"
                          className={css`
                            width: 100%;
                          `}>
                          {PaymentData.EXPIRY_YEAR.map((v) => (
                            <option key={v} value={v}>
                              {v}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <QLabel>CVV</QLabel>
                    <input type="text" />
                  </div>
                </div>
                <div
                  className={css`
                    margin-top: 100px;
                    margin-left: 50px;
                  `}>
                  <p>
                    By continuing, I acknowledge that I've read and agree to the{" "}
                    <font color="blue">Terms of Service & Privacy Policy.</font>
                  </p>
                  <Button>download</Button>
                </div>
              </form>
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

export default Payment;
