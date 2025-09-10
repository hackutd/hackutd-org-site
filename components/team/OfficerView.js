import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
  // flexy
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  font-size: 14px;
  position: relative;
`;
const Name = styled.div`
  font-weight: 700;
  margin-top: 5px;
`;
const Team = styled.div`
  font-weight: 300;
`;

const Holder = styled.div`
  position: relative;
  border-radius: 20px;
`;

const PlaceholderImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

const NormalHolder = styled.div`
  img {
    border-radius: 20px;
  }
`;
export default function OfficerView({ data, index }) {
  return (
    <Wrapper>
      <Holder>
        <NormalHolder>
          <Image
            src={`/headshots/${data.name.split(" ")[0]}.png`}
            width={200}
            height={200}
            alt={`Image of ${data.name}, a HackUTD Officer.`}
            objectFit="cover"
          />
        </NormalHolder>
      </Holder>

      <Name>{data.name}</Name>
      <Team>{data.team}</Team>
    </Wrapper>
  );
}
