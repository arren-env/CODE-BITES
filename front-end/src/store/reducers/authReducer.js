import { AUTH_LOGIN, AUTH_LOGOUT } from "../actions";

export const defaultAuth = {
    user: null,
}

const authReducer = (state = defaultAuth, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            return { ...state, user: action.payload }

        case AUTH_LOGOUT:
            return { ...state, user: null }

        default:
            return state;
    }
}

export default authReducer;