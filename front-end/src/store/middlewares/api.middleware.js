

export const apiMiddleware = (store) => (next) => (action) => {
    // if (action.type === API_REQUEST) {
    //     const { accessToken } = store.getState().auth;
    //     // Add authorization header with access token
    //     const headers = {
    //         'Content-Type': 'application/json',
    //         Authorization: `Bearer ${accessToken}`,
    //     };

    //     // Proceed with the API request
    //     const updatedAction = {
    //         ...action,
    //         headers,
    //     };
    //     next(updatedAction);
    // } else if (action.type === API_ERROR && action.payload.status === 401) {
    //     const { refreshToken } = store.getState().auth;
    //     // Use the refresh token to get a new access token
    //     fetch(API_REFRESH_TOKEN_ENDPOINT, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ refreshToken }),
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             const { accessToken } = data;
    //             // Update the access token in the store
    //             store.dispatch(updateAccessToken(accessToken));

    //             // Retry the original API request
    //             const originalRequest = action.meta.originalRequest;
    //             originalRequest.headers.Authorization = `Bearer ${accessToken}`;
    //             fetch(originalRequest.url, originalRequest)
    //                 .then((response) => response.json())
    //                 .then((data) => {
    //                     // Dispatch the success action
    //                     store.dispatch({
    //                         type: API_SUCCESS,
    //                         payload: data,
    //                         meta: {
    //                             originalRequest: action.meta.originalRequest,
    //                         },
    //                     });
    //                 })
    //                 .catch((error) => {
    //                     // Dispatch the API request failure action
    //                     store.dispatch({
    //                         type: API_ERROR,
    //                         payload: error,
    //                         meta: {
    //                             originalRequest: action.meta.originalRequest,
    //                         },
    //                     });
    //                     console.log(error);
    //                 });
    //         })
    //         .catch((error) => {
    //             // Handle refresh token failure (e.g., logout the user)
    //         });
    // } 
    // else {
        // Proceed with other actions
        next(action);
    // }
};
