

import Cookies from 'js-cookie';
import { FETCH_USER, updateUser } from '../actions';
import { API_FETCH_USER } from '../constants';
import { useDispatch } from 'react-redux';

export const authMiddleware = ({ getState, dispatch }) => (next) => async (action) => {

    const accessToken = action.payload // Retrieve the token from your storage mechanism
    const user = getState().auth.user; // Assuming you have stored user data in your auth state

    // Check if the token is present and user is not authenticated
    if (accessToken && !user && action.type === FETCH_USER) {
        // fetch user data
        try {
            const options = {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
            const res = await fetch(API_FETCH_USER, options);
            const user = await res.json();
            if (user) {
                dispatch(updateUser(user));
            }
        } catch (error) {
            console.log('Error fetching user data:', error)
        }
    }

    setTimeout(() => {
        next(action);
    }, 3000);
};
