import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const Gift = ({bg, text, icon}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.imageBackground}
        source={bg}>
        <View
          style={{
            height: 38,
            width: 38,
            marginTop: 40,
            //backgroundColor: 'blue',
            padding: 2,
          }}>
          <Image source={icon} style={{height: '100%', width: '100%'}} />
        </View>
        <Text
          style={{
            marginTop: heightPercentageToDP(3),
            fontWeight: 'bold',
            fontFamily: 'Actor-Regular',
            fontSize: 16,
            color: '#ffffff',
          }}>
          {text}
        </Text>
      </ImageBackground>
    </View>
  );
};

export default Gift;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 5,
    height: 150,
    width: 120,
    borderRadius: 20,
    // overflow: 'hidden', // Ensure overflow is hidden
    shadowColor: '#FFB987', // Shadow color
    // shadowColor: '#000',
    shadowOffset: {width: 0, height: 11}, // Shadow offset (x, y)
    shadowOpacity: 0.55, // Shadow opacity
    shadowRadius: 14.78, // Shadow radius
    elevation: 22, // For Android shadow
  },
  imageBackground: {
    flex: 1, // Take up all available space
    borderRadius: 20,
    overflow: 'hidden', // Ensure overflow is hidden
    alignItems: 'center',
  },
});
