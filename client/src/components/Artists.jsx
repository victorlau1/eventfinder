import React, { Component } from 'react';
import ArtistEntry from './ArtistEntry.jsx';
import {ListGroup} from 'react-bootstrap';
import {Panel} from 'react-bootstrap';

export default class Artist extends Component {
   constructor (props) {
      super(props)
      this.state ={
         artistList: this.props.artistList
      }
   }

   render() {
      return this.props.artistList[0] ?  
       (
         <Panel collapsible defaultExpanded header="Artists Found" bsStyle="info">
         <ListGroup fill>
         {this.props.artistList.map((artist, i) => {
            return <ArtistEntry key={artist.id} artist={artist}/>
         })}
         </ListGroup>
         </Panel>
      ) :
      (
         <div></div>
      )
   }
}
