import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../General/Colors/Colors';
import {useNavigation} from '@react-navigation/native';

const CustomHeader = props => {
  const {name, redirection} = props;
   const navigation = useNavigation();

  const handleNavigation = () => {
     // console.warn("pressed");

     navigation.navigate(redirection);
    // navigation.goBack();
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigation}>
        <AntDesign name="arrowleft" size={30} color={colors.white} />
      </TouchableOpacity>
      <Text style={styles.headingText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.defaultOrange,
    gap: 10,
  },
  headingText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 24,
    color: colors.white,
  },
});

export default CustomHeader;
