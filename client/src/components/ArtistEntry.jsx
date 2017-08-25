import React from 'react';
import {ListGroupItem, Button} from 'react-bootstrap';

export default const ArtistEntry = (props) => {
   return (
      <ListGroupItem
      header={this.props.artist.displayName}
      onClick={() => this.handleClick(this.props.event.headline)}
      <span> {this.props.artist.} </span>
      <Button className="pull-right" bsStyle="Primary "href={this.props.artist.uri}>Buy Tickets</Button>
      </ListGroupItem>
   )
}

