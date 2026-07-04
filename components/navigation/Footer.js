import styled from 'styled-components';
import { FaInstagram, FaTwitterSquare, FaLinkedin, FaGithubSquare, FaTiktok } from 'react-icons/fa';

import CONSTRAINTS from 'constants/constraints';
import LINKS from 'constants/links';

const Container = styled.footer`
  width: 100%;
  background: var(--footer-gradient);
  box-shadow: inset 0px 5px 20px rgba(0, 0, 0, 0.25);
  
  display: flex;
  align-items: center;
  justify-content: center;
`

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  color: white;
  font-size: 18px;
  font-weight: 200;
  width: 100%;
  max-width: ${CONSTRAINTS.FOOTER_CONTENT};

  ${CONSTRAINTS.DEFAULT_BP} {
    padding: 10px 5px;
    padding-top: 20px;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &:nth-child(2) {
    margin-top: 15px;
  }

  ${CONSTRAINTS.DEFAULT_BP} {
    flex-direction: column;
    margin-top: 0px;
  }
`

const Credits = styled.p`
  font-size: 22px;
  font-weight: 600;
  a {
    color: inherit;
  }
  ${CONSTRAINTS.DEFAULT_BP} {
    margin-bottom: 10px;
  }
`

const Socials = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 13px;
  align-items: center;
  a {
    color: inherit;
    
    svg {
      width: 40px;
      height: 40px;
    }
  }
`

const CuteMessage = styled.div`
  img {
    height: 24px;
    transform: translateY(3px) translateX(-2px);
  }
`

const GetInTouch = styled.div`
  a {
    color: inherit;
  }
  ${CONSTRAINTS.DEFAULT_BP} {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`


export default function Footer() {
  return (
    <Container>
      <SubContainer>
        <Row>
          <Credits>© {new Date().getFullYear()} HackUTD by <a target="_blank" rel="noreferrer" href={"https://acmutd.co/"}>ACM UTD</a></Credits>
          <Socials>
            <a href={LINKS.INSTA}><FaInstagram /></a>
            <a href={LINKS.TWITTER}><FaTwitterSquare /></a>
            <a href={LINKS.LINKEDIN}><FaLinkedin /></a>
            <a href={LINKS.GITHUB_WEBSITE}><FaGithubSquare /></a>
            <a href={LINKS.抖音}><FaTiktok style={{ height: '34px' }} /></a>
          </Socials>
        </Row>
        <Row>
          <CuteMessage>There&apos;s no HackUTD...without <img src={'svg/u_love.svg'} alt="Letter 'U' surrounded by a heart" />™</CuteMessage>
          <GetInTouch>
            Get in Touch: <a href={LINKS.INDUSTRY_MAIL_LINK}>hello@hackutd.co</a>
            <br />
            <a
              href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
              target="_blank"
              rel="noreferrer"
            >
              MLH Code of Conduct
            </a>
          </GetInTouch>
        </Row>
      </SubContainer>
    </Container>
  )
}