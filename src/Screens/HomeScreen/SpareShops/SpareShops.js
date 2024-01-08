import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../../Assets/General/Colors/Colors';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {vendors} from '../../../Redux/Action/Action';

const SpareShops = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getData();
    }
  }, [isFocused]);

  const getData = async () => {
    try {
      const response = await fetch(
        'https://go4spare.com/api/web/home/top-sellers',
        {
          method: 'POST',
        },
      );

      if (response.ok) {
        const jsonData = await response.json();

        if (jsonData.data && jsonData.data.sellers) {
          setData(jsonData.data.sellers);
 
          dispatch(
            vendors({
              vendors: jsonData.data.sellers,
            }),
          );
        } else {
          console.warn('module data is undefined or null');
        }
      } else {
        const bodyText = await response.text();
        console.error('Error fetching data. Status code:', response.status);
        console.log('Received the following instead of valid JSON:', bodyText);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* heading section */}
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Spare Shops Near You</Text>
        <AntDesign name="arrowright" size={30} color={colors.balckLevel_2} />
      </View>

      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatlistStyle}
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item, index}) => (
            <View style={styles.itemContainer}>
              {/* Render your item content here */}

              <TouchableOpacity style={styles.categoryTouch}>
                <View style={styles.imageContainer}>
                  {item?.image ? (
                    <Image
                      source={{uri: item?.image}}
                      style={styles.itemImage}
                    />
                  ) : (
                    <Image
                      source={require("../../../Assets/Images/shop.jpg")}
                      style={styles.itemImage}
                    />
                  )}
                </View>
                <View style={styles.catNameContainer}>
                  <Text numberOfLines={1} style={styles.itemName}>
                    {item?.name}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
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
  },
  headingText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
    color: colors.balckLevel_1,
  },

  itemContainer: {
    // margin: 10,
    marginTop: 20,
    gap: 30,
  },
  itemImage: {
    width: 250,
    height: 140,
    resizeMode: 'contain',
  },
  itemName: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: colors.blackLevel_3,
    alignSelf: 'center',
    padding: 10,
  },
  categoryTouch: {
    // padding:10,
    alignItems: 'center',
    marginRight: 20,
    borderRadius: 20,
    backgroundColor: colors.white,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'center',
  },
  catNameContainer: {
    backgroundColor: colors.white,
    paddingBottom: 10,
    width: 168,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  flatlistStyle: {},
  imageContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
   },
});

export default SpareShops;
