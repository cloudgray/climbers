import React from "react";
import styled from "styled-components";
import { Parallax, Background } from "react-parallax";
import Helmet from "react-helmet";
import Loader from "Components/Loader";

const Container = styled.div`
  padding: 0;
  width: 100%;
  height: auto;
  z-index: 1;
`;

const TextBox = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: white;
  z-index: 3;
  text-align: center;
`;

const Cover = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
`;

const Image = styled.image``;

const HomePresenter = ({ loading, error }) => (
  <>
    <Helmet>
      <title>Climbers</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <Helmet>
          <title>Climbers</title>
        </Helmet>
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={require("assets/bg-images/climbing1.jpg")}
          bgImageAlt="CLIMBERS"
          strength={100}
        >
          <Cover></Cover>
          <div style={{ height: "1000px", backgroundSize: "cover" }} />
          <TextBox>CLIMBERS</TextBox>
          <Image src="./logo.png"></Image>
        </Parallax>
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={require("assets/bg-images/climbing1.jpg")}
          bgImageAlt="CLIMBERS"
          strength={100}
        >
          Blur transition from min to max
          <div style={{ height: "1000px" }} />
        </Parallax>
      </Container>
    )}
  </>
);

export default HomePresenter;
