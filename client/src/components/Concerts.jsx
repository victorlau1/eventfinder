import React from 'react';
import axios from 'axios';
import ConcertEntry from './ConcertEntry.jsx';
import {ListGroup} from 'react-bootstrap';
import {Panel} from 'react-bootstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchEvents, hoverEvent, fetchArtist } from '../actions/index.js';

class Concerts extends React.Component {
  
  componentWillMount() {
    this.props.fetchEvents();
  }

  renderEntry() {
    console.log('Concert Props', this.props)
    return (
      this.props.events.map((event) => {
        return <ConcertEntry  
          key={event.id} 
          event={event} 
          handleHover={this.props.hoverEvent} 
          fetchArtist={this.props.fetchArtist}
          />
      })      
    )
  }

  render() {
    return (
      <Panel collapsible defaultExpanded header="Nearby Concerts">
        <ListGroup fill>
          {this.renderEntry()}
        </ListGroup>
      </Panel>
    )
  }
  //
}

function mapStateToProps(state) {
  return {
    events: state.events
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchEvents, hoverEvent, fetchArtist }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Concerts);