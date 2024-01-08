import React from 'react';
  import {View, Text, Image, ScrollView, StatusBar} from 'react-native';
import {styles} from './Styles';
import Spacer from '../../Assets/CustomSection/EmptySpacer/EmptySpace';
import {verticalScale} from '../../Assets/General/Dimension/Dimension';
import {colors} from '../../Assets/General/Colors/Colors';
import CustomInputText from '../../Assets/CustomSection/CustomInputText/CustomInputText';
import CustomButton from '../../Assets/CustomSection/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';

const Verification = () => {
  return (
    <View>
    <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{backgroundColor: colors.defaultOrange}}>
              <StatusBar
      barStyle={'light-content'}
      backgroundColor={colors.defaultOrange}
    />
    <Spacer height={verticalScale(200)} />

    <View style={styles.logoContainer}>
      <Image
        style={styles.logoImage}
        source={require('../../Assets/Images/logo.png')}
      />
    </View>
    <View style={styles.wrapperContainer}>
      <Text style={styles.welcomText}>Verification OTP</Text>
      <Text style={styles.decText}>Please enter your OTP</Text>
    </View>

    {/* Custom Section */}

    <View style={styles.customContainer}>
      <CustomInputText
        width={'100%'}
        bgColor={colors.defaultOrange}
        // text={'*'}
        borderColor={colors.white}
        maxlenth={1}

      />
        <CustomInputText
        width={'100%'}
        bgColor={colors.defaultOrange}
        // text={'*'}
        borderColor={colors.white}
        maxlenth={1}

      />
        <CustomInputText
        width={'100%'}
        bgColor={colors.defaultOrange}
        // text={'*'}
        borderColor={colors.white}
        maxlenth={1}
      />
        <CustomInputText
        width={'100%'}
        bgColor={colors.defaultOrange}
        // text={''}
        borderColor={colors.white}
        maxlenth={1}

      />
 
    </View>

    {/* timmer section */}

    <View style={styles.orTextContainer}>
      <View style={styles.line} />
      <Text style={styles.orText}>OR</Text>
      <View style={styles.line} />
    </View>

    {/* fb and gmail login */}
    <View style={styles.socialLoginContainer}>
      <Image
        style={styles.loginImage}
        source={require('../../Assets/Images/google.png')}
      />
      <Image
        style={styles.loginImage}
        source={require('../../Assets/Images/fb.png')}
      />
    </View>
    <Spacer height={verticalScale(38)} />

    {/* bottom Text section */}
    {/* <View style={styles.bottomTextContainer}>
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
    </View> */}
    <Spacer height={verticalScale(20)} />
  </ScrollView> 
  </View>
  );
};
 

export default Verification;