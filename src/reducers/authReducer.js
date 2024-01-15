import * as actions from '../actions/authActions';

const initialState = {
    destination: '/dashboard'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_AUTH_DESTINATION:
            const { destination } = action;
            return {
                ...state,
                destination,
            };

        case actions.REMOVE_AUTH_DESTINATION:
            return {
                ...state,
                destination: '/dashboard',
            };

        default:
            return state;
    }
};

export default reducer;
