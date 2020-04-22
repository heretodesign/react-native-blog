import React, { useState, useContext } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { StyleSheet, Text, TextInput, View, Button, FlatList, TouchableOpacity } from 'react-native'
import {Context}  from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'

const EditScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find(
        blogPost => blogPost.id === navigation.getParam('id')
    );

    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
        <View>
            <Text>Edit Title: </Text>
            <TextInput value={title} onChangeText={newTitle => setTitle(newTitle)} />
            <Button title="Edit Post" />
        </View>
    );
}

const styles = StyleSheet.create({
    
});

export default EditScreen;
