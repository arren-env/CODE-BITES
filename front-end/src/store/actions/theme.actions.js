
export const THEME = `[Theme]`;
export const SET_MODE = `${THEME} Set Mode`;
export const TOGGLE_MODE = `${THEME} Toggle Mode`;

export const setMode = (mode) => ({
    type: SET_MODE,
    payload: mode,
})

export const toggleMode = () => ({
    type: TOGGLE_MODE,
})