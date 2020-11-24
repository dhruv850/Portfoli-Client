import { FETCH_TESTIMONIALS } from '../actions/constants';

const initialState = {
    data: '',
    loading:true
};

const testimonialReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TESTIMONIALS: {
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

export default testimonialReducer;