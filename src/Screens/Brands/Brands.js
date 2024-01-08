import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {colors} from '../../Assets/General/Colors/Colors';
import CustomInputText from '../../Assets/CustomSection/CustomInputText/CustomInputText';
import CustomHeader from '../../Assets/CustomSection/CustomHeader/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Brands = () => {
  const row = 3;
  const navigation = useNavigation();
  const brands = useSelector(state => state.brands);
  return (
    <View style={styles.mainContainer}>
      <CustomHeader name={'Brands'} redirection={'Home'} />
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
                  style={{width: 25, height: 25, resizeMode: 'contain'}}
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
          data={brands}
          numColumns={row}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  borderRadius: 20,
                  backgroundColor: colors.white,
                  marginTop: 10,
                  marginRight: 13,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View style={styles.catLogo}>
                  <Image source={{uri: item?.logo}} style={styles.logoImage} />
                </View>
                <View style={styles.nameContainer}>
                  <Text style={{alignSelf: 'center'}} numberOfLines={2}>
                    {item?.name}
                  </Text>
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
    resizeMode: 'contain',
  },
  catLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    width: 108,
    borderRadius: 20,
    padding: 10,
  },
  nameContainer: {
    backgroundColor: colors.white,
    width: 108,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    borderRadius: 20,
  },
  list: {
    paddingTop: 20,
    paddingBottom: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Brands;
