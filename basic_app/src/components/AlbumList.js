import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';


class AlbumList extends Component  {
    // Component State
    // class level proprety
    state = { albums: [] }  //1. default this.hasstate()
    
    componentDidMount(){
       // return a promise as exios is async
       axios.get('https://rallycoding.herokuapp.com/api/music_albums')
         .then(response => this.setState({ albums: response.data }));  
        
    }

    renderAlbums() {
       return this.state.albums.map(album => <Text>{ album.title }</Text>);
    }
    
    render() {
        
        return (
            <View>
                {this.renderAlbums()}
                
            </View>
        );
    }
}

export default AlbumList;