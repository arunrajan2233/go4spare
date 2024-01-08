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
import {useIsFocused, useNavigation} from '@react-navigation/native';
  
const TopSellingProducts = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

   const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getData();
    }
  }, [isFocused]);

  const getData = async () => {
    try {
      const response = await fetch(
        'https://go4spare.com/api/web/home/top-categories',
        {
          method: 'POST',
        },
      );

      if (response.ok) {
        const jsonData = await response.json();

        if (jsonData.data && jsonData.data.module_data) {
          setData(jsonData.data.module_data);
 
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
        <Text style={styles.headingText}>Top Selling Products</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Category')}>
          <AntDesign name="arrowright" size={30} color={colors.balckLevel_2} />
        </TouchableOpacity>
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
                <View style={{marginTop: 20}}>
                  <Image source={{uri: item?.image}} style={styles.itemImage} />
                </View>
                <View style={styles.catNameContainer}>
                  <Text numberOfLines={2} style={styles.itemName}>
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
  centeredView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    // margin: 10,
    marginTop: 20,
    // gap: 30,
    backgroundColor: colors.white,
    marginRight: 30,
    borderRadius: 20,
  },
  itemImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  itemName: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: colors.blackLevel_3,
    alignSelf: 'center',
    // padding: 10,
    paddingTop: 10,
  },
  categoryTouch: {
    // padding:10,
    alignItems: 'center',
    marginRight: 20,
    borderRadius: 20,
    gap: 10,
    backgroundColor: colors.white,
  },
  catNameContainer: {
    backgroundColor: colors.white,
    paddingBottom: 10,
    width: 168,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  flatlistStyle: {},
});

export default TopSellingProducts;
