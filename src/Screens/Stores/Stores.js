import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors} from '../../Assets/General/Colors/Colors';
import CustomHeader from '../../Assets/CustomSection/CustomHeader/CustomHeader';
import {useSelector} from 'react-redux';

const Stores = () => {
  // const [loading, setLoading] = useState(true);

  const vendors = useSelector(state => state.vendors);

  return (
    <View style={styles.container}>
      {/* heading section */}

      <CustomHeader name={'Store'} redirection={'Home'} />

      <View>
        <FlatList
          contentContainerStyle={styles.flatlistStyle}
          data={vendors}
          showsVerticalScrollIndicator={false}
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
                      source={require("../../Assets/Images/shop.jpg")}
                      style={styles.itemImage}
                    />
                  )}
                </View>
                <View style={styles.catNameContainer}>
                  <Text numberOfLines={1} style={styles.itemName}>
                    {item?.name}
                  </Text>
                  <Text>Vendor Code: {item?.vendor_code}</Text>
                  <Text>Address: {item?.address}</Text>
                  <Text>Rating: {item?.rating}</Text>
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
    marginRight: 32,
    marginLeft: 32,
  },
  itemImage: {
    width: 200,
    height: 100,
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
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: colors.white,
    // paddingLeft: 30,
    // paddingRight: 30,
    justifyContent: 'center',
  },
  catNameContainer: {
    backgroundColor: colors.white,
    paddingBottom: 10,
    // width: 168,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  flatlistStyle: {
    paddingBottom: 200,
  },
  imageContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
   },
});

export default Stores;
