import {
    BASE_URL, 
    SKILLS_ENDPOINT,
    PROJECTS_ENDPOINT,
    BLOGS_ENDPOINT,
    FETCH_SKILLS_SETS,
    FETCH_PROJECTS,
    FETCH_BLOGS
} from './constants';

export const dispatchSkillSets = data => ({
    type: FETCH_SKILLS_SETS,
    payload: data
});

export const dispatchProjects = data => ({
    type: FETCH_PROJECTS,
    payload: data
});

export const dispatchBlogs = data => ({
    type: FETCH_BLOGS,
    payload: data
});

export const fetchSkillSets = () => dispatch => {
    fetch(process.env.REACT_APP_API+SKILLS_ENDPOINT)
    .then(response =>  response.json())
    .then(data => {
       dispatch(dispatchSkillSets(data));
    })
}

export const fetchProjects = () => dispatch => {
    fetch(process.env.REACT_APP_API+PROJECTS_ENDPOINT)
    .then(response =>  response.json())
    .then(data => {
       dispatch(dispatchProjects(data));
    })
}

export const fetchBlogs = () => dispatch => {
    fetch(process.env.REACT_APP_API+BLOGS_ENDPOINT)
    .then(response =>  response.json())
    .then(data => {
       dispatch(dispatchBlogs(data));
    })
}