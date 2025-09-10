import { useEffect, useState } from "react"
import styled from "styled-components"
import { FaChevronRight } from "react-icons/fa"
import { HackBubble } from "components/hackathons/HackathonBubble"

import CONSTRAINTS from "constants/constraints"
import HACKATHON_DATA from "constants/hackathon_data"

const TopWrapper = styled.div`
    margin-top: 40px;
    position: relative;

    width: 100%;
    max-width: ${CONSTRAINTS.DEFAULT};
    height: 380px;

    ${CONSTRAINTS.DEFAULT_BP} {
        height: 300px;
    }
`

const Button = styled.div`
    border: none;
    background-color: rgba(217, 217, 217, 0.75);
    // size management
    width: 50px;
    height: 50px;
    border-radius: 25px;
    color: #8c8c8c;
    font-size: 30px;

    transition: background-color 0.5s;
    &:hover {
        cursor: pointer;
        background-color: rgba(217, 217, 217, 1);
    }
    // flexy
    display: flex;
    align-items: center;
    justify-content: center;

    // positioning
    position: absolute;
    top: 50%;
    z-index: 1;
    ${(props) =>
        props.left
            ? `
    left: -25px;
    transform: translateY(-50%) scaleX(-1);
    ${CONSTRAINTS.DEFAULT_BP} {
      left: 5px;
    }
  `
            : `
    right: -25px;
    transform: translateY(-50%);
    ${CONSTRAINTS.DEFAULT_BP} {
      right: 5px;
    }
  `}
`

const ChooserContainer = styled.div`
    background: var(--hackathon-chooser-bg);
    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;
    padding: 6px 10px;
    border-radius: 20px;

    margin-top: 10px;
`

const ChooserButton = styled.div`
    border: none;
    background: #bebebe;
    // sizing
    height: 20px;
    width: 20px;
    border-radius: 20px;
    backdrop-filter: blur(20px) saturate(160%) contrast(45%) brightness(140%);

    ${(props) =>
        !props.selected &&
        `&:hover {
    background: var(--main-gradient);
    opacity: 0.5;
  }`}
    ${(props) =>
        props.selected &&
        `
      background: var(--main-gradient);
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  `}
  &:hover {
        cursor: pointer;
    }
`

const HackathonDate = styled.div`
    color: var(--hackathon-date);
    font-size: 22px;
    font-weight: 700;
    margin-top: 16px;
`

const HACKATHONS = [
    HACKATHON_DATA.TWENTY_FOUR,
    HACKATHON_DATA.TEN,
    HACKATHON_DATA.AXXESS_23,
    HACKATHON_DATA.NINE,
    HACKATHON_DATA.EIGHT,
    HACKATHON_DATA.SEVEN,
    HACKATHON_DATA.GAME_JAM,
    HACKATHON_DATA.SIX,
    HACKATHON_DATA.NINETEEN,
    HACKATHON_DATA.HACK_FOR_HUMANITY,
    HACKATHON_DATA.EIGHTEEN,
    HACKATHON_DATA.SEVENTEEN,
    HACKATHON_DATA.SIXTEEN,
    HACKATHON_DATA.FIFTEEN,
]

export default function HackathonCarousel() {
    const [index, setIndex] = useState(0)
    const [currentHackathon, setCurrentHackathon] = useState(HACKATHONS[0])

    function onLeftButtonPress() {
        if (index == 0) {
            setIndex(HACKATHONS.length - 1)
        } else {
            setIndex(index - 1)
        }
    }
    function onRightButtonPress() {
        if (index + 1 == HACKATHONS.length) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    useEffect(() => {
        setCurrentHackathon(HACKATHONS[index])
    }, [index])

    return (
        <>
            <TopWrapper>
                <Button onClick={onLeftButtonPress} left>
                    <FaChevronRight />
                </Button>
                {HACKATHONS.map((hackathon, mapIndex) => {
                    return (
                        <HackBubble
                            selected={index == mapIndex}
                            img={HACKATHONS.length - mapIndex}
                            key={mapIndex}
                            data={hackathon}
                        />
                    )
                })}
                <Button onClick={onRightButtonPress}>
                    <FaChevronRight />
                </Button>
            </TopWrapper>
            <HackathonDate>{currentHackathon.date}</HackathonDate>
            <ChooserContainer>
                {HACKATHONS.map((hackathon, mapIndex) => {
                    return (
                        <ChooserButton
                            onClick={() => setIndex(mapIndex)}
                            selected={index == mapIndex}
                            key={mapIndex}
                        />
                    )
                })}
            </ChooserContainer>
        </>
    )
}
