import styled from 'styled-components';

import CONSTRAINTS from 'constants/constraints';

import Header from 'components/shared/Header';
import SocialButtons from 'components/support/SocialButtons';
import InlineGradient from 'components/shared/InlineGradient';
import GetInTouchButton from 'components/support/GetInTouchButton';
import InterestFormButton from 'components/support/InterestFormButton';
import SmallDivider from 'components/shared/SmallDivider';
import PartnerHackathons from 'components/support/PartnerHackathons';

const Spacer = styled.div`
  margin-top: 38px;
  ${CONSTRAINTS.DEFAULT_BP} {
    margin-top: 0px;
  }
`
const Container = styled.div`
  // flexy
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${CONSTRAINTS.DEFAULT};
  margin-bottom: 50px;

  ${CONSTRAINTS.DEFAULT_BP} {
    width: ${CONSTRAINTS.DEFAULT_MOBILE_WIDTH};
  }
`
const SubHeader = styled.h3`
  color: var(--subheader);
  font-size: 32px;
  margin-bottom: 13px;

  ${props => props.partner && `
    margin-top: 0px;
    ${CONSTRAINTS.DEFAULT_BP} {
      margin-top: 20px;
    }
  `}
`
const Description = styled.p`

`

export default function Support() {
  return (
    <>
    <Spacer />
    <Header title="Support Us" rightJustify={true} givenId="support" />
    <Container>
      <SubHeader>Social Media</SubHeader>
      <SocialButtons />
      <SubHeader>Sponsor</SubHeader>
      <Description>
        Interested in sponsoring HackUTD for our next hackathon and beyond?
        Get in touch with our <InlineGradient>Industry Team</InlineGradient> and learn how supporting HackUTD 
        will benefit you!
      </Description>
      <GetInTouchButton />
      <SubHeader>Hack Interest</SubHeader>
      <Description>
        Want to keep up with HackUTD updates or let us know you&apos;re interested?
        Fill out the interest form and we&apos;ll send relevant updates closer to the event.
      </Description>
      <InterestFormButton />
      <SubHeader>Prospective Dates and Location for HackUTD 2026</SubHeader>
      <Description>
        Dates will most likely be November 14-15, and the location will be the University of Texas at Dallas.
      </Description>
      <SmallDivider />
      <SubHeader partner>Partner Hackathons</SubHeader>
      <PartnerHackathons />
    </Container>
    </>
  )
}