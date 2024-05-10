import LinkTo from "../components/LinkTo";
import Loading from "../components/Loading";
import { useGetMovies } from "../utlis/star-wars.api";

const Home = () => {
  const { isLoading, error, data } = useGetMovies();

  if (isLoading) {
    return <Loading />;
  }

  if (error || !data) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div>
      <h1>Star Wars Movies</h1>
      <ul>
        {data.map((movie, index) => {
          return (
            <li key={index}>
              <LinkTo
                movieUrl={movie.url}
                name={movie.title}
                characters={movie.characters}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
