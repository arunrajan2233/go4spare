import {LOGIN, SIGNOUT, BRANDS,VENDORS} from '../Constants/Constants';

const initialState = {
  email:"",
  name:'',
  isLoggedIn: false,
  brands:[],
  vendors:[],
 };

export const inkartReducer = (state = initialState, action) => {
   switch (action.type) {
    case LOGIN:
      return {
        ...state,
         email:action.payload.email,
         name:action.payload.name,
        isLoggedIn:true,
      };
    case SIGNOUT:
      return {
        ...state,
        userid:'',
        isLoggedIn:false,
      };

      case BRANDS:
          return {
          ...state,
          brands:action.payload.brands,
         };

         case VENDORS:
           return {
          ...state,
          vendors:action.payload.vendors,
         };

    default:
      return state;
  }
};
