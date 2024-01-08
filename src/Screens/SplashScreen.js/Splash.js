import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { colors } from '../../Assets/General/Colors/Colors';
import { styles } from './Styles';
const Splash = () => {
  return (
    <View style={styles.container}>
        <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.defaultOrange}
      />
      <Image style={styles.logoImg} source={require("../../Assets/Images/logo.png")}/>
     </View>
  );
};


export default Splash;