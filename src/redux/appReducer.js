import { SocialNetworkAPI } from "../api/api";
import { setAuthUserDataThunkCreator } from "./authReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

const initialState = {
  initialized: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS
});

export const initialize = () => (dispatch) => {
  let promise = dispatch(setAuthUserDataThunkCreator());
  promise.then(() => {
    dispatch(initializedSuccess());
  })
}

export default appReducer;