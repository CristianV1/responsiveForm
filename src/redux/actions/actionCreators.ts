import { types } from "./actionTypes";

export const getCurrentFlight = () => {
  return {
    type: types.GETCURRENTFLIGHT,
  };
};

export const setCurrentFlight = (data: string) => {
  return {
    type: types.SETCURRENTFLIGHT,
    payload: data,
  };
};

export const setOpenLightBox = (bool: boolean) => {
  return {
    type: types.SETOPENLIGHTBOX,
    payload: bool,
  };
};
