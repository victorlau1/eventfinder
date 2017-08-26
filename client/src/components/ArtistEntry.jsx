import React from 'react';
import {ListGroupItem, Button} from 'react-bootstrap';

const ArtistEntry = (props) => {

   return (
      <ListGroupItem>
      {console.log('This is called')}
      header={this.props.artist.displayName}
      {this.props.artist.identifier.map((event) => {
         return <a href={event.href} />
      })}
      <span> On Tour Till: {this.props.artist.onTourUntil} </span>
      <Button className="pull-right" bsStyle="primary" href={this.props.artist.uri}>Artist Info</Button>
      </ListGroupItem>
   )
}

export default ArtistEntry;