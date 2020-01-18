// Function to decide what happens to state based on an action.

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    GET_USER,
    SET_LOADING
} from '../types';

// GithubState dispaches actions here, ad depending on the TYPE it does something, maybe with a payload...
export default (state, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token); // saving the token to headings
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            };
        case REGISTER_FAIL:
            localStorage.removeItem('token'); // removing any tokens from storage
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload // setting error in the payload to the one in msg in users.js
            };
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
};
