//This should enable to debug CSS from Chrome react dev tool 
require('react-devtools-core').connectToDevTools({host: '192.168.43.151'})

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import MyApp from './src/components/MyApp.js';
// import {authApp as appName} from './app.json';

AppRegistry.registerComponent('authApp', () => MyApp);
