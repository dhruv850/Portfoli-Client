import {combineReducers} from 'redux';

import skillSetsReducer from './skillSetsReducer';
import projectReducer from './projectReducer';
import blogsReducer from './blogsReducer';
import testimonialReduce from './testimonialReducer'
const rootReducer = combineReducers({
    skills: skillSetsReducer,
    projects: projectReducer,
    blogs: blogsReducer,
    testimonial:testimonialReduce,
});

export default rootReducer;