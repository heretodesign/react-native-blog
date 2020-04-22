import React, { useContext } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { StyleSheet } from 'react-native'
import { Context }  from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'
import { BlogPostForm } from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = React.useContext(Context);

    return <BlogPostForm />;
}

const styles = StyleSheet.create({

});

export default CreateScreen;
