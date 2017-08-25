import axios from 'axios';
import moment from 'moment';


//EVENTS
export const GET_EVENTS = 'GET_EVENTS';
export const EVENT_SELECTED ='EVENT_SELECTED';
export const HOVER_EVENT = 'HOVER_EVENT';

//ARTISTS
export const SELECTED_ARTIST = 'SELECTED_ARTISTS';
export const GET_ARTIST_ID = 'GET_ARTIST_ID';

//MAP
export const GET_CENTER = 'GET_CENTER';
export const GET_ZOOM = 'GET_ZOOM';
export const GET_LOCATION = 'GET_LOCATION'

//AUTH
export const GET_TOKEN = 'GET_TOKEN';
export const REFRESH_TOKEN ='REFRESH_TOKEN';

//DATE 
export const SET_DATE = 'SET_DATE';


export function fetchEvents(date = moment().format('YYYY-MM-DD') , lat = 37.783607, lng = -122.408967) {
   
   const options = {
      headers: {
         contentType:  'application/json'
      },
      params: {
         date: date,
         lat: lat,
         lng: lng
      }
   }
   const request = axios.post('/songkick',options)
   
   return {
      type: GET_EVENTS,
      payload: request
   }
}

export function hoverEvent(name) {
   return {
      type: HOVER_EVENT,
      payload: name
   }
}

export function fetchArtists(artist) {

   const options = {
      headers: {
         contentType: 'application/json'
      },
      params: {
         artist: artist
      }
   }

   const request = axios.post('/spotify/search', options)

   return {
      type: SELECTED_ARTIST,
      payload: request
   }
}

export function getToken() {
   const options = {
      url: '/spotify/login'
   }
   const request = axios.get(options)

   return {
      type: GET_TOKEN,
      payload: request
   }
}

export function getNewLocation(search){
   console.log(search)
   const request = axios.post('/google/search',{
      loc: search
   })

   return {
      type: GET_CENTER,
      payload: request
   }
}
export function getMapCenter(mapCenter={lat: 37.783607, lng:-122.408967}) {
   
   return {
      type: GET_CENTER,
      payload: mapCenter
   }
}

export function setZoom(zoom = 13) {
   return {
      type: GET_ZOOM,
      payload: zoom
   }
}

export function setDate(date) {
   return {
      type:SET_DATE,
      payload: date
   }
}