import { useContext, useState } from "react";
import Image from "next/image";
import styled from "styled-components";

import SPONSORS from "constants/sponsors";
import CONSTRAINTS from "constants/constraints";
import ThemeContext from "context/ThemeContext";


import LogoContext from "context/LogoContext";
import { useDelayUnmount } from "hooks/useDelayUnmount";

const mountedStyle = { animation: "inAnimation 250ms ease-in" };
const unmountedStyle = {
  animation: "outAnimation 270ms ease-out",
  animationFillMode: "forwards",
};

const Holder = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;

  transition: transform 0.5s, opacity 0.3s;
  transform-origin: bottom;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
function SponsorImg({ sponsor }) {
  const { currentHoveredLogo, setCurrentHoveredLogo } = useContext(LogoContext);
  return (
    <Holder
      onMouseOver={() => {
        setCurrentHoveredLogo(sponsor.name);
      }}
      onMouseOut={() => {
        setCurrentHoveredLogo("");
      }}
      style={{
        opacity:
          currentHoveredLogo !== "" && currentHoveredLogo !== sponsor.name
            ? 0.3
            : 1,
      }}
      onAnimationEnd={() => {
        console.log("done");
      }}
    >
      <a href={sponsor.link} target="_blank" rel="noreferrer">
        <Image src={sponsor.img} layout="fill" objectFit="contain" />
      </a>
    </Holder>
  );
}

function SponsorDoubleImg({ sponsors }) {
  const [currentSponsorIndex, setCurrentSponsorIndex] = useState(0);
  const { currentHoveredLogo, setCurrentHoveredLogo } = useContext(LogoContext);
  const shouldRenderChild = useDelayUnmount(currentSponsorIndex === 1, 100);
  return (
    <Holder
      onMouseOver={() => {
        setCurrentHoveredLogo(sponsors[1].name);
        setCurrentSponsorIndex((prev) => prev ^ 1);
      }}
      onMouseOut={() => {
        setCurrentHoveredLogo("");
        setCurrentSponsorIndex((prev) => prev ^ 1);
      }}
      style={{
        opacity:
          currentHoveredLogo !== "" && currentHoveredLogo !== sponsors[1].name
            ? 0.5
            : 1,
      }}
    >
      <a
        href={sponsors[currentSponsorIndex].link}
        target="_blank"
        rel="noreferrer"
      >
        {shouldRenderChild ? (
          <Image
            src={sponsors[1].img}
            layout="fill"
            objectFit="contain"
            style={currentSponsorIndex === 1 ? mountedStyle : unmountedStyle}
          />
        ) : (
          <Image src={sponsors[0].img} layout="fill" objectFit="contain" />
        )}
      </a>
    </Holder>
  );
}
const Container = styled.div`
  width: 100%;
  max-width: ${CONSTRAINTS.DEFAULT};
  position: relative;
  padding: 20px;
  box-sizing: border-box;

  ${(props) =>
    props.dark
      ? `
    background-color: rgb(150, 150, 150);
    margin-top: 20px;
    ${CONSTRAINTS.DEFAULT_BP_INVERSE} {
      border-radius: 43px;
    }
  `
      : `
    background-color: rgb(210, 210, 210);
    margin-top: 20px;
    ${CONSTRAINTS.DEFAULT_BP_INVERSE} {
      border-radius: 43px;
    }
  `}

  ${CONSTRAINTS.DEFAULT_BP} {
    padding: 15px;
  }
  ${CONSTRAINTS.DEFAULT_BP} {
    &:before {
      content: "";
      ${CONSTRAINTS.ABSOLUTE_POS_CENTER_HORIZONTAL};
      width: 100vw;
      height: 100%;
      top: 0;
      background: linear-gradient(
        0deg,
        rgba(200, 200, 200, 1) 0%,
        rgba(205, 205, 205, 0.6012780112044818) 8%,
        rgba(0, 0, 0, 0) 100%,
        rgba(0, 0, 0, 0) 100%
      );
    }
  }
`;

const GridRow = styled.div`
  display: grid;
  height: 100px;
  grid-gap: 30px;
  margin: 20px;

  ${CONSTRAINTS.DEFAULT_BP} {
    grid-gap: 15px;
    margin: 0px;
  }
`;

const TitleSponsor = styled(GridRow)``;

const One = styled(GridRow)`
  box-sizing: border-box;
  padding: 0px 15%;

  ${(props) =>
    props.jpmorgan &&
    `
    margin-top: -25px;
  `}
`;

const Two = styled(GridRow)`
  grid-template-columns: 1fr 1fr;
`;

const Three = styled(GridRow)`
  grid-template-columns: 1fr 1fr 1fr;
`;

const Four = styled(GridRow)`
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const ShadowHolder = styled.div`
  position: absolute;
  top: -100px;
  opacity: 0.7;
  ${(props) =>
    props.right
      ? `
    right: -40px;
    // background-color: green;
  `
      : `
    left: -40px;
    transform: scaleX(-1);
    // background-color: blue;
  `}
  height: 130%;
  width: 140px;
`;

export default function SponsorGrid() {
  const { dark } = useContext(ThemeContext);

  return (
    <Container dark={dark}>
      <Three>
        <SponsorImg sponsor={SPONSORS.PNC} />
        <SponsorImg sponsor={SPONSORS.BENQ} />
        <SponsorDoubleImg sponsors={[SPONSORS.SNAP_AR, SPONSORS.SNAP_GHOST]} />
      </Three>
      <Four>
        <SponsorImg sponsor={SPONSORS.GOLDMAN_SACHS} />
        <SponsorImg sponsor={SPONSORS.TOYOTA} />
        <SponsorImg sponsor={SPONSORS.FIDELITY} />
        <SponsorImg sponsor={SPONSORS.PINATA} />
      </Four>
      <Four>
        <SponsorImg sponsor={SPONSORS.STATEFARM} />
        <SponsorImg sponsor={SPONSORS.EOG} />
        <SponsorImg sponsor={SPONSORS.CBRE} />
        <SponsorImg sponsor={SPONSORS.FRONTIER} />
      </Four>
      <Four>
        <SponsorImg sponsor={SPONSORS.FANNIE_MAE} />
        <SponsorImg sponsor={SPONSORS.JPMORGAN_CHASE} />
        <SponsorImg sponsor={SPONSORS.GEICO} />
        <SponsorImg sponsor={SPONSORS.INFOSYS} />
      </Four>
      <Three>
        <SponsorImg sponsor={SPONSORS.PRHI} />
        <SponsorImg sponsor={SPONSORS.AXXESS} />
        <SponsorImg sponsor={SPONSORS.CORE_LOGIC} />
      </Three>
      <Two>
        <SponsorImg sponsor={SPONSORS.NORDVPN} />
        <SponsorImg sponsor={SPONSORS.INCOGNI} />
      </Two>
      <Two>
        <SponsorImg sponsor={SPONSORS.RING_CENTRAL} />
        <SponsorImg sponsor={SPONSORS.L3_HARRIS} />
      </Two>
      <Two>
        <SponsorImg sponsor={SPONSORS.TI} />
        <SponsorImg sponsor={SPONSORS.VEOLIA} />
      </Two>
      <Two>
        <SponsorImg sponsor={SPONSORS.STUDENT_GOV} />
        <SponsorImg sponsor={SPONSORS.CAPITAL_ONE} />
      </Two>
      <Three>
        <SponsorImg sponsor={SPONSORS.STANDOUT_STICKERS} />
        <SponsorImg sponsor={SPONSORS.MME} />
        <SponsorImg sponsor={SPONSORS.STICKER_MULE} />
      </Three>

      <ShadowHolder>
        <Image src="/half_shadow.png" layout="fill" objectFit="contain" />
      </ShadowHolder>
      <ShadowHolder right>
        <Image src="/half_shadow.png" layout="fill" objectFit="contain" />
      </ShadowHolder>
    </Container>
  );
}
