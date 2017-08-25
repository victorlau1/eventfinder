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
  
  handleClick(event) {
    // should there even be a handleClick for the map itself?
    // or should there just be a hover event for markers?
    // or should clicking on the marker highlight all concerts at that venue?
  }


  renderMarkers(){
    console.log('MAPS PROPS', this.props)
    return this.props.events.map(event =>{
      return <Markers 
              hovered={this.props.hoverEvent} 
              name={event.headline} 
              lat={event.latitude} 
              lng={event.longitude} />
    });
  }

  render() {
    let context = this;
    return (
      <div style={style}>
        <GoogleMapReact
          defaultCenter={this.props.mapCenter}
          defaultZoom={this.props.zoom}
        >
          {this.renderMarkers()}
        </GoogleMapReact>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    events: state.events,
    mapCenter: state.mapCenter,
    zoom: state.zoom,
    hoverEvent: state.hoverEvent
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ hoverEvent, fetchEvents, getMapCenter, getZoomCenter }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Map);