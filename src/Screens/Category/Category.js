import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {colors} from '../../Assets/General/Colors/Colors';
import CustomInputText from '../../Assets/CustomSection/CustomInputText/CustomInputText';
import CustomHeader from '../../Assets/CustomSection/CustomHeader/CustomHeader';
import {
   useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';


const Category = () => {
  // const [data, setData] = useState([]);
const row=3;
  const navigation = useNavigation();
  const [data, setData] = useState([]);
   const isFocused = useIsFocused();

  //  const category=useSelector(state=>state.category)
  //  console.warn("category",category);

  useEffect(() => {
    if (isFocused) {
      getData();
    }
  }, [isFocused]);

  const getData = async () => {
    try {
      // Check if data is available in local storage
      const cachedData = await getDataFromLocal('category');

      if (cachedData) {
      // Use cached data
      setData(cachedData);
      // setLoading(false); // Set loading to false as we are using cached data
      } else {
      // If no cached data, make an API call
      const response = await fetch('https://go4spare.com/api/web/categories', {
        method: 'GET',
      });

      if (response.ok) {
        const jsonData = await response.json();
        console.warn('dataaaa', jsonData.data);
        if (jsonData && jsonData.data) {
          setData(jsonData.data);

          // Save data to local storage
          saveResponseToLocal('category', jsonData.data);
        } else {
          console.warn('module data is undefined or null');
        }

        // setLoading(false); // Data has been successfully fetched, set loading to false
      } else {
        const bodyText = await response.text();
        console.error('Error fetching data. Status code:', response.status);
        console.log('Received the following instead of valid JSON:', bodyText);
       // If there's an error, set loading to false as well
      }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
     }
  };

  // // Function to save data to local storage
  const saveResponseToLocal = async (key, data) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving data to local storage:', error);
    }
  };

  // Function to get data from local storage
  const getDataFromLocal = async key => {
    try {
      const data = await AsyncStorage.getItem(key);
      return data != null ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error retrieving data from local storage:', error);
      return null;
    }
  };

  return (
    <View style={styles.mainContainer}>
      <CustomHeader name={'Category'} redirection={'Home'} />
      <View style={styles.headingMainContainer}>
        <View style={styles.wrapperContainer}>
          <View>
            <CustomInputText
              width={'100%'}
              bgColor={colors.white}
              text={'Search here....'}
              borderColor={colors.white}
              pColor={colors.grayLevel_2}
              textColor={colors.balckLevel_2}
              icon={
                <Image
                  style={{width: 30, height: 30, resizeMode: 'contain'}}
                  source={require('../../Assets/Images/search.png')}
                />
              }
            />
          </View>
        </View>
      </View>

      {/* Body section start */}
      <View>
        <FlatList  
        data={data}
        numColumns={row}
       
        contentContainerStyle={styles.list}
         renderItem={({item,index})=>{
          return(
            <View style={{borderRadius:20,backgroundColor:colors.white,marginTop:10,marginRight:10,alignItems:"center",justifyContent:"center",}}>
              <View style={styles.catLogo}>
                <Image source={{uri:item?.image}} style={styles.logoImage} />
              </View>
              <View style={styles.nameContainer}>
              <Text style={{alignSelf:'center'}} numberOfLines={2}>{item?.name}</Text>
              </View>
            </View>
          );
        }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 
  headingMainContainer: {
    backgroundColor: colors.defaultOrange,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  wrapperContainer: {
    marginLeft: 31,
    marginRight: 31,
    marginVertical: 20,
    gap: 10,
  },
  logoImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  catLogo: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    width: 108,
    borderRadius: 20,
  },
  nameContainer: {
    backgroundColor: colors.white,
    width: 108,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 10,
    borderRadius: 20,
  },
  list: {
    paddingTop: 20,
     paddingBottom: 400,
    justifyContent:"center",
    alignItems:"center"
  },
});
 

export default Category;
