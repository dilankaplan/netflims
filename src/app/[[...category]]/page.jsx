import React from "react";
import HomeContainer from "@/containers/home";

import Movies from "@/mocks/movies.json"

const API_URL ='https://api.themoviedb.org/3'

const getPopularMovies = async() => {
  const res = await fetch(`${API_URL}/movie/top_rated?api_key=${process.env.API_KEY}&PAGE=1`);
  const data = await res.json();
  console.log(data);
}
 async function HomePage({params}) {
  let selectedCategory;

  const popularMovies = await getPopularMovies(); 

  if(params.category?.length > 0){
   selectedCategory =true;
  }
  return <HomeContainer 
  popularMovies={popularMovies}
     selectedCategory={
    {id: params.category?.[0] ?? '',
     movies: selectedCategory ? Movies.results.slice(0,7):[],
  }
  } />;
}
export default HomePage;
