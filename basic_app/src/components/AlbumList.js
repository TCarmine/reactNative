import React  from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component  {
    // Component State
    // class level proprety
    state = { albums: [] }  //1. default this.hasstate()
    
    componentDidMount(){
       // return a promise as exios is async
       axios.get('https://rallycoding.herokuapp.com/api/music_albums')
         .then(response => this.setState({ albums: response.data }));  
        
    }

    renderAlbums() {
       return this.state.albums.map(
           album => <AlbumDetail key={album.title} albumrecord = {album} />
        );
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