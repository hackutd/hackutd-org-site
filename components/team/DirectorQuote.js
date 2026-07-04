import styled from "styled-components";
import Image from "next/image";

import CONSTRAINTS from "constants/constraints";

import InlineGradient from "components/shared/InlineGradient";

const Wrapper = styled.div`
  width: 100%;
  max-width: ${CONSTRAINTS.DEFAULT};
  /* display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; */

  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 35px;
  margin-bottom: 60px;

  ${CONSTRAINTS.DEFAULT_BP} {
    width: ${CONSTRAINTS.DEFAULT_MOBILE_WIDTH};
    /* flex-direction: column; */
    grid-template-columns: 1fr;
    margin-bottom: 10px;
    align-items: center;
    justify-items: center;
  }
`;

const DirectorImage = styled.div`
  img {
    border-radius: 35px;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
`;

const EncouragingText = styled.div`
  // margin: 30px;
  margin-right: 0px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  ${CONSTRAINTS.DEFAULT_BP} {
    br {
      display: none;
    }
    margin: 20px;
  }
`;

const Message = styled.p`
  font-weight: 200;
`;

const Citation = styled.div`
  ${CONSTRAINTS.DEFAULT_BP} {
    align-self: flex-end;
    margin-top: 8px;
  }
`;

const Name = styled.p`
  font-weight: 200;
  font-style: italic;
  position: relative;
`;

const Hyphen = styled.span`
  position: absolute;
  left: -13px;
`;

const Title = styled.p`
  font-weight: 700;
`;

function DirectorQuote() {
  return (
    <Wrapper>
      <DirectorImage>
        <img
          src="/headshots-2026/DIRECTORS.JPG"
          alt="Directors of HackUTD"
          style={{ 
            width: "300px", 
            height: "auto", 
            borderRadius: "35px",
            maxWidth: "100%"
          }}
        />
      </DirectorImage>
      <EncouragingText>
        <Message>
          We&apos;re the directors of HackUTD this year and are very excited for
          the next iteration of our event. Our team works hard all year round to
          make our events possible, and we can&apos;t wait to put on one more
          successful hackathon!
        </Message>
        <br />
        <Citation>
          <Name>
            <Hyphen>–</Hyphen>Veer Shah &amp; Alan Roybal
          </Name>
          <Title>Co-Directors, HackUTD &apos;26</Title>
        </Citation>
      </EncouragingText>
    </Wrapper>
  );
}

export default DirectorQuote;
