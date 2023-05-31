

import { FETCH_USER, authLoading, authReady, updateUser } from '../actions';
import { API_FETCH_USER } from '../constants';

export const authMiddleware = ({ getState, dispatch }) => (next) => async (action) => {
    next(action);
    const accessToken = action.payload // Retrieve the token from your storage mechanism
    const user = getState().auth.user; // Assuming you have stored user data in your auth state
    
    // Check if the token is present and user is not authenticated
    if (accessToken && !user && action.type === FETCH_USER) {
        dispatch(authLoading());
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
            console.log('Error fetching user data:', error);
        }finally{
            setTimeout(() => {
                dispatch(authReady());
            }, 3000);
        }
    }
};
