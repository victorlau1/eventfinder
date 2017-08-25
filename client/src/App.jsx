import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {PageHeader} from 'react-bootstrap';
import ReactScrollbar from 'react-scrollbar-js';

import axios from 'axios';
import moment from 'moment';
import Filters from './components/Filters.jsx';
import Map from './components/Map.jsx';
import Playlist from './components/Playlist.jsx';
import Concerts from './components/Concerts.jsx';


class App extends React.Component {

 
   componentWillMount() {
     this.authenticateSpotify();
     // this.requestSongkickEvents();
   }
 
   // GET_TOKEN
   authenticateSpotify() {
     if (window.location.hash) {
       let hash = window.location.hash;
       let token = hash.split('&')[0].split('=')[1];
       this.setState({
         token: token
       });
       axios.post('/spotify/login', {
           data: token
       })
       .catch((error) => {
         console.log(error);
       });
     } else {
       axios.get('/spotify/login')
         .then((response) => {
           let loginUrl = response.data;
           window.location = loginUrl;
         })
         .catch((error) => {
           console.log(error);
         });
     }
   }
 
  //  handleArtistClick(clickedArtist) {
  //    this.setState({
  //      artist: clickedArtist
  //    }, () => {
  //      console.log('new state: ', this.state.artist);
  //       this.requestArtistId();
  //    })
  //  }
 
 
 
   //Move to index.js
  //  requestArtistId() {
  //    if (this.state.artist) {
  //      let data = {
  //          artist: this.state.artist,
  //          token: this.state.token
  //        };
  //        axios.post('/spotify/search', data)
  //          .then((res) => {
  //            this.setState({
  //              artistId: res.data.artistId,
  //            });
  //          })
  //          .catch((err) => {
  //            console.log(err);
  //          });
  //    } else {
  //      this.setState({
  //        artist: ''
  //      })
  //    }
  //  }
 
  render() {
    
     const scrollbar = {
       width: 555,
       height: 290,
     };
 
     const header = {
       fontFamily: 'futura',
       fontSize: 70,
       color: '#CD3F2A'
     };
 
     return (
      
       <Grid>
         <Row>
           <Col md={12}>
           <div>
             <PageHeader style={header}>ConcertMate <small>discover upcoming concerts around you</small></PageHeader>
           </div>
           </Col>
         </Row>
         <Row>
           <Col md={12}>
             <Filters/>
           </Col>
         </Row>
         <Row>
           <Col md={6}>
             <Map  />
           </Col>
           <Col md={6}>
             <Playlist />
             <ReactScrollbar style={scrollbar}>
               <Concerts />
             </ReactScrollbar>
           </Col>
         </Row>
       </Grid> 
     )
   }
 }

export default App;