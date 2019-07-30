import React, { Component } from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = (props) => {
    return (
        <View>
            <Text>
              {props.albumrecord.title}
            </Text>
        </View>
    )
};

export default AlbumDetail;

