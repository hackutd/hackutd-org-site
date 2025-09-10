import styled from "styled-components"
import Image from "next/image"
import CONSTRAINTS from "constants/constraints"
import Link from "next/link"

const Container = styled.div`
    // flexy
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    background: ${(props) => props.gradientColor};
    max-width: ${CONSTRAINTS.DEFAULT};
    width: 100%;
    border-radius: 60px;
    box-sizing: border-box;
    padding: 20px;
    position: relative;
    z-index: 0;
    overflow: hidden;
    cursor: pointer;

    // transition: opacity 0.8s;
    // opacity: 0;
    // display: none;
    position: absolute;
    visibility: hidden;
    transition: opacity 0.6s linear, visibility 0.6s linear;
    opacity: 0;
    ${(props) =>
        props.selected &&
        `
    // opacity: 1;
    // display: flex;
    visibility: visible;
    opacity: 1;
  `}

    ${CONSTRAINTS.DEFAULT_BP} {
        border-radius: 0px;
    }
`

export function HackBubble({ img, selected, data }) {
    return (
        <Container selected={selected}>
            <Link href={data.websiteLink}>
                <Image
                    src={`/hack_bubbles/Slide${img}.png`}
                    width={1035}
                    height={561}
                    alt={`HackUTD ${data.title}`}
                />
            </Link>
        </Container>
    )
}
