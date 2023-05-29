
export const AUTH = "[AUTH]";

export const AUTH_LOGIN = `${AUTH} Login`;
export const AUTH_LOGOUT = `${AUTH} Logout`;

export const authLogin = (user)=>({
    type: AUTH_LOGIN,
    payload: user
})

export const authLogout = ()=>({
    type: AUTH_LOGOUT,
})