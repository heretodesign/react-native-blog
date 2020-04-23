import React, { useState, useContext } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { StyleSheet, Text, TextInput, View, Button, FlatList, TouchableOpacity } from 'react-native'
import {Context}  from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'
import { BlogPostForm } from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const { state, editBlogPost } = useContext(Context);

    const blogPost = state.find(
        blogPost => blogPost.id === id
    );

    return <BlogPostForm 
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
            editBlogPost(id, title, content, () => navigation.pop());
        }}
    />;
}

const styles = StyleSheet.create({
    
});

export default EditScreen;
