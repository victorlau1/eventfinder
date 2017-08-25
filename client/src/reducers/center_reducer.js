import { GET_CENTER } from '../actions';

export default function (state = {}, action) {
   console.log("ACTION IS", action)
   switch (action.type) {
      case GET_CENTER:
      return action.payload.data
   }
   return state;
}