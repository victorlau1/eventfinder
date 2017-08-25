import { SELECTED_ARTIST } from '../actions';

export default function (state = '', action){
   switch (action.type) {
      case SELECTED_ARTIST:
      return action.payload
   }
   return state;
}