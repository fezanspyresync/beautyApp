import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Gift from '../components/gift';
import DropDownPicker from 'react-native-dropdown-picker';
import Entypo from 'react-native-vector-icons/Entypo';

const Profil = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Item 1',
      val: 'item-1',
    },
    {id: 2, title: 'Item 2', val: 'item-2'},
  ]);
  const [fopen, setfOpen] = useState(false);
  const [fvalue, setfValue] = useState(null);
  const [fitems, setfItems] = useState([
    {
      id: 1,
      title: 'Item 1',
      val: 'item-1',
    },
    {id: 2, title: 'Item 2', val: 'item-2'},
  ]);

  const CustomPlaceholderComponent = ({label, path}) => {
    console.log('custom placehoder', label, path);
    return (
      <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
        <Image source={path} style={{height: 25, width: 25}} />
        <Text
          style={{
            marginLeft: 10,
            fontWeight: 'bold',
            fontFamily: 'Actor-Regular',
            fontSize: 18,
            color: '#854E88',
          }}>
          {label}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={require('../../assets/images/profilCover.png')}
        style={{flex: 1}}>
        <ScrollView>
          <TouchableOpacity
            style={{
              // backgroundColor: 'blue',
              marginVertical: heightPercentageToDP(5),
              marginLeft: widthPercentageToDP(10),
              height: 30,
              width: 30,
            }}>
            <Icon name={'setting'} size={30} />
          </TouchableOpacity>
          <View
            style={{
              // backgroundColor: 'blue',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/images/avatar.png')}
              style={{height: 150, width: 150}}
            />
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              fontFamily: 'Actor-Regular',
              fontSize: 24,
              textAlign: 'center',
              marginVertical: heightPercentageToDP(1),
            }}>
            Angelina Stephens
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              marginHorizontal: widthPercentageToDP(5),
              padding: 10,
              borderRadius: 20,
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: 100,
                width: 100,
                padding: 5,
                //   backgroundColor: 'blue',
                //   overflow: 'hidden',
              }}>
              <Image
                resizeMode="contain"
                source={require('../../assets/images/crown.png')}
                style={{height: '100%', width: '100%'}}
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                marginLeft: widthPercentageToDP(4),
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontFamily: 'Actor-Regular',
                  fontSize: 18,
                  color: '#ECAF56',
                }}>
                Premiummitglied
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontFamily: 'Actor-Regular',
                  fontSize: 18,
                  color: '#B4A9D2',
                  marginTop: 15,
                }}>
                Beitritt seit August 2020
              </Text>
            </View>
          </View>
          <View
            style={{
              // marginHorizontal: widthPercentageToDP(2),
              flexDirection: 'row',
              marginVertical: heightPercentageToDP(2),
              justifyContent: 'space-evenly',
            }}>
            <Gift
              bg={require('../../assets/images/giftbg.png')}
              text="Geschenk"
              icon={require('../../assets/images/gift.png')}
            />
            <Gift
              bg={require('../../assets/images/heartbg.png')}
              text="Liebling"
              icon={require('../../assets/images/whiteheart.png')}
            />
            <Gift
              bg={require('../../assets/images/walletbg.png')}
              text="Zahlung"
              icon={require('../../assets/images/wallet.png')}
            />
          </View>
          <View style={{paddingBottom: heightPercentageToDP(10)}}>
            <View
              style={{
                marginHorizontal: 10,
              }}>
              <DropDownPicker
                placeholder={
                  <CustomPlaceholderComponent
                    label={'Sicherheit'}
                    path={require('../../assets/images/fdrop.png')}
                  />
                }
                ArrowDownIconComponent={({style}) => {
                  console.log('asdasftras', style);
                  return (
                    <Entypo name="chevron-right" size={25} color="#854E88" />
                  );
                }}
                schema={{
                  label: 'title',
                  value: 'val',
                  icon: 'icon',
                }}
                style={{
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  paddingTop: 30,
                  paddingBottom: 20,
                  borderColor: 'white',
                }}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
              />
            </View>
            <View
              style={{
                marginHorizontal: 10,
                borderColor: '#E6E1F4',
                borderTopWidth: 1,
                marginBottom: fopen ? 85 : 0,
              }}>
              <DropDownPicker
                dropDownDirection="down"
                ArrowDownIconComponent={({style}) => {
                  console.log('asdasftras', style);
                  return (
                    <Entypo name="chevron-right" size={25} color="#854E88" />
                  );
                }}
                placeholder={
                  <CustomPlaceholderComponent
                    label={'Privatsphare'}
                    path={require('../../assets/images/sdrop.png')}
                  />
                }
                schema={{
                  label: 'title',
                  value: 'val',
                }}
                style={{
                  paddingVertical: 20,
                  borderRadius: 0,
                  borderColor: 'white',
                }}
                open={fopen}
                value={fvalue}
                items={fitems}
                setOpen={setfOpen}
                setValue={setfValue}
                setItems={setfItems}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: heightPercentageToDP(8),
                backgroundColor: '#ffffff',
                marginHorizontal: 10,
                borderColor: '#E6E1F4',
                borderTopWidth: 1,
                paddingHorizontal: 12,
                borderBottomEndRadius: 10,
                borderBottomLeftRadius: 10,
              }}>
              <Image
                source={require('../../assets/images/signal.png')}
                style={{height: 25, width: 25}}
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  fontFamily: 'Actor-Regular',
                  fontSize: 18,
                  color: '#854E88',
                  marginLeft: 9,
                }}>
                Geschichte
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Profil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
