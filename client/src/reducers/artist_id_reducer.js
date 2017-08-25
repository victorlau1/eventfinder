import { GET_ARTIST_ID } from '../actions';

export default function (state = '', action) {
   switch (action.type) {
      case GET_ARTIST_ID:
      return action.payload
   }
   return state;
}