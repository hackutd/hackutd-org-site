import styled, { keyframes } from 'styled-components';
import { FaChevronCircleRight } from 'react-icons/fa';

import CONSTRAINTS from 'constants/constraints';

const Container = styled.div`
  max-width: ${CONSTRAINTS.DEFAULT};
  // I mean I initially thought this would look good, but I think maybe a different coloured-
  // drop shadow might be a better idea.
  // actually, maybe the multicolored shapes might be the true saviour.
  // 好好学习！
  /* background: linear-gradient(85.59deg, #C1C8FF -27.5%, #EBC1FF 94.94%); */

  border-radius: 43px;
  box-shadow: 0px 9px 19px rgba(0, 0, 0, 0.16);
  margin-top: 50px;
  background-color: var(--raised-button);
  margin-bottom: 100px;
  position: relative;

  ${CONSTRAINTS.DEFAULT_BP} {
    width: ${CONSTRAINTS.DEFAULT_MOBILE_WIDTH};
    text-align: center;
  }
`
// this is redundant without the border, could be merged with container
const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  padding: 30px;
  border-radius: 35px;

  ${CONSTRAINTS.DEFAULT_BP} {
    flex-direction: column;
    margin: 0px;
    padding: 35px 20px;
    align-items: center;
  }
`
const Logo = styled.img`
  width: 200px;
`
const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`
const HackPortalTitle = styled.h3`
  font-size: 65px;
  margin-bottom: 5px;
  margin-top: 5px;

  /* HackPortal Gradient */
  background: var(--hackportal-text-gradient);
  -webkit-background-clip: text; 
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  ${CONSTRAINTS.DEFAULT_BP} {
    font-size: 48px;
    margin-top: 25px;
  }
`
const Description = styled.p`
  color: var(--open-source-subtext);
`
const cute_bounce = keyframes`
  0% {
    transform: translateY(0px);
  } 50% {
    transform: translateY(-5px);
  } 100% {
    transform: translateY(0px);
  }
`
const LearnMore = styled.a`
  color: var(--hackportal-color);
  text-decoration: underline;
  font-size: 22px;
  align-self: flex-end;

  display: flex;
  align-items: center;

  svg {
    margin-left: 8px;
  }

  &:hover {
    svg {
      animation: ${cute_bounce} 0.5s infinite;
    }
  }

  ${CONSTRAINTS.DEFAULT_BP} {
    align-self: center;
    margin-top: 25px;
    color: white;
    background-color: var(--hackportal-color);
    padding: 12px 12px;
    border-radius: 10px;
    font-weight: 700;
  }
`
const StyleRect1 = styled.img`
  position: absolute;
  z-index: -1;
  width: 200px;
  transform: rotate(20deg);
  right: -150px;
  bottom: -20%;

  opacity: 0.3;
`
const StyleTri1 = styled.img`
  position: absolute;
  z-index: -1;
  width: 100px;
  transform: rotate(-20deg);
  right: -150px;
  top: -10%;

  opacity: 0.3;
`

function HackPortalButton() {
  return (
    <Container>
      <SubContainer>
        <Logo src={'svg/hackportal_logo.svg'} alt="HackPortal Logo" />
        <RightContent>
          <HackPortalTitle>HackPortal</HackPortalTitle>
          <Description>
            All-in-one hackathon management software. Modular and secure.
          </Description>
          <LearnMore href="https://github.com/hackutd/hackportal">Learn More <FaChevronCircleRight /></LearnMore>
        </RightContent>
      </SubContainer>

      <StyleRect1 src={'svg/hp_rect.svg'} />
      <StyleTri1 src={'svg/hp_tri.svg'} />
    </Container>
  )
}

export default HackPortalButton;