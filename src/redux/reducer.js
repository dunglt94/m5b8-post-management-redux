import {ADD_POST_SUCCESS, EDIT_POST_SUCCESS, FETCH_POSTS_SUCCESS} from "./action";

const initialState = {
    posts: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return {...state, posts: action.payload};
        case ADD_POST_SUCCESS:
            return {...state, posts: [...state.posts, action.payload]};
        case EDIT_POST_SUCCESS:
            return {...state,
                posts: state.posts.map((post) =>
                    post.id === action.payload.id ? action.payload : post)};
        default:
            return state;
    }
};

export default rootReducer;