import React from 'react'
import { Card, Image, Segment, GridColumn, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
const extra = (movie,deleteMovie) => {
  return(
    <div className="ui two buttons">
      <Button animated as={Link} to={'/movie/'+movie._id}  >
        <Button.Content visible>Edit</Button.Content>
        <Button.Content hidden>
          <Icon name='arrow right' />
        </Button.Content>
      </Button>
      <Button animated='vertical' onClick={()=>deleteMovie(movie._id)}>
        <Button.Content hidden>Delete</Button.Content>
        <Button.Content visible>
          <Icon name='trash' />
        </Button.Content>
      </Button>
    </div>
  );
};

const CardExampleCard = ({ movie,deleteMovie }) => (
  <GridColumn>
    <Segment>

      <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
        <Card.Content>
          {movie._id}
          <Card.Header>{movie.title}</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2015</span>
          </Card.Meta>
          {extra(movie,deleteMovie)}
        </Card.Content>

      </Card>
    </Segment>
  </GridColumn>


)

export default CardExampleCard;