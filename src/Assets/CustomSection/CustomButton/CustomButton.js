import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CustomButton = props => {
  const {text, btnbgcolor, textColor,width,onPress} = props;
  return (
  
      <TouchableOpacity  onPress={onPress} style={{    justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:btnbgcolor,
        width:width,
        alignSelf:"center",
        padding:20,
        borderRadius:10}}>
        <Text style={{fontSize: 22, fontFamily: 'OpenSans-SemiBold',color:textColor}}>
          {text}
        </Text>
      </TouchableOpacity>
  
  );
};

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//    },
//   btnText: {
//     fontSize: 22,
//     fontFamily: 'OpenSans-SemiBold',
//   },
// });

export default CustomButton;
