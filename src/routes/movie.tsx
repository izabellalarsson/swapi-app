import { useParams } from "react-router-dom";
import { type Movie } from "../common/types";
import styled from "styled-components";
import Loading from "../components/Loading";
import { useGetMovieById } from "../utlis/star-wars.api";
import { StrippedList } from "../common/styles";

const StyledHeading = styled.h1`
  font-size: 2rem;
  margin-bottom: 0;

  @media (min-width: 801px) {
    font-size: 3rem;
  }
`;

const StyledList = styled(StrippedList)`
  li {
    display: flex;
    align-items: baseline;
  }
`;

const StyledCharacters = styled.div`
  background-color: #59627d;
  padding: 10px;
  border-radius: 10px;
`;

const Paragraph = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
`;

const StyledCharactersList = styled(StrippedList)`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const StyledCharactersListItems = styled.li`
  padding: 10px;
`;

const Movie = () => {
  const { id } = useParams();
  const { isLoading, data, error } = useGetMovieById(id);

  if (isLoading) {
    return <Loading />;
  }

  if (error || !data) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div>
      <StyledHeading>{data.title}</StyledHeading>
      <p>{new Date(data.release_date).getFullYear()}</p>
      <p>{data.opening_crawl}</p>
      <StyledList>
        <li></li>
        <li></li>
        <li>
          <p>
            Planets:{" "}
            {data.planets.map((planet) => (
              <span key={planet}>🪐</span>
            ))}
          </p>
        </li>
      </StyledList>
      <p>Producer: {data.producer}</p>
      <p>Director: {data.director}</p>
      <StyledCharacters>
        <Paragraph>No. of Characters: {data?.characters.length}</Paragraph>
        <StyledCharactersList>
          {data &&
            data.characters.map((_, index) => (
              <StyledCharactersListItems key={index}>
                <p>{index % 2 ? "👨" : "👩"}</p>
              </StyledCharactersListItems>
            ))}
        </StyledCharactersList>
      </StyledCharacters>
    </div>
  );
};

export default Movie;
