import React from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import {colors} from '../../General/Colors/Colors';

const CustomInputText = props => {
  const {
    bgColor,
    selectTextColor,
    text,
    borderColor,
    width,
    maxlenth,
    pColor,
    icon,
    textColor,
    cursorColor,
    onchnageText,
  } = props;
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        // maxlenth,
        flexDirection: icon ? 'row' : 'column',
        width: width,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: borderColor,
        backgroundColor: bgColor,
        paddingTop: 8,
        paddingBottom: 8,
        alignSelf: 'center',
        paddingRight: icon ? 30 : 0,
      }}>
      <TextInput
        placeholder={text}
        selectionColor={selectTextColor}
        style={{
          width: '98%',

          fontSize: 19,
          paddingLeft: 25,
          color: textColor,
        }}
        placeholderTextColor={pColor}
        cursorColor={cursorColor}
        maxLength={maxlenth}
        onChangeText={onchnageText}
      />
      {icon ? icon : null}
    </View>
  );
};

export default CustomInputText;
