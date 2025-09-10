import { useState, useContext } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import Header from 'components/shared/Header';
import InlineGradient from 'components/shared/InlineGradient';
import More from 'components/mission/More';

import CONSTRAINTS from 'constants/constraints';
import ThemeContext from 'context/ThemeContext';

const Container = styled.div`
  width: 100%;
  max-width: ${CONSTRAINTS.DEFAULT_RAW + 150}px;

  display: flex;
  align-items: center;
  flex-direction: column;
  
  p {
    text-align: justify;
    font-size: 16px;
  }
  margin-bottom: 30px;
  position: relative;
  @media screen and (max-width: 900px) {
    max-width: 700px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
  // align-items: center;
  margin-top: 50px;

  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr;
    margin: 20px;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 45px;
  position: relative;
  // box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);

  ${CONSTRAINTS.DEFAULT_BP} {
    height: 300px;
  }
`

const TeamImage = styled(Image)`
  object-fit: contain;
  transition: opacity 0.5s;
  border-radius: 45px;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;

  ${props => props.$fun && `
    opacity: 0.01; // hack for some obscure react issue
    ${props.$hovered && `
      opacity: 1;
    `}
  `}
`

const Description = styled.div`
  margin-top: 30px;

  ${CONSTRAINTS.DEFAULT_BP} {
    margin-top: 0px;
  }
`

const AccentLogo = styled.img`
  position: absolute;
  height: 250px;
  z-index: -1;
  bottom: 0px;
  right: -50px;
`

const LearnMore = styled.p`
  margin-top: 20px;
  text-decoration: underline;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`

export default function Mission() {
  const [showMore, setShowMore] = useState(false);
  const { dark } = useContext(ThemeContext);

  return (
    <Container>
      <Header title="Our Mission" givenId="mission" />
      <Grid>
        <ImageContainer>
          <TeamImage src="/group/default.jpeg" width={400} height={400} alt="a team picture of the HackUTD organizers"/>
        </ImageContainer>
        <Description>
          <p>
            We inspire students to innovate and learn new technologies through <InlineGradient>hackathons</InlineGradient>, 
            24-hour events with challenges, free food & merch, and fun games & activities.
          </p>
          <p style={{marginTop: 20}}>
            We host HackUTD, North America's largest 24 university hackathon. We also assist with other hackathons at UTD,
            and host helpful workshops that anyone can attend. Regardless of what we’re working on,
            we aim to make our hackathons <InlineGradient>accessible</InlineGradient> and <InlineGradient>open to everyone</InlineGradient>. Glad to see you here!
          </p>
          <LearnMore onClick={() => setShowMore(true)}>More about us</LearnMore>
          <More isShown={showMore} callback={() => setShowMore(false)}/>
        </Description>

      </Grid>
      {!dark && <AccentLogo src={"svg/accent_logo.svg"} />}
      {dark && <AccentLogo src={"svg/accent_logo_dark.svg"} />}
    </Container>
  )
}