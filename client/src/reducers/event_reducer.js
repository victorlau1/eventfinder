import { GET_EVENTS } from '../actions';

export default function (state = [], action) {
   switch(action.type) {
      case GET_EVENTS:
         return  action.payload.data;
      }
   return state;
}
