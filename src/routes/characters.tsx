import { useAtom } from "jotai";
import CharacterItem from "../components/CharacterItem";
import { charactersAtom } from "../utlis/charactersAtom";
import styled from "styled-components";

const StyledBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 1rem;
  width: 100%;
  justify-content: center;

  @media (min-width: 801px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Paragraph = styled.p`
  width: 100%;
  @media (min-width: 801px) {
    width: 50%;
  }
`;

const Characters = () => {
  const [characters] = useAtom(charactersAtom);
  const uniqueCharacters = [...new Set(characters.flat())];

  return (
    <div>
      <h1>Gotta catch them all</h1>
      <Paragraph>
        By visiting the different movies you will collect characters. There is a
        total of 82 different characters - can you catch them all?{" "}
      </Paragraph>
      <h4>Collected Characters ({uniqueCharacters.length})</h4>
      <StyledBoxWrapper>
        {uniqueCharacters.map((characterUrl, index) => (
          <CharacterItem key={index} characterUrl={characterUrl} />
        ))}
      </StyledBoxWrapper>
    </div>
  );
};

export default Characters;
