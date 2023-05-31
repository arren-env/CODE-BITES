
export const AUTH = "[AUTH]";

export const AUTH_LOGIN = `${AUTH} Login`;
export const AUTH_LOGOUT = `${AUTH} Logout`;
export const UPDATE_ACCESS_TOKEN = `${AUTH} Update Access Token`;
export const UPDATE_USER = `${AUTH} Update User`;
export const FETCH_USER = `${AUTH} Fetch User`;

export const authLogin = (credentials) => ({
    type: AUTH_LOGIN,
    payload: credentials
})

export const authLogout = () => ({
    type: AUTH_LOGOUT,
})

export const updateAccessToken = (token) => ({
    type: UPDATE_ACCESS_TOKEN,
    payload: token
})

export const updateUser = (user) => ({
    type: UPDATE_USER,
    payload: user,
})

export const fetchUserData = (token) => ({
    type: FETCH_USER,
    payload: token
})