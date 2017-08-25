import React from 'react';

import GoogleMapReact from 'google-map-react';
import GoogleMapMarkers from 'google-map-react';
import Markers from './Markers.jsx';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hoverEvent, fetchEvents , getMapCenter, getZoomCenter } from '../actions/index.js';


const style = {
  position: 'fixed',
  overflow: 'visible',
  top: 190,
  left: 65,
  width: '45%',
  height: '70%',
  margin: 0,
  padding: 0
}

class Map extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // we hard-coded this map center but ideally you'll be able to set location based on google search
  //     center: this.props.mapCenter,
  //     zoom: 13,
  //     events: []
  //   }
  // }
  
  handleClick(event) {
    // should there even be a handleClick for the map itself?
    // or should there just be a hover event for markers?
    // or should clicking on the marker highlight all concerts at that venue?
  }

  // componentWillReceiveProps(nextProps) {
  //   let events = nextProps.events;
  //   let venues = events.map((event) => {
  //     return {
  //       lat: event.latitude,
  //       lng: event.longitude,
  //       name: event.venue
  //     }
  //   });
  //   this.setState({
  //     markerLocs: venues
  //   });
  // }

  renderMarkers(){
    console.log('MAPS PROPS', this.props)
    return this.props.events.map(event =>{
      return <Markers onHover={() => this.props.hoverEvent(event)} name={event.venue} lat={event.latitude} lng={event.longitude} />
    });
  }

  render() {
    let context = this;
    return (
      <div style={style}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.renderMarkers()}
        </GoogleMapReact>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    events: state.events,
    center: state.mapCenter,
    zoom: state.zoom
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ hoverEvent, fetchEvents, getMapCenter, getZoomCenter }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Map);