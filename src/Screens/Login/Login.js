import React, {useState} from 'react';
import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import {styles} from './Styles';
import Spacer from '../../Assets/CustomSection/EmptySpacer/EmptySpace';
import {verticalScale} from '../../Assets/General/Dimension/Dimension';
import {colors} from '../../Assets/General/Colors/Colors';
import CustomInputText from '../../Assets/CustomSection/CustomInputText/CustomInputText';
import CustomButton from '../../Assets/CustomSection/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {Emailvalidation} from '../Validation/Validation';
import Snackbar from 'react-native-snackbar';
import {login} from '../../Redux/Action/Action';
import {useDispatch} from 'react-redux';

const Login = () => {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [message, setMessage] = useState();
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handleLinkPress = () => {
    console.warn('link Clicked');
  };

  const handleOnPress = async () => {
    // Trim the email and password
    const trimmedEmail = email.trim();
    const trimmedPassword = Password.trim();

    if (trimmedEmail !== '' && trimmedPassword !== '') {
      // Call the email validation function
      const isValidEmail = Emailvalidation(trimmedEmail);

      // if (isValidEmail) {
      try {
        await fetch('https://go4spare.com/api/web/login', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: trimmedEmail.toLowerCase(),
            password: trimmedPassword,
          }),
        })
          .then(response => response.json())
          .then(json => {
            if (json.status === 'true') {
              const name = json.data.name;

              Snackbar.show({
                text: 'Login Successful',
                duration: Snackbar.LENGTH_LONG,
                textColor: colors.white,
                backgroundColor: colors.green,
              });
              dispatch(
                login({
                  email: trimmedEmail,
                  name: name,
                }),
              );
              navigation.navigate('MyTabs');
            } else {

                setMessage(json.message);

                setTimeout(() => {
                  Snackbar.show({
                    text: message,
                    duration: Snackbar.LENGTH_LONG,
                    textColor: colors.white,
                    backgroundColor: 'red',
                  });
                 }, 2000);

            
            }
            setMessage(json.message);
          })
          .catch(err => console.warn(err));
      } catch (error) {}
      // } else {
      //   console.warn('Check email');
      // }
    } else {
      Snackbar.show({
        text: 'Please Fill All Details',
        duration: Snackbar.LENGTH_LONG,
        textColor: colors.white,
        backgroundColor: 'red',
      });
    }
  };
  return (
    <View style={styles.mainContainer}>
      <Spacer height={50} />
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.defaultOrange}
      />

      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require('../../Assets/Images/logo.png')}
        />
      </View>
      <View style={styles.wrapperContainer}>
        <Text style={styles.welcomText}>Welcome</Text>
        <Text style={styles.decText}>Please sign in to continue</Text>
      </View>

      {/* Custom Section */}

      <View style={styles.customContainer}>
        <CustomInputText
          width={'90%'}
          bgColor={colors.defaultOrange}
          text={'Email'}
          borderColor={colors.white}
          pColor={colors.white}
          textColor={colors.white}
          cursorColor={colors.white}
          onchnageText={text => setEmail(text)}
        />
        <CustomInputText
          width={'90%'}
          bgColor={colors.defaultOrange}
          text={'Password'}
          borderColor={colors.white}
          pColor={colors.white}
          cursorColor={colors.white}
          textColor={colors.white}
          selectTextColor={colors.white}
          onchnageText={text => setPassword(text)}
        />
        <View style={styles.restOptions}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}>
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

      <View style={styles.accountInfo}>
        <Text style={styles.orText}>Don't have an account yet?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Registration');
          }}>
          <Text style={styles.createLink}>Create Account</Text>
        </TouchableOpacity>
      </View>
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
      <Spacer height={verticalScale(20)} />
    </View>
  );
};

export default Login;
