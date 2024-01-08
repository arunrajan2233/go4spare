import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors} from '../../../Assets/General/Colors/Colors';
import {useDispatch} from 'react-redux';
import {brands} from '../../../Redux/Action/Action';

const TopBrands = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const isFocused = useIsFocused();
  const number = 3;
  const navigation = useNavigation();

  useEffect(() => {
    const getData = async () => {
      try {
        // const cachedData = await getDataFromLocal('TopBrands');

        // if (cachedData) {
        //   setData(cachedData);
        // } else {
          const response = await fetch('https://go4spare.com/api/web/brands');

          if (response.ok) {
            const jsonData = await response.json();

            if (jsonData.data && jsonData.data) {
              setData(jsonData.data);
               dispatch(
                brands({
                  brands: jsonData.data,
                }),
              );
              // saveResponseToLocal('TopBrands', jsonData.data);
            } else {
              console.warn('module data is undefined or null');
            }
          } else {
            const bodyText = await response.text();
            console.error('Error fetching data. Status code:', response.status);
            console.log(
              'Received the following instead of valid JSON:',
              bodyText,
            );
          }
        // }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (isFocused) {
      getData();
    }
  }, [isFocused]);

  const limitedProducts = data.slice(0, 9);

  // const saveResponseToLocal = async (key, data) => {
  //   try {
  //     await AsyncStorage.setItem(key, JSON.stringify(data));
  //   } catch (error) {
  //     console.error('Error saving data to local storage:', error);
  //   }
  // };

  // const getDataFromLocal = async key => {
  //   try {
  //     const data = await AsyncStorage.getItem(key);
  //     return data != null ? JSON.parse(data) : null;
  //   } catch (error) {
  //     console.error('Error retrieving data from local storage:', error);
  //     return null;
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Top Brands</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Brands')}>
          <AntDesign name="arrowright" size={30} color={colors.balckLevel_2} />
        </TouchableOpacity>
      </View>

      {limitedProducts.length > 0 && (
        <View>
          <FlatList
            horizontal={false}
            numColumns={number}
            contentContainerStyle={styles.list}
            data={limitedProducts}
            renderItem={({item, index}) => (
              <TouchableOpacity style={styles.brandContainer}>
                <View style={styles.imageContainer}>
                  <Image style={styles.logoImage} source={{uri: item?.logo}} />
                </View>
                <View style={{}}>
                  <Text numberOfLines={2} style={styles.brandText}>
                    {item?.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 20,
    marginBottom: 20,
  },
  headingText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
    color: colors.balckLevel_1,
  },
  logoImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  list: {
    // flexDirection: 'row',
    // marginBottom: 100,
  },
  brandContainer: {
    marginRight: 20,
    marginBottom: 20,
    backgroundColor: colors.white,
    width: 100,
    borderRadius: 20,
    padding: 5,
  },
  brandText: {
    alignSelf: 'center',
    padding: 10,
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: colors.blackLevel_3,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});

export default TopBrands;
