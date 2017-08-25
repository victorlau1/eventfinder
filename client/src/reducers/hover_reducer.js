import { HOVER_EVENT } from '../actions';

export default function (state = '', action) {
   switch(action.type){
      case HOVER_EVENT:
         return action.payload;
      }
   return state;
}


