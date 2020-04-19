import React, { useState } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { StyleSheet, Text, TextInput, View, Button, FlatList, TouchableOpacity } from 'react-native'
import {Context}  from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <View>
            <Text style={styles.label}>Enter Item</Text>
            <TextInput 
                style={styles.input} 
                value={title} 
                onChangeText={text => setTitle(text)} 
            />
            <Text style={styles.label}>Enter Content</Text>
            <TextInput 
                style={styles.input} 
                value={content} 
                onChangeText={text => setContent(text)} 
            />
            <Button title="Add Blog Post" />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default CreateScreen;
