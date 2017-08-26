import React from 'react';
import {ListGroupItem, Button} from 'react-bootstrap';

const ArtistEntry = (props) => {

   return (
      <ListGroupItem
      header={props.artist.displayName}>
      <span> On Tour Till: {props.artist.onTourUntil ? props.artist.onTourUntil : 'No Time Given' } </span>
      <Button className="pull-right" bsStyle="primary" href={props.artist.uri} target="_blank">Tour Info</Button>
      <span></span>
      </ListGroupItem>
   )
}

export default ArtistEntry;