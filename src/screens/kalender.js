import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Rating from '../components/rating';
import CatagoryList from '../components/catagoryList';
const cataGorydata = [
  'Haarschnitt',
  'farbe & Highlights',
  'Hautpflege',
  'dadtfas',
];
const imagesSliderData = [
  {
    photo: require('../../assets/images/p1.png'),
  },
  {
    photo: require('../../assets/images/p2.png'),
  },
  {
    photo: require('../../assets/images/p3.png'),
  },
];
const Kalender = () => {
  const navigation = useNavigation();
  const [selectedCatagory, setSelectedCatagory] = useState([]);
  const handleCatagory = item => {
    setSelectedCatagory(pres => [...pres, item]);
  };
  const deleteCatagory = data => {
    filterData = selectedCatagory.filter(item => item.name !== data.name);
    setSelectedCatagory(filterData);
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 0.4, backgroundColor: 'blue'}}>
        <ImageBackground
          style={{flex: 1}}
          source={require('../../assets/images/cover.png')}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{
                height: 25,
                width: 32,
                marginLeft: widthPercentageToDP(10),
                marginTop: heightPercentageToDP(8),
              }}
              source={require('../../assets/images/arrow.png')}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View
        style={{
          flex: 0.6,
          backgroundColor: '#F1EEFA',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          marginTop: -40,
          padding: 20,
        }}>
        <ScrollView>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontFamily: 'Actor-Regular',
              fontSize: 24,
            }}>
            Versa Salon
          </Text>
          <Text
            style={{
              textAlign: 'left',
              marginHorizontal: widthPercentageToDP(3),
              marginVertical: heightPercentageToDP(4),
              fontFamily: 'Actor-Regular',
              fontSize: 15,
            }}>
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
          </Text>
          <Text
            style={{
              //   textAlign: 'center',
              fontWeight: 'bold',
              fontFamily: 'Actor-Regular',
              fontSize: 18,
              marginHorizontal: widthPercentageToDP(3),
            }}>
            Managerin
          </Text>

          <View
            style={{
              flexDirection: 'row',
              //   justifyContent: 'space-between',
              backgroundColor: '#ffffff',
              marginHorizontal: widthPercentageToDP(3),
              padding: widthPercentageToDP(4),
              borderRadius: 10,
              marginVertical: heightPercentageToDP(2),
            }}>
            <View style={{height: 65, width: 65, overflow: 'hidden'}}>
              <Image
                source={require('../../assets/images/salonReview.png')}
                style={{width: '100%', height: '100%'}}
                resizeMode="cover"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // backgroundColor: 'green',
                flex: 1,
                marginLeft: 15,
              }}>
              <View style={{justifyContent: 'center'}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontFamily: 'Actor-Regular',
                    fontSize: 15,
                  }}>
                  Sara Bareilles
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Rating rating={3} totalStart={5} />
                </View>
              </View>
              <View style={{justifyContent: 'center'}}>
                <TouchableOpacity style={{height: 55, width: 55}}>
                  <Image
                    source={require('../../assets/images/heart.png')}
                    style={{height: '100%', width: '100%'}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              fontFamily: 'Actor-Regular',
              fontSize: 18,
              marginHorizontal: widthPercentageToDP(3),
            }}>
            Hauttyp
          </Text>
          <View style={{marginVertical: 10}}>
            <FlatList
              data={cataGorydata}
              keyExtractor={(item, index) => index.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <CatagoryList
                    key={item}
                    index={item}
                    text={item}
                    handleCatagory={handleCatagory}
                    deleteCatagory={deleteCatagory}
                  />
                );
              }}
            />
          </View>

          <FlatList
            data={imagesSliderData}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              console.log('adtfasdfastd', item.photo);
              return (
                <View
                  style={{
                    height: 200,
                    width: 200,
                    margin: 2,
                    borderRadius: 20,
                    overflow: 'hidden',
                  }}>
                  <Image
                    source={item.photo}
                    style={{height: '100%', width: '100%'}}
                  />
                </View>
              );
            }}
          />
          {/* <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              // backgroundColor: 'blue',
            }}>
            {cataGorydata.map((item, index) => {
              return (
                <CatagoryList
                  key={index}
                  index={index}
                  text={item}
                  handleCatagory={handleCatagory}
                  deleteCatagory={deleteCatagory}
                />
              );
            })}
          </View> */}
        </ScrollView>
      </View>
    </View>
  );
};

export default Kalender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
