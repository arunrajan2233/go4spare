import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../Assets/General/Colors/Colors';
import {verticalScale} from '../../Assets/General/Dimension/Dimension';
import Spacer from '../../Assets/CustomSection/EmptySpacer/EmptySpace';
import CustomInputText from '../../Assets/CustomSection/CustomInputText/CustomInputText';
import CustomButton from '../../Assets/CustomSection/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const Registration = () => {
  const navigation = useNavigation();
  const handleOnPress = () => {
    console.warn('pressed');
  };

  const handleLinkPress = () => {
    console.warn('link Pressed');
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Spacer height={40} />

        {/* ********************* Heading Section *************************** */}

        <View style={styles.logoContainer}>
          <Image
            style={styles.logoImage}
            source={require('../../Assets/Images/logo.png')}
          />
        </View>
        <View style={styles.wrapperContainer}>
          <Text style={styles.registrationText}>Registration</Text>
        </View>

        {/*******************Custom Section*************************/}
        <Spacer height={30} />
        <View style={{gap: 20}}>
          <CustomInputText
            width={'90%'}
            bgColor={colors.defaultOrange}
            text={'Name'}
            borderColor={colors.white}
            pColor={colors.redLevel_4}
            cursorColor={colors.white}
          />

          <CustomInputText
            width={'90%'}
            bgColor={colors.defaultOrange}
            text={'Email'}
            borderColor={colors.white}
            pColor={colors.redLevel_4}
            cursorColor={colors.white}
          />
          <CustomInputText
            width={'90%'}
            bgColor={colors.defaultOrange}
            text={'country'}
            borderColor={colors.white}
            pColor={colors.redLevel_4}
            cursorColor={colors.white}
          />

          <CustomInputText
            width={'90%'}
            bgColor={colors.defaultOrange}
            text={'mobile'}
            borderColor={colors.white}
            pColor={colors.redLevel_4}
            cursorColor={colors.white}
          />
          <CustomInputText
            width={'90%'}
            bgColor={colors.defaultOrange}
            text={'Password'}
            borderColor={colors.white}
            pColor={colors.redLevel_4}
            cursorColor={colors.white}
          />
          <CustomInputText
            width={'90%'}
            bgColor={colors.defaultOrange}
            text={'Confirm Password'}
            borderColor={colors.white}
            pColor={colors.redLevel_4}
            cursorColor={colors.white}
          />
          <CustomButton
            text={'Register'}
            btnbgcolor={colors.white}
            textColor={colors.defaultOrange}
            width={'90%'}
            onPress={handleOnPress}
          />
        </View>

        <Spacer height={20} />

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
        <Spacer height={30} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.defaultOrange,
  },
  logoContainer: {
    //  backgroundColor:"blue",
    width: '100%',
    padding: 10,
  },
  logoImage: {
    // width:horizontalScale(300),
    width: '70%',
    height: verticalScale(80),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  registrationText: {
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
  loginOption: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
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

export default Registration;
