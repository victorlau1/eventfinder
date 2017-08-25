import axios from 'axios';
import moment from 'moment';

export const GET_EVENTS = 'GET_EVENTS';
export const EVENT_SELECTED ='EVENT_SELECTED';
export const HOVER_EVENT = 'HOVER_EVENT';

export function fetchEvents(date, lat, lng) {
   
   const options = {
      headers: {
         contentType:  'application/json'
      },
      params: {
         date: moment().format('YYYY-MM-DD'),
         lat: 37.783607,
         lng: -122.408967
      }
   }
   const request = axios.post('/songkick',options)
   
   return {
      type: GET_EVENTS,
      payload: request
   }
}

export function hoverEvent(event) {
   return {
      type: HOVER_EVENT,
      payload: event.name
   }
}

export const SELECTED_ARTIST = 'SELECTED_ARTISTS';

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

export const GET_TOKEN = 'GET_TOKEN';

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

export const GET_CENTER = 'GET_CENTER';
export const GET_ZOOM = 'GET_ZOOM';

export function getMapCenter() {
   return {
      type: GET_CENTER,
      payload: {lat: 37.783607, lng:-122.408967}
   }
}

export function getZoomCenter() {
   return {
      type: GET_ZOOM,
      payload: 13
   }
}
