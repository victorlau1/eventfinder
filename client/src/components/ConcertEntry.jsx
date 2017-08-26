import React from 'react';
import {ListGroupItem, Button} from 'react-bootstrap';

class ConcertEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //artist: ''
    }
  }

  handleClick(clickedArtist) {
    this.props.handleArtistClick(clickedArtist);
  }

  mouseIn(venueName) {
    this.props.handleHover(venueName);
  }

  mouseOut() {
    this.props.handleHover();
  }

  render() {

    return (
      <ListGroupItem
        header={this.props.event.headline}
        onClick={() => this.handleClick(this.props.event.headline)}
        onMouseEnter={() =>  this.mouseIn(this.props.event.venue)}
        onMouseLeave={() => this.mouseOut()}>
        <span> {this.props.event.venue} on {this.props.event.date.slice(0, 10)} {this.props.event.time}</span>
        <Button className="pull-right" bsStyle="primary" href={this.props.event.uri}>Buy Tickets</Button>
      </ListGroupItem>
    )
  }

};

export default ConcertEntry;

