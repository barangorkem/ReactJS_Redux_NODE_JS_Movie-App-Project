
import axios from 'axios';
import {API_BASE} from '../config/env';
export const NEW_MOVIES_FULFILLED="NEW_MOVIES_FULFILLED";
export const NEW_MOVIES_PENDING="NEW_MOVIES_PENDING";
export const NEW_MOVIES_REJECTED="NEW_MOVIES_REJECTED";

export const FETCH_MOVIE_FULFILLED="FETCH_MOVIE_FULFILLED";
export const FETCH_MOVIE_PENDING="FETCH_MOVIE_PENDING";
export const FETCH_MOVIE_REJECTED="FETCH_MOVIE_REJECTED";

export const UPDATE_MOVIE_FULFILLED="UPDATE_MOVIE_FULFILLED";
export const UPDATE_MOVIE_PENDING="UPDATE_MOVIE_PENDING";
export const UPDATE_MOVIE_REJECTED="UPDATE_MOVIE_REJECTED";
export function onNewMovieSubmit({title,cover})
{
    console.log(title,cover);
    return dispatch=> {
       dispatch({
           type:"NEW_MOVIES",
           payload:axios.post(API_BASE+"/movies",{title,cover}).then(response => console.log(response))
       })
    }
}
export function fetchMovie(_id)
{
    debugger
    console.log("fetchmovie");
    debugger
    return dispatch=> {
       dispatch({
           type:"FETCH_MOVIE",
           payload:axios.get(API_BASE+"/movies/"+_id).then(response=>response.data)
       })
    }
}

export function onUpdateMovieSubmit({title,cover,_id})
{
    console.log("updatemovie");
    debugger
    return dispatch=> {
       dispatch({
           type:"UPDATE_MOVIE",
           payload:axios.put(API_BASE+"/movies/"+_id,{
               title,
               cover
           }).then(response => console.log(response))
       })
    }
} 