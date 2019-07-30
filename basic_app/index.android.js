//This should enable to debug CSS from Chrome react dev tool 
require('react-devtools-core').connectToDevTools({host: '192.168.43.151'})

/**
 * @format
 */
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
    return(
        <View>  
          <Header headerText={'Albums'}/>
          <AlbumList />
        </View>
   ) 
};

AppRegistry.registerComponent('basic_app', () => App);
