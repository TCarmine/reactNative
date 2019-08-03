//This is an overrride of the default "App"
// created by react-native, even those was changed name and Component changed name,
//it cause error in runtime. Neet  futher check

import React, {Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './common';


class MyApp extends Component {
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