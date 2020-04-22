import React, { useState, useContext } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native'
import { Context }  from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
            {/* <Button title="Add Post" onPress={deleteBlogPost} /> */}
        </View>
    );
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: <TouchableOpacity onPress={() => 
            navigation.navigate('Edit', { id: navigation.getParam('id')})
            }
        >
            <EvilIcons name="pencil" size={35} />
        </TouchableOpacity>
    };
}; 

const styles = StyleSheet.create({
    
});

export default ShowScreen;
