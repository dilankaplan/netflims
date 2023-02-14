import React from "react";
import { notFound } from "next/navigation";
import MovieContainer from "@/containers/movies";
import Movies from "@/mocks/movies.json";
import next from "next";

function MoviePage({ params, searchParams }) {
  const movieDetail = Movies.results.find(
    (movie) => movie.id.toString() === params.id
  );
  if (!movieDetail) {
    notFound();
  }
  if (searchParams.error === "true") {
    throw new Error("Error Happened");
  }
  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
