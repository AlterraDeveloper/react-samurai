import {setAuthUserDataThunkCreator} from "./authReducer";

const INITIALIZED_SUCCESS = "samurai-network/app/INITIALIZED_SUCCESS";

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

export const initialize = () => async (dispatch) => {
    await dispatch(setAuthUserDataThunkCreator());
    dispatch(initializedSuccess());
}

export default appReducer;