import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import { Grid } from 'semantic-ui-react';
import {HashLoader} from 'react-spinners';
const MoviesList = ({movies,deleteMovie}) => {

console.log(movies)
const moviesList=(
    <div>
        <HashLoader    color={'#123abc'} loading={movies.fetching}>
         
            </HashLoader>
    {
        movies.error.response?<h3>Error retrieving data!</h3>:
        <Grid stackable columns={2}>
        {
        movies.movieList.map((movie)=>
            <MovieCard key={movie._id} movie={movie} deleteMovie={deleteMovie}/>
        )
    }
        </Grid>
    }
    </div>
)

    return (
        
        <div>
            {moviesList}
           
        </div>
    );
};
MoviesList.propTypes={
    movies:PropTypes.shape(
        {movieList:PropTypes.array.isRequired,
        }).isRequired
}
export default MoviesList;