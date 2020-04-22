import React, { useState, useContext } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { StyleSheet, Text, TextInput, View, Button, FlatList, TouchableOpacity } from 'react-native'
import {Context}  from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'
import { BlogPostForm } from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find(
        blogPost => blogPost.id === navigation.getParam('id')
    );

    return <BlogPostForm 
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
            Console.log(title, content)
        }}
    />;
}

const styles = StyleSheet.create({
    
});

export default EditScreen;
