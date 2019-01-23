import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewMovieForm from '../NewMovieForm';
import {connect} from 'react-redux';
import {onNewMovieSubmit,fetchMovie,onUpdateMovieSubmit} from '../../actions/newMovie';
 
class NewMoviePage extends Component {
    constructor(props)
    {
        super(props); 
        console.log(props);
    }
    
    componentDidMount()
    {
        const {match}=this.props;
        if(!this.props.movie && match.params._id)
        {
            this.props.fetchMovie(match.params._id);
        }
    }
    render() {
        return (
            <div>
                <h2>New Movie</h2>
                <NewMovieForm movie={this.props.movie} onUpdateMovieSubmit={this.props.onUpdateMovieSubmit} newMovie={this.props.newMovie} onNewMovieSubmit={this.props.onNewMovieSubmit}/>
            </div>
        );
    }
}

const mapStateTheProps=({newMovie,movies},props)=>{
    return{
        newMovie,
        movie:movies.movieList.find(item=>item._id===props.match.params._id)
    }

}
const mapDispatchTheProps={
    onNewMovieSubmit,
    onUpdateMovieSubmit,
    fetchMovie
};


export default connect(mapStateTheProps,mapDispatchTheProps)(NewMoviePage);