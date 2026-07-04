import styled from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Button = styled.a`
  border: none;
  color: white;
  background: var(--get-in-touch-gradient);

  display: flex;
  flex-direction: row;
  align-items: center;
  filter: drop-shadow(0px 6px 5px rgba(0, 0, 0, 0.25));
  padding: 20px 30px;
  border-radius: 20px;

  transition: filter 0.4s, transform 0.4s;

  svg {
    width: 42px;
    height: 42px;
  }

  &:hover {
    cursor: pointer;
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25));
    transform: translateY(5px);
  }

  align-self: center;
  margin-top: 28px;
  margin-bottom: 8px;
  text-decoration: none;
`

const Text = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-left: 15px;
`

function InterestFormButton() {
  return (
    <Button
      href="https://acmutd.typeform.com/hack-interest"
      target="_blank"
      rel="noreferrer"
    >
      <FaExternalLinkAlt />
      <Text>Interest Form</Text>
    </Button>
  )
}

export default InterestFormButton;