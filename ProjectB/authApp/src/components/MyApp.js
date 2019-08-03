import React, {Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './common';


class MyApp extends Component {
    render(){
        return (
            <View>
                <Header headertext="Authentication" />
                <Text>
                    Another app authentication
                </Text>
            </View>
        );
    }
}

export default MyApp;