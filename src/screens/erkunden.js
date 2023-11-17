import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CatagoryList from '../components/catagoryList';
import {FlashList} from '@shopify/flash-list';
import {useNavigation} from '@react-navigation/native';

const cataGorydata = [
  'Haarschnitt',
  'farbe & Highlights',
  'Hautpflege',
  'dadtfas',
  'asydafstdf',
  'asdfasdf',
  'asduasdg',
];
firstFlastList = [
  {photo: require('../../assets/images/p1.png')},
  {photo: require('../../assets/images/p2.png')},
  {photo: require('../../assets/images/p3.png')},
];
const Erkunden = () => {
  const [selectedCatagory, setSelectedCatagory] = useState([]);
  const [initialCatagory, setInitialCatagory] = useState(3);
  const navigation = useNavigation();
  const handleCatagory = item => {
    setSelectedCatagory(pres => [...pres, item]);
  };
  const deleteCatagory = data => {
    filterData = selectedCatagory.filter(item => item.name !== data.name);
    setSelectedCatagory(filterData);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <ImageBackground
          style={styles.container}
          source={require('../../assets/images/bg.png')}>
          <View
            style={{
              // flex: 1,
              paddingVertical: hp('8'),
              paddingHorizontal: wp('10'),
            }}>
            <TouchableOpacity style={{width: 30, height: 25}}>
              <Image
                style={{height: '100%', width: '100%'}}
                resizeMode="cover"
                source={require('../../assets/images/menu.png')}
              />
            </TouchableOpacity>
            <Text style={styles.mainHeading}>Hallo Angelina</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                borderRadius: 10,
                overflow: 'hidden',
              }}>
              <TextInput
                placeholder="Suche"
                placeholderTextColor={'#CEC7E2'}
                style={{
                  color: '#741777',
                  backgroundColor: '#ffffff',
                  padding: 13,
                  fontFamily: 'Actor-Regular',
                  fontWeight: 'bold',
                  fontSize: 18,
                  flex: 1,
                }}
              />
              <TouchableOpacity
                style={{
                  padding: 5,
                  height: 35,
                  width: 35,
                  marginRight: 5,
                }}>
                <Image
                  tintColor={'#CEC7E2'}
                  source={require('../../assets/images/search.png')}
                  style={{height: '100%', width: '100%'}}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontFamily: 'Actor-Regular',
                fontWeight: 'bold',
                fontSize: 18,
                paddingVertical: hp(5),
                color: '#564A57',
              }}>
              Nach Kategorien durchsuchen
            </Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                // backgroundColor: 'blue',
              }}>
              {cataGorydata.map((item, index) => {
                return index <= initialCatagory ? (
                  <CatagoryList
                    key={index}
                    index={index}
                    text={item}
                    handleCatagory={handleCatagory}
                    deleteCatagory={deleteCatagory}
                  />
                ) : null;
              })}
              {cataGorydata.length - 1 > initialCatagory && (
                <TouchableOpacity
                  onPress={() => setInitialCatagory(cataGorydata.length)}
                  style={{
                    paddingHorizontal: 15,
                    paddingVertical: 4,
                    backgroundColor: 'transparent',
                    borderColor: '#B4A9D2',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 5,
                    borderWidth: 1,
                    marginVertical: 3,
                  }}>
                  <Text style={{color: '#B4A9D2'}}>
                    {`+ ${cataGorydata.length - 1 - initialCatagory}`}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            {selectedCatagory.map((data, index) => {
              return <Text key={index}>{data.name}</Text>;
            })}
          </View>
          <View style={{marginLeft: wp(13), marginTop: -50}}>
            <Text
              style={{
                fontFamily: 'Actor-Regular',
                fontWeight: 'bold',
                fontSize: 18,
                marginVertical: hp(1),
              }}>
              Beliebt
            </Text>
            <FlatList
              data={firstFlastList}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                console.log('asdgasydf', item.photo);
                return (
                  <View
                    style={{
                      height: 150,
                      width: 150,
                      overflow: 'hidden',
                      marginRight: 20,
                    }}>
                    <Image
                      source={item.photo}
                      style={{
                        height: '100%',
                        width: '100%',
                      }}
                      resizeMode="cover"
                    />
                  </View>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={{marginLeft: wp(13)}}>
            <Text
              style={{
                fontFamily: 'Actor-Regular',
                fontWeight: 'bold',
                fontSize: 18,
                marginVertical: hp(1),
              }}>
              Salons
            </Text>
            <FlatList
              data={firstFlastList}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                console.log('asdgasydf', item.photo);
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('detail')}
                    style={{
                      height: 150,
                      width: 150,
                      overflow: 'hidden',
                      marginRight: 20,
                    }}>
                    <Image
                      source={item.photo}
                      style={{
                        height: '100%',
                        width: '100%',
                      }}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Erkunden;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: hp('5'),
  },
  mainHeading: {
    marginVertical: hp('3'),
    fontFamily: 'Actor-Regular',
    fontWeight: 'bold',
    fontSize: 32,
    color: '#741777',
  },
});
