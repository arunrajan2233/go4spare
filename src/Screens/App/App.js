import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Splash from '../SplashScreen.js/Splash';
import HomeScreen from '../HomeScreen/HomeScreen';
import Category from '../Category/Category';
import Stores from '../Stores/Stores';
import Profile from '../Profile/Profile';
import OTP from '../OTP/OTP';
import CustomFooter from '../../Assets/CustomSection/CustomFooter/CustomFooter';
import Brands from '../Brands/Brands';
import Login from '../Login/Login';
import FotgotPassword from '../ForgotPassword/FotgotPassword';
import Registration from '../Registration/Registration';
import {store} from '../../Redux/Store/Store';
import {Provider, useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  const [loading, setLoading] = useState(true);
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [isLoggedIn]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {loading ? (
          <Stack.Screen name="splash" component={Splash} />
        ) : (
          <>
            {isLoggedIn ? (
              <Stack.Screen name="MyTabs" component={MyTabs} />
            ) : (
              <>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen
                  name="ForgotPassword"
                  component={FotgotPassword}
                />
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen name="otp" component={OTP} />
              </>
            )}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomFooter {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Brands" component={Brands} />
      <Tab.Screen name="Stores" component={Stores} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

// const topTab = createMaterialTopTabNavigator();

//  const TopTabNavigation=()=>{
//   return (
//     <topTab.Navigator>
//       <Tab.Screen name="Category" component={Category} />
//       <Tab.Screen name="Brands" component={Brands} />

//       </topTab.Navigator>
//   );
//  }
const App = () => {
  return (
    <Provider store={store}>
      <HomeNavigation />
    </Provider>
  );
};
export default App;
