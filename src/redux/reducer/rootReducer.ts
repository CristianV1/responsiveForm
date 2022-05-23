import { types } from "../actions/actionTypes";

const initialState = {
  flight: "",
  openLightBox: false,
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GETCURRENTFLIGHT:
      return {
        ...state,
      };

    case types.SETCURRENTFLIGHT:
      return {
        ...state,
        flight: action.payload,
      };

    case types.SETOPENLIGHTBOX:
      return {
        ...state,
        openLightBox: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
