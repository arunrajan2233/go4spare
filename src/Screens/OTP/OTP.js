import React from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import {verticalScale} from '../../Assets/General/Dimension/Dimension';
import {colors} from '../../Assets/General/Colors/Colors';
import CustomInputText from '../../Assets/CustomSection/CustomInputText/CustomInputText';
import {useNavigation} from '@react-navigation/native';

const OTP = () => {
  const navigation = useNavigation();
  const handleLinkPress = () => {
    navigation.navigate('MyTabs');
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.defaultOrange}
      />
      <View style={{flex: 2}}></View>

      <View style={{flex: 1}}>
        <Image
          style={styles.logoImage}
          source={require('../../Assets/Images/logo.png')}
        />
      </View>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={styles.welcomText}>Verification OTP</Text>
        <Text style={styles.decText}>Please enter your OTP</Text>
      </View>

      <View
        style={{
          flex: 1,
          gap: 25,
          flexDirection: 'row',
          justifyContent: 'center',
         }}>
        <CustomInputText
          width={'15%'}
          bgColor={colors.defaultOrange}
          text={''}
          borderColor={colors.white}
          pColor={colors.redLevel_4}
          maxlenth={1}
          cursorColor={colors.white}

        />
           <CustomInputText
          width={'15%'}
          bgColor={colors.defaultOrange}
          text={""}
          borderColor={colors.white}
          pColor={colors.redLevel_4}
          maxlenth={1}
          cursorColor={colors.white}

        />
           <CustomInputText
          width={'15%'}
          bgColor={colors.defaultOrange}
          text={''}
          borderColor={colors.white}
          pColor={colors.redLevel_4}
          maxlenth={1}
          cursorColor={colors.white}

        />
           <CustomInputText
          width={'15%'}
          bgColor={colors.defaultOrange}
          text={""}
          borderColor={colors.white}
          pColor={colors.redLevel_4}
          maxlenth={1}
          cursorColor={colors.white}

        />
      
      </View>
      <View
        style={{
          flex: 0.3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>00:08</Text>
      </View>
      <View
        style={{
          flex: 0.3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>
          Didn't receive the verification OTP?{' '}
          <Text style={styles.linkText} onPress={handleLinkPress}>
            Resend again
          </Text>
        </Text>
      </View>
      <View style={{flex: 2}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.defaultOrange,
  },
  logoImage: {
    // width:horizontalScale(300),
    width: '75%',
    height: verticalScale(90),
    resizeMode: 'contain',
    alignSelf: 'center',
    // marginHorizontal: 10,
  },
  welcomText: {
    fontFamily: 'OpenSans-SemiBold',
    marginTop: verticalScale(5),
    fontSize: 30,
    color: colors.white,
  },
  decText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    marginTop: verticalScale(9),
    color: colors.white,
  },
  linkText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 13,
    color: colors.blue,
    lineHeight: 20,
  },
});

export default OTP;
