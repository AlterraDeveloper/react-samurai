import { setAuthUserDataThunkCreator } from "./authReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

const initialState = {
  initialized: false,
  fake: 0
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
      case "FAKE":
        return {
          ...state,
          fake: state.fake++
        }

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