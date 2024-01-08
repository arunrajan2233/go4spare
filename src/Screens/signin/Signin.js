import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  horizontalScale,
  verticalScale,
} from '../../Assets/General/Dimension/Dimension';
import {colors} from '../../Assets/General/Colors/Colors';
import CustomInputText from '../../Assets/CustomSection/CustomInputText/CustomInputText';
import CustomButton from '../../Assets/CustomSection/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import Spacer from '../../Assets/CustomSection/EmptySpacer/EmptySpace';

const SignIn = () => {
  const navigation = useNavigation();
  const handleOnPress = () => {
    navigation.navigate('otp');
  };

  const handleLinkPress = () => {
    console.warn('Link Pressed');
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.defaultOrange}
      />
      <View style={{flex: 0.5}}></View>

      <View style={{flex: 1.5}}>
        <Image
          style={styles.logoImage}
          source={require('../../Assets/Images/logo.png')}
        />
      </View>

      <View
        style={{
          flex: 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={styles.welcomText}>Welcome</Text>
        <Text style={styles.decText}>Please sign in to continue</Text>
      </View>

      <View
        style={{
          flex: 3,
          gap: 25,
        }}>
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
          text={'Password'}
          borderColor={colors.white}
          pColor={colors.redLevel_4}
          cursorColor={colors.white}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: 30,
            marginLeft: 30,
          }}>
          <TouchableOpacity>
            <Text style={styles.fotgotText}>Forgot Password ?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.fotgotText}>Guest User</Text>
          </TouchableOpacity>
        </View>
        <CustomButton
          text={'Login'}
          btnbgcolor={colors.white}
          textColor={colors.defaultOrange}
          width={'90%'}
          onPress={handleOnPress}
        />
      </View>

      <View
        style={{
          flex: 4,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.orText}>Don't have an account yet?</Text>
        <TouchableOpacity>
          <Text style={styles.createLink}>Create Account</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          paddingLeft: 27,
          paddingRight: 27,
          flexDirection: 'row',
        }}>
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
      <View>
        <Spacer height={30} />
      </View>
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
    width: '80%',
    height: verticalScale(100),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  welcomText: {
    fontFamily: 'OpenSans-SemiBold',
    marginTop: verticalScale(5),
    fontSize: 40,
    color: colors.white,
  },
  decText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 21,
    marginTop: verticalScale(9),
    color: colors.white,
    marginBottom: 20,
  },
  line: {
    borderWidth: 1,
    borderColor: colors.orangeLevel_2,
    width: '10%',
  },
  orText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    color: colors.white,
    marginTop: 20,
  },
  createLink: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    color: colors.blue,
  },
  loginImage: {
    width: horizontalScale(48),
    height: verticalScale(48),
    resizeMode: 'contain',
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
  fotgotText: {
    color: colors.blue,
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
  },
});

export default SignIn;
