import { SET_MODE, TOGGLE_MODE } from "../actions";
import { THEME_MODE } from "../constants";

const defaultTheme = window.matchMedia("(prefers-color-scheme:dark)").matches ? THEME_MODE.DARK : THEME_MODE.LIGHT;

const themeReducer = (theme = defaultTheme, action) => {

    switch (action.type) {

        case SET_MODE:
            return action.payload;

        case TOGGLE_MODE:
            const newMode = theme === THEME_MODE.DARK ? THEME_MODE.LIGHT : THEME_MODE.DARK;
            return newMode;

        default:
            return theme;
    }
};

export default themeReducer;