import Loading from "./Loading";
import { useGetCharacterById } from "../utlis/star-wars.api";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: #bba78a;
  height: 320px;
  width: 300px;

  @media (min-width: 801px) {
    height: 300px;
    width: 250px;
  }
`;

const StyledContent = styled.div`
  background-color: #59627d;
  padding: 10px;
  border-radius: 10px;
  height: -webkit-fill-available;
  margin: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledCardInfo = styled.div`
  background-color: #bca240;
  border: 3px solid #a03920;
  border-radius: 10px;
  padding: 3px;

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2px;

    p {
      margin: 0;
    }
  }
`;

const StyledImgWrapper = styled.div`
  background-color: #bca240;
  border: 3px solid #a03920;
  border-radius: 10px;
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 1rem;

  img {
    width: 6rem;
  }
`;

const CharacterItem = ({ characterUrl }: { characterUrl: string }) => {
  const characterId = characterUrl.split("/").slice(-2)[0];
  const { isLoading, data, error } = useGetCharacterById(characterId);

  if (isLoading) {
    return <Loading />;
  }

  if (error || !data) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <StyledCard>
      <StyledContent>
        <StyledImgWrapper>
          <img src="/logo.png" alt="star-wars-logo" />
        </StyledImgWrapper>
        <StyledCardInfo>
          <h4>{data.name}</h4>
          <div>
            <p>🍼 {data.birth_year}</p>
            <p>👫 {data.gender}</p>
            <p>🏗️ {data.height}</p>
            <p>👁️ {data.eye_color}</p>
            <p>💇‍♀️ {data.hair_color}</p>
            <p>🤦‍♀️ {data.skin_color}</p>
          </div>
        </StyledCardInfo>
      </StyledContent>
    </StyledCard>
  );
};

export default CharacterItem;
