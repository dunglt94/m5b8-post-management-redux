import axios from "axios";

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const ADD_POST = 'ADD_POST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const FETCH_POST = 'FETCH_POSTS';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const EDIT_POST = 'EDIT_POST';
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';

export const fetchPosts = () => {
    return async dispatch => {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );
        dispatch({
            type: FETCH_POSTS_SUCCESS,
            payload: response.data
        });
    };
}

export const addPosts = (newPost) => {
    return async dispatch => {
        const response = await axios.post(
            "https://jsonplaceholder.typicode.com/posts", newPost
        );
        dispatch({
            type: ADD_POST_SUCCESS,
            payload: response.data
        });
    };
}

export const fetchPost = (postId) => {
    return async dispatch => {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        dispatch({
            type: FETCH_POST_SUCCESS,
            payload: response.data
        });
    };
}

export const editPosts = (post) => {
    return async dispatch => {
        const response = await axios.put(
            `https://jsonplaceholder.typicode.com/posts/${post.id}`, post
        );
        dispatch({
            type: EDIT_POST_SUCCESS,
            payload: response.data
        });
    };
}