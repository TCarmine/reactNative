/**
 * @format
 */
import React from 'react';
import ReactNative from 'react-native';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const App = () {
    return (  
        <Text> as example </Text>
    );
}

AppRegistry.registerComponent(appName, () => App);

