// import libraries for making component
import React from 'react';
import { Text, View } from 'react-native';

// Make a Component
const Header = () =>{
  const { textStyle,viewStyle } = styles;
  return(
    <View style={viewStyle}>
      <Text style={textStyle}>Altro cambio 3!!!</Text>;
    </View>
  )
};

const styles ={
  viewStyle:{
    backgroundColor:'#F8F8F8';
  }
  textStyle: {
    fontSize:20
  }
};

// Make the component available to other parts of the App

export default Header;
