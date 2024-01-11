import * as actions from '../actions/systemActions';
import { generateId } from "../services/helper";


const initialState = {
    toasters: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_SYSTEM_TOASTER:
            const { message, variant } = action;

            return {
                ...state,
                toasters: [
                    ...state.toasters,
                    { id: generateId(), message, variant },
                ],
            };

        case actions.REMOVE_SYSTEM_TOASTER:
            const { id } = action;

            return {
                ...state,
                toasters: state.toasters.filter((toaster) => toaster.id !== id),
            };

        default:
            return state;
    }
};

export default reducer;
