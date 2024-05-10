import { useQuery } from "@tanstack/react-query";
import { Character, Movie } from "../common/types";

const fetchMovies = async (): Promise<Movie[]> => {
  const response = await fetch("https://swapi.dev/api/films/");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();

  return data.results;
};

const fetchMovieById = async (id?: string): Promise<Movie> => {
  const response = await fetch(`https://swapi.dev/api/films/${id}/`, {
    method: "GET",
  });

  const data = await response.json();

  return data;
};

const fetchCharacterById = async (id?: string): Promise<Character> => {
  const response = await fetch(`https://swapi.dev/api/people/${id}/`, {
    method: "GET",
  });

  const data = await response.json();

  return data;
};

export const useGetMovies = () => {
  return useQuery({ queryKey: ["movies"], queryFn: fetchMovies });
};

export const useGetMovieById = (id?: string) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: ({ queryKey }) => fetchMovieById(queryKey[1]),
  });
};

export const useGetCharacterById = (id?: string) => {
  return useQuery({
    queryKey: ["character", id],
    queryFn: ({ queryKey }) => fetchCharacterById(queryKey[1]),
  });
};
