import Cookies from "js-cookie";
import { AUTH_LOGIN, AUTH_LOGOUT, UPDATE_ACCESS_TOKEN, UPDATE_USER } from "../actions";

export const defaultAuth = {
    user: null,
    accessToken: Cookies.get("accessToken") || null,
    refreshToken: Cookies.get("refreshToken") || null,
};

const authReducer = (state = defaultAuth, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            const { access_token, refresh_token } = action.payload;
            try {
                Cookies.set("accessToken", access_token, { sameSite: true, secure: true, });
                Cookies.set("refreshToken", refresh_token, { sameSite: true, secure: true });
            } catch (error) {
                console.log(error);
            }
            return {
                ...state,
                user: action.payload.user,
                accessToken: access_token,
                refreshToken: refresh_token,
            };

        case AUTH_LOGOUT:
            Cookies.remove("accessToken");
            Cookies.remove("refreshToken");
            return defaultAuth;

        case UPDATE_ACCESS_TOKEN:
            const newToken = action.payload;
            Cookies.set("accessToken", newToken, { sameSite: true, secure: true });
            return {
                ...state,
                accessToken: newToken,
            }

        case UPDATE_USER:
            return { ...state, user: action.payload };

        default:
            return state;
    }
}

export default authReducer;