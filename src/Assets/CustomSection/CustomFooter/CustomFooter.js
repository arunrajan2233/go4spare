import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image  } from 'react-native';
import { footerData } from '../../General/Data/FooterData/FooterData';
import { horizontalScale, verticalScale } from '../../General/Dimension/Dimension';

const CustomFooter = (props) => {
    const {navigation, state} = props;
   return (
    <View style={styles.container}>
        {footerData.map((item,index)=>{
         const icons = state.index === index ? item. s_image: item.image;
             return(
                <TouchableOpacity
                onPress={() => navigation.navigate(item.navigation)}
                style={styles.bottomContainer}
                key={index}>
                <Image style={styles.iconStyle} source={icons} />
                <Text style={styles.FooterText}>{item.name}</Text>
              </TouchableOpacity>
             )

        })}
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  bottomContainer: {
    height: verticalScale(70),
  },
  iconStyle: {
    width: horizontalScale(30),
    height: verticalScale(30),
    resizeMode: 'contain',
    marginTop: verticalScale(10),
    alignSelf: 'center',
  },
  FooterText: {
    alignSelf: 'center',
  },
});

export default CustomFooter;