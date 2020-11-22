import { FETCH_PROJECTS } from '../actions/constants';

const initialState = {
    data: '',
    loading:true,
};

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROJECTS: {
            const newState = {
                ...state,
                data: action.payload,
                loading:false
            };
            return newState;
        }
        default:
            return state;
    }
};

export default projectReducer;