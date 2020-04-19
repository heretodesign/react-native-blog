import React, { useReducer } from 'react';
import createDataContext from "./createDataContext";
// const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch(action.type){
        case 'delete_blogPost':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        case 'add_blogPost':
            return [...state, 
                {
                    id: Math.floor(Math.random() * 99999),
                    title: `Blog state is #${state.length + 1}`
                }];
            default: 
                return state;
    }
};

const addBlogPost = dispatch => {
    return () => {
        dispatch({ type: 'add_blogPost' });
    };
};

const deleteBlogPost = dispatch => {
    return () => {
        dispatch({ type: 'delete_blogPost', payload: id });
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost },
    []
);