
import axios from 'axios';
import {API_BASE} from '../config/env';
export const FETCH_MOVIES_FULFILLED="FETCH_MOVIES_FULFILLED";
export const FETCH_MOVIES_PENDING="FETCH_MOVIES_PENDING";
export const FETCH_MOVIES_REJECTED="FETCH_MOVIES_REJECTED";

export const DELETE_MOVIE_FULFILLED="DELETE_MOVIE_FULFILLED";
export const DELETE_MOVIE_PENDING="DELETE_MOVIE_PENDING";
export const DELETE_MOVIE_REJECTED="DELETE_MOVIE_REJECTED";
export function fetchMovies()
{
    return dispatch=> {
       dispatch({
           type:"FETCH_MOVIES",
           payload:axios.get(API_BASE+"/movies").then(response => response.data.movies)
       })
    }
}
export function deleteMovie(_id)
{
    return dispatch=> {
       dispatch({
           type:"DELETE_MOVIE",
           payload:axios.delete(API_BASE+"/movies/"+_id).then(response=>Object.assign({},response,{_id}))
       })
    }
}
/*  
return dispatch=> {
        console.log(API_BASE);
        axios.get(API_BASE+"/movies")
        .then(response => response.data)
        .then(json => dispatch({
            type:FETCH_MOVIES,
            payload:json.movies
        }))
        .catch(error=>dispatch({
            type:FETCH_MOVIES_ERROR,
            payload:error
        }))
    }
    */