import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';



class AlbumList extends Component  {
    componentDidMount(){
       // return a promise as exios is async
       axios.get('https://rallycoding.herokuapp.com/api/music_albums')
         .then(response=>console.log(response));      
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