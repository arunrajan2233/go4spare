import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import CustomHeader from '../../Assets/CustomSection/CustomHeader/CustomHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../Assets/General/Colors/Colors';
import Spacer from '../../Assets/CustomSection/EmptySpacer/EmptySpace';
 import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { signout } from '../../Redux/Action/Action';

const Profile = () => {

  const email=useSelector(state=>state.email)
  const name=useSelector(state=>state.name)  

  const dispatch=useDispatch();

  const handleLogOut=()=>{
    dispatch(signout({
      email:"",
      name:''
    }))
  }
  return (
    <View style={styles.container}>
      <CustomHeader name={'Profile'} redirection={'Home'} />

      <ScrollView showsVerticalScrollIndicator={false}>
 
        {/* ****************personal Info**************** */}
        <View style={styles.personalInfo}>
         

          <View style={styles.containerImg}>
            <Image
              source={require("../../Assets/Images/profile.png")}
              style={styles.roundedImage}
            />
          </View>

          <Spacer height={20} />
          <View style={styles.userDetails}>
            <Text style={styles.nameText}>{name??""}</Text>
            <Text style={styles.emailText}>{email??""}</Text>
          </View>
          <Spacer height={30} />
        </View>

        {/* *********menus************* */}
        <TouchableOpacity style={styles.mainContainer}>
          <View style={styles.menuView}>
            <Text style={styles.menuText}>Help & Support</Text>
            <AntDesign
              name="arrowright"
              size={30}
              color={colors.balckLevel_2}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.mainContainer}>
          <View style={styles.menuView}>
            <Text style={styles.menuText}>Share Go4spare</Text>
            <AntDesign
              name="arrowright"
              size={30}
              color={colors.balckLevel_2}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.mainContainer}>
          <View style={styles.menuView}>
            <Text style={styles.menuText}>Helpline</Text>
            <AntDesign
              name="arrowright"
              size={30}
              color={colors.balckLevel_2}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogOut} style={styles.mainContainer}>
          <View style={styles.menuView}>
            <Text style={styles.menuText}>Logout</Text>
            <AntDesign
              name="arrowright"
              size={30}
              color={colors.balckLevel_2}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.mainContainer}>
          <Text style={styles.appText}>T&Cs | Privacy Policy</Text>
          <Text style={styles.appText}>App Version : 0.1</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  personalInfo: {
    backgroundColor: colors.white,
  },
  wrapper: {
    marginRight: 32,
    marginLeft: 32,
  },
  imageTouch: {
    backgroundColor: colors.grayLevel_3,
    padding: 10,
    borderRadius: 60,
    alignSelf: 'center',
    width: '40%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userDetails: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    fontFamily: 'OpenSans-SemiBold',
    color: colors.balckLevel_1,
    fontSize: 28,
  },
  emailText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    color: colors.graylevel_1,
  },
  menuView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainContainer: {
    backgroundColor: colors.white,
    marginTop: 20,
    padding: 20,
  },
  menuText: {
    fontFamily: 'OpenSans-SemiBold',
    color: colors.balckLevel_1,
    fontSize: 20,
  },
  containerImg: {
    alignItems: 'center',
    justifyContent: 'center',
    padding:10
   },
  roundedImage: {
    width: 100, // Set your desired width
    height: 100, // Set your desired height
    borderRadius: 50, // Half of the width and height to create a circle
    resizeMode:"contain"
  },
  appText:{
    alignSelf:'center'
  }
});

export default Profile;
