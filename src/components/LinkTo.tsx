import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import { charactersAtom } from "../utlis/charactersAtom";

interface LinkToProps {
  movieUrl: string;
  name: string;
  characters: string[];
}

const LinkTo = ({ movieUrl, name, characters }: LinkToProps) => {
  const [character, setCharacter] = useAtom(charactersAtom);

  const handleOnClick = () => {
    setCharacter([...character, characters]);
  };

  const movieId = movieUrl.split("/").slice(-2)[0];
  return (
    <Link to={`/movie/${movieId}`} onClick={handleOnClick}>
      {name}
    </Link>
  );
};

export default LinkTo;
