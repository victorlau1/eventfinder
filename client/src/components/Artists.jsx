import React, { Component } from 'react';
import {ListGroup} from 'react-bootstrap';
import {Panel} from 'react-bootstrap';

export default class Artist extends Component {
   constructor (props) {
      super(props)
      this.state ={
         artist: 'Muse',
         id: 1,
         url: 'fakeurl'
      }
   }

   render() {
      return (
         <Panel collapsible defaultExpanded header="Artists Found" bsStyle="info">
         <ListGroup fill>
         {props.events.map((event, i) => {
            return <Artist key={i} artist={artist} handleArtistClick={props.handleArtistClick}/>
         })}
         </ListGroup>
         </Panel>
      )
   }
}
