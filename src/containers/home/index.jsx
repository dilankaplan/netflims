import React from 'react'
import Movies from "@/mocks/movies.json"
import  FeaturedMovie  from '@/components/featured-movie'
import Categories from "@/components/categories"
import Genres from "@/mocks/genres.json"
import { MoviesSection } from '@/components/movies-section'

 function HomeContainer({popularMovies = [],selectedCategory}) {
  return (
   <div>
    <FeaturedMovie movie={Movies.results[0]} />

    <Categories categories={Genres.genres.slice(0,5)}/> 

    {selectedCategory.movies.length > 0 &&(
      <MoviesSection 
    title={Genres.genres.find((genres)=>
      `${genres.id}`===selectedCategory.id).name}
    movies={selectedCategory.movies} />
    )}
    
   
    <MoviesSection 
    title=" Popular Films" 
    movies={popularMovies.slice(1,7)} />

    <MoviesSection 
    title="Your Favorites" 
    movies={Movies.results.slice(7,13)} />
   </div>
  )
}

export default HomeContainer;