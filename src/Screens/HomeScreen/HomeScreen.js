import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import CustomInputText from '../../Assets/CustomSection/CustomInputText/CustomInputText';
import {colors} from '../../Assets/General/Colors/Colors';
import TopSellingProducts from './TopSellingProducts/TopSellingProducts';
import TopBrands from './TopBrands/TopBrands';
import SpareShops from './SpareShops/SpareShops';

const HomeScreen = () => {
  // const [data, setData] = useState([]);

  return (
    <View style={styles.mainContainer}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.defaultOrange}
      />
      <View style={styles.headingMainContainer}>
        <View style={styles.wrapperContainer}>
          <View style={styles.heartContainer}>
            <Image
              style={styles.heartImage}
              source={require('../../Assets/Images/heart.png')}
            />
          </View>
          <View>
            <CustomInputText
              width={'100%'}
              bgColor={colors.white}
              text={'Search here....'}
              borderColor={colors.white}
              pColor={colors.balckLevel_1}
              textColor={colors.balckLevel_2}
              cursorColor={colors.defaultOrange}
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

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        style={styles.bodyMainContainer}>
        <View style={styles.bodyWrapper}>
          {/* Heading section */}

          <View style={styles.headingTextContainer}>
            <Text style={styles.exploreText}>EXPLORE</Text>
            <Text style={styles.spareText}>SPARE PARTS</Text>

            <Text style={styles.forText}>
              FOR YOUR <Text style={styles.carText}>CARS</Text>
            </Text>
          </View>

          {/* heading button section */}

          <TouchableOpacity style={styles.btnStyle}>
            <Text style={styles.btnText}>Select Your Cars</Text>
          </TouchableOpacity>

          {/* Top selling products section */}

          <View style={styles.topSellingContainer}>
            <TopSellingProducts />
          </View>

          {/* Top Brands  */}

          <View style={styles.topBrands}>
            <TopBrands />
          </View>

          {/* spare shop section */}
          <View style={styles.topBrands}>
            <SpareShops />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingMainContainer: {
    backgroundColor: colors.defaultOrange,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  heartImage: {
    width: 30,
    height: 27,
  },
  heartContainer: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  wrapperContainer: {
    marginLeft: 31,
    marginRight: 31,
    marginVertical: 20,
    gap: 10,
  },
  mainContainer: {},
  bodyMainContainer: {},
  bodyWrapper: {
    marginLeft: 32,
    marginTop: 10,
    flex: 1,
  },
  exploreText: {
    fontSize: 23,
    fontFamily: 'OpenSans-Regular',
    color: colors.balckLevel_1,
  },
  spareText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 35,
    color: colors.balckLevel_1,
    marginTop: 10,
    marginBottom: 10,
  },
  forText: {
    fontSize: 22,
    fontFamily: 'OpenSans-Regular',
    color: colors.balckLevel_1,
  },
  carText: {
    fontSize: 22,
    fontFamily: 'OpenSans-Bold',
    color: colors.balckLevel_1,
  },
  btnStyle: {
    backgroundColor: colors.yellowLevel_2,
    width: '60%',
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 22,
    color: colors.balckLevel_1,
  },
  topSellingContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  topBrands: {
    marginTop: 20,
    marginBottom: 30,
  },
  scrollContainer: {
    paddingBottom: 150,
  },
  headingTextContainer: {
    marginVertical: 10,
  },
});

export default HomeScreen;
