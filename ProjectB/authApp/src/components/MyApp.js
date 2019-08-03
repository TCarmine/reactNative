//This is an overrride of the default "App"
// created by react-native, even those was changed name and Component changed name,
//it cause error in runtime. Neet  futher check
import firebase from 'firebase';
import React, {Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './common';


class MyApp extends Component {
    componentDidMount(){
        firebase.initializeApp(
            {
                apiKey: 'AIzaSyA_w-p51ZDIKqSn13LKTcZ3NNcSZKS_-ic',
                authDomain: 'auth-401fe.firebaseapp.com',
                databaseURL: 'https://auth-401fe.firebaseio.com',
                projectId: 'auth-401fe',
                storageBucket: '',
                messagingSenderId: '134190577020',
                appId: '1:134190577020:web:08f443edde03a50b'
            });
    }
    render(){
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>
                    Another app authentication
                </Text>
            </View>
        );
    }
}

export default MyApp;