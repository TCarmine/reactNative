// This should enable to debug CSS from Chrome react dev tool 
// It happens that app.json created by default react-native is not been 
// read by Adroid studio, so it never recognize the mapping of the app name,
// so better use app's string name:'authApp'.
// on top of that this file is not read once the build is done, so metro does not
// read and update version, so better check manually into Android Studio.

require('react-devtools-core').connectToDevTools({host: '192.168.43.151'})

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import MyApp from './src/MyApp.js';
// import {authApp as appName} from './app.json';

AppRegistry.registerComponent('authApp', () => MyApp);
