import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image1 from '../asset/images/Hero_Image1.png';
// import Header from "./Header";
// import Hero from "./Hero";
// import Button from "./Button";

const Container = styled.div`
  // width: 100vw;
  // height: 100vh;
  padding:0;
  margin: 0;

  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(25px);
  background-color: rgba(0, 0, 0, 0.4);
  background-size: "fit";
  opacity: 0.9;
  z-index: -1000;
`;

const Background = ({ type, background }) => {
  console.log("type", type, "background", background);
  const [imageType, setImageType] = useState(type);

  //   useEffect(() => {
  //     type === "image";
  //   }, [type, background]);

  return (
    <Container>
   <img src={Image1} alt="image1" />
    </Container>
  );
  //   <> <Container type={type} background={background} style={type==='image' ? `{background: url({background})` : `{background: {background}}`}}>
  //   </Container>
  //   </>
};

export default Background;
