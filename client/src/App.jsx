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
  //  constructor(props) {
  //    super(props);
  //    this.state = {
  //      events: [],
  //      startDate: moment(),
  //      artist: '',
  //      hoveredEvent: '',
  //      artistId: undefined,
  //      token: undefined,
  //      mapCenter: {lat: 37.783607, lng:-122.408967}
  //    };
 
     // this.handleDateChange = this.handleDateChange.bind(this);
  //    this.handleArtistClick = this.handleArtistClick.bind(this);
  //    this.handleHover = this.handleHover.bind(this);
  //  }
 
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
 
   // handleDateChange(date) {
   //   this.setState({
   //     startDate: date
   //   });
   //   this.requestSongkickEvents(date);
   // }
 
  //  handleArtistClick(clickedArtist) {
  //    this.setState({
  //      artist: clickedArtist
  //    }, () => {
  //      console.log('new state: ', this.state.artist);
  //       this.requestArtistId();
  //    })
  //  }
 
  //  handleHover(hoveredEvent) {
  //    if (hoveredEvent) {
  //      this.setState({
  //        hoveredEvent: hoveredEvent
  //      });
  //    } else {
  //      this.setState({
  //        hoveredEvent: ''
  //      })
  //    }
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
 
   //GET_EVENTS
   // requestSongkickEvents(date) {
   //   let formattedDate = this.state.startDate.format('YYYY-MM-DD');
   //   let latitude = this.state.mapCenter.lat;
   //   let longitude = this.state.mapCenter.lng;
   //   if (date) {
   //     formattedDate = date.format('YYYY-MM-DD')
   //   }
   //   axios.post('/songkick/', {
   //     date: formattedDate,
   //     lat: latitude,
   //     lng: longitude
   //   })
   //     .then((data) => {
   //       console.log('data received', data.data)
   //       this.setState({
   //         events: data.data,
   //         artist: data.data[0].headline
   //       });
   //       this.requestArtistId();
   //       console.log('state:', this.state.events);
   //     })
   //     .catch((err) => {
   //       console.log('Error: ', err);
   //     });
   // }
 
  render() {
    console.log()
    
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