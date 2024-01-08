import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {verticalScale} from '../../Assets/General/Dimension/Dimension';
import Spacer from '../../Assets/CustomSection/EmptySpacer/EmptySpace';
import {colors} from '../../Assets/General/Colors/Colors';
import CustomInputText from '../../Assets/CustomSection/CustomInputText/CustomInputText';
import CustomButton from '../../Assets/CustomSection/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const FotgotPassword = () => {
  const navigation = useNavigation();
  const handleOnPress = () => {
    console.warn('pressed');
  };
  const handleLinkPress = () => {
    console.warn('link Clicked');
  };
  return (
    <View style={styles.container}>
      <View>
        <Spacer height={40} />

        {/* ************************** Logo and Heading Section ******************** */}

        <View style={styles.logoContainer}>
          <Image
            style={styles.logoImage}
            source={require('../../Assets/Images/logo.png')}
          />
        </View>
        <View style={styles.wrapperContainer}>
          <Text style={styles.welcomText}>Reset Password</Text>
        </View>

        {/* *******************************Custom Section****************************** */}

        <View style={styles.customSection}>
          <CustomInputText
            width={'90%'}
            bgColor={colors.defaultOrange}
            text={'Email'}
            borderColor={colors.white}
            pColor={colors.redLevel_4}
            cursorColor={colors.white}
          />
          <CustomButton
            text={'Get OTP'}
            btnbgcolor={colors.white}
            textColor={colors.defaultOrange}
            width={'90%'}
            onPress={handleOnPress}
          />
        </View>
        <Spacer height={50} />

        {/***************** OR Text Section **********************/}
        <View style={styles.divisionContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        <Spacer height={10} />

        {/* ******************login options***************************** */}

        <View style={styles.loginOption}>
          <Text style={styles.registerLogin}>Already Registered ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Back to Login</Text>
          </TouchableOpacity>
        </View>

        <Spacer height={30} />
        {/* *************************plicy Text **************************** */}

        <View style={styles.bottomTextContainer}>
          <Text style={styles.commonText}>
            By continuing you to share your name and number with Space and agree
            to Go Spare
            <Text style={styles.linkText} onPress={handleLinkPress}>
              {'  '}Privacy Policy {'  '}
            </Text>
            &
            <Text style={styles.linkText} onPress={handleLinkPress}>
              {'  '} Terms of service
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.defaultOrange,
    flex: 1,
  },
  logoContainer: {
    //  backgroundColor:"blue",
    width: '100%',
    padding: 10,
  },
  logoImage: {
    // width:horizontalScale(300),
    width: '80%',
    height: verticalScale(80),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  welcomText: {
    fontFamily: 'OpenSans-SemiBold',
    marginTop: verticalScale(5),
    fontSize: 30,
    color: colors.white,
  },
  wrapperContainer: {
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  customSection: {
    marginTop: 50,
    gap: 30,
  },
  orText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    marginHorizontal: 10,
    color: colors.redLevel_4,
  },

  divisionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  line: {
    borderWidth: 1,
    width: '20%',
    borderColor: colors.redLevel_4,
  },
  registerLogin: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    color: colors.white,
  },
  loginText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    color: colors.blue,
    marginTop: 10,
  },
  loginOption: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  bottomTextContainer: {
    marginLeft: 27,
    marginRight: 27,
    flexDirection: 'row',
  },
  commonText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 13,
    color: colors.white,
    lineHeight: 20,
  },
  linkText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 13,
    color: colors.blue,
    lineHeight: 20,
  },
});

export default FotgotPassword;
