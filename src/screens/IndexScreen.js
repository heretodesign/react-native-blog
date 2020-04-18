import React, { useContext } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import BlogContext  from '../context/BlogContext'

const IndexScreen = () => {
    const { data, addBlogPost } = useContext(BlogContext);

    return (
        <View>
            <Text>Item Screen</Text>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList 
                data={data}
                keyExtractor={blogPosts => blogPosts.title}
                renderItem={({item}) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    );
}

const style = StyleSheet.create({

});

export default IndexScreen;
