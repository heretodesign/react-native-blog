import React, { useReducer } from 'react';
import createDataContext from "./createDataContext";
// const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch(action.type){
        case 'add_blogPost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            });
        case 'delete_blogPost':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        case 'add_blogPost':
            return [...state, 
                {
                    id: Math.floor(Math.random() * 99999),
                    title: action.payload.title,
                    content: action.payload.content
                }];
            default: 
                return state;
    }
};

const addBlogPost = dispatch => {
    return (title, content, callball) => {
        dispatch({ type: 'add_blogPost', payload: { title, content } });
        if (callback) {
            callball();
        }
    };
};

const deleteBlogPost = dispatch => {
    return () => {
        dispatch({ type: 'delete_blogPost', payload: id });
    };
};

const editBlogPost = dispatch => {
    return (id, title, content, callball) => {
        dispatch({ type: 'edit_blogPost', 
        payload: { id, title, content } 
    });
    if (callback) {
        callball();
    }
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost, edit_blogPost },
    [{ title: 'Test Title', content: 'Hello Testing content', id: 1 }]
);