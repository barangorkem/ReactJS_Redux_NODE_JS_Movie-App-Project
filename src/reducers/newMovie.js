
import {NEW_MOVIES_FULFILLED,NEW_MOVIES_REJECTED,NEW_MOVIES_PENDING,
        FETCH_MOVIE_FULFILLED,FETCH_MOVIE_REJECTED,FETCH_MOVIE_PENDING,
        UPDATE_MOVIE_FULFILLED,UPDATE_MOVIE_REJECTED,UPDATE_MOVIE_PENDING


} from '../actions/newMovie';

const initialState={
    movie:{
        fetching:false
    },
    fetching:false,
    done:false,
    error:{

        fetching:false
    }
}


export default(state=initialState,action)=>{
    debugger
    switch(action.type)
    {
        case NEW_MOVIES_PENDING:
        return({
            ...state,
            fetching:true,
                })
        case NEW_MOVIES_FULFILLED:
        return ({
            ...state,
            movie:action.payload,
            fetching:false,
            done:true
        });
        case NEW_MOVIES_REJECTED:
        return ({
            ...state,
            error:action.payload,
            fetching:false
        });
        case FETCH_MOVIE_PENDING:
        return({
            ...state,
            movie:{
                fetching:true
            }
                })
        case FETCH_MOVIE_FULFILLED:
        return ({
            ...state,
            movie:{
                ...action.payload.movie,
                fetching:false
            }
        });
        case FETCH_MOVIE_REJECTED:
        return ({
            ...state,
            movie:{
                fetching:false
            }
            
        });
        case UPDATE_MOVIE_PENDING:
        return({
            ...state,
            fetching:true
                })
        case UPDATE_MOVIE_FULFILLED:
        return ({
            ...state,
            fetching:false,
            done:true
        });
        case UPDATE_MOVIE_REJECTED:
        return ({
            ...state,
            error:action.payload,
            fetching:false            
        });
        default:
        return state;
    }

}