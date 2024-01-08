import {LOGIN, SIGNOUT, BRANDS, VENDORS} from '../Constants/Constants';

export const login = data => ({
  type: LOGIN,
  payload: {
    email: data.email,
    name: data.name,
  },
});
export const signout = data => ({
  type: SIGNOUT,
  payload: {},
});
export const brands = data => ({
  type: BRANDS,
  payload: {
     brands: data.brands,
  },
});

export const vendors = data => ({
    type: VENDORS,
    payload: {
       vendors: data.vendors,
    },
  });
  
