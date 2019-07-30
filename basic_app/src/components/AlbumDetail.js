import React, { Component } from 'react';
import {  Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    return (
        <Card>
              <Text> 
                 {props.albumrecord.title}
              </Text>
        </Card>
    )
};

const styles ={
    styleText: {
      elevation:2
    }       
}
export default AlbumDetail;

