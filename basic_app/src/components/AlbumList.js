import React, { Component }  from 'react';
import { ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component  {
   
    // class level proprety
     // Component State, make sure that everytime data change the component will remount, this is how
     // React behave once the state change
    state = { albums: [] }  //1. default, when a component is created has a state this.state()
    // ComponentWillMpunt is been deprecated
    componentDidMount(){
       // return a promise as exios is async
       axios.get('https://rallycoding.herokuapp.com/api/music_albums')
         .then(response => this.setState({ albums: response.data }));  
        
    }
 
    renderAlbums() {
        return this.state.albums.map(album => 
            //albumrecord--> passing props to the child
          <AlbumDetail key={album.title} albumrecord = {album}/ >

        );
        
    }
   
    render() {
        
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;