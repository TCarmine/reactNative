import React, { Component } from 'react';
import { View, Text } from 'react-native';


class AlbumList extends Component  {
    componentDidMount(){
    console.log('componentWillMount in AlbumList');
    debugger;
    } 
    render() {
        return (
            <View>
                <Text> These are amazing albums: </Text>
            </View>
         );
    }
}

export default AlbumList;