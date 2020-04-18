import React, { useState } from 'react';
import { add } from 'react-native-reanimated';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([]);


    const addBlogPost = () => {
        setBlogPosts([...blogPosts, { title: `BlogPost No. #${blogPosts.length + 1}` }]);
    };


    return (
        <BlogContext.Provider value={{ data: blogPosts, addBlogPost}}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;