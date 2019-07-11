// import libraries for making component
import React from 'react';
import { Text, View } from 'react-native';
// import {BoxShadow} from 'react-native-shadow';


// Make a Component
const Header = (props) =>{
  const { textStyle, viewStyle } = styles;
  return(

        <View style={viewStyle} >
          <Text style={textStyle}>{props.headerText}</Text>

        </View>
  );
};

const styles ={
  viewStyle: {
    // margin: 2,
    backgroundColor: '#6495ed',/**'#F8F8F8' **/
    justifyContent:'center',
    alignItems:'center',
    height:60,
    paddingTop: 15,
    shadowColor:'#F8F8F8',//'#000',
    shadowOffset:{ width:5, height:20},
    shadowOpacity:0.2,
    elevation: 10,
    position: 'relative'
  },
  // androidShadow:{
  //     width:100,
  //     height:100,
  //     color:"#000",
  //     border:2,
  //     radius:3,
  //     opacity:0.2,
  //     x:0,
  //     y:3,
  //     style:{marginVertical:5}
  // },
  textStyle: {

    fontSize:20
  }
};

// Make the component available to other parts of the App

export default Header;
