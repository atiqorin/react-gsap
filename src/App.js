import logo from "./assets/logo.svg";
import styled from "styled-components";
import ParallaxHeroSection from "./components/ParallaxHeroSection";

import ContentSection from "./components/ContentSection";
import CrossRevealSection from "./components/CrossRevealSection";
import ProductSection from "./components/ProductSection";
import VideoSequenceSection from "./components/VideoSequenceSection";
import Cursor from "./components/Cursor";

import FaceOne from "../src/assets/images/faceOne.jpeg"
import LandscapeOne from "../src/assets/images/landscapeOne.png"
import LandscapeTwo from "../src/assets/images/landscapeTwo.png"

const StyledHeroSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  img {
    height: 25vmin;
    pointer-events: none;
  }
`;

const StyledTitle = styled.h1`
  color: black;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 4px;
  text-align: center;
  text-transform: uppercase;
  padding-top: 4rem;
`;

function App() {
  return (
    <>
      <Cursor />
      <StyledHeroSection>
        <img src={logo} alt="logo" />
        <StyledTitle>Back to smooth and firm skin</StyledTitle>
        <ParallaxHeroSection />
      </StyledHeroSection>
      <ProductSection />>
      <ContentSection
        title={"Take Care"}
        text={
          "You can get your skin and body in tip-top shape without taking your toll on the environment."
        }
      />
      <CrossRevealSection
        face={FaceOne}
        landscape={LandscapeOne}
        name={"Atiq Khan"}
        job={"Developer"}
        sentenceOne={"We only launch"}
        sentenceTwo={"What we love"}
        crossReveal={"xPercent"}
      />
      <ContentSection
        title={"Take Care"}
        text={
          "You can get your skin and body in tip-top shape without taking your toll on the environment."
        }
      />
      <CrossRevealSection
        face={FaceOne}
        landscape={LandscapeTwo}
        name={"Atiq Khan"}
        job={"Developer"}
        sentenceOne={"We only launch"}
        sentenceTwo={"What we love"}
        crossReveal={"yPercent"}
      />
      <VideoSequenceSection />
    </>
  );
}

export default App;
