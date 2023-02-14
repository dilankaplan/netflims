import React from "react";
import { FeatureMovieLoading } from "@/components/featured-movie";
import CategoriesLoading from "@/components/categories";
import { MoviesSectionLoading } from "@/components/movies-section";

function Loading() {
  return (
    <>
      {" "}
      <FeatureMovieLoading />
      <CategoriesLoading />
      <MoviesSectionLoading />
    </>
  );
}

export default Loading;
