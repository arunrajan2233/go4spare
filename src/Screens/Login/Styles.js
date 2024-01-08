import {StyleSheet} from 'react-native';
import {colors} from '../../Assets/General/Colors/Colors';
import {
  horizontalScale,
  verticalScale,
} from '../../Assets/General/Dimension/Dimension';

export const styles = StyleSheet.create({
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
    fontSize: 38,
    color: colors.white,
  },
  decText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    marginTop: verticalScale(9),
    color: colors.white,
  },
  wrapperContainer: {
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  customContainer: {
    marginTop: 34,
    marginBottom: 15,
    gap: 25,
  },
  orTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"red",
    flexDirection: 'row',
    gap: 5,
    marginBottom: 28,
  },
  line: {
    borderWidth: 1,
    borderColor: colors.orangeLevel_2,
    width: '10%',
  },
  orText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 22,
    color: colors.orangeLevel_2,
  },
  loginImage: {
    width: horizontalScale(48),
    height: verticalScale(48),
    resizeMode: 'contain',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 18,
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
  mainContainer: {
    backgroundColor: colors.defaultOrange,
    flex: 1,
  },
  restOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 30,
  },
  fotgotText: {
    color: colors.blue,
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
  },
  accountInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
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
});
