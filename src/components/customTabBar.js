import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CustomTabBar = props => {
  const {item, onPress} = props;
  console.log('sgdyasgdy', props);
  const isFocused = props.accessibilityState.selected;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={{alignItems: 'center', padding: 2}}>
        <Image
          tintColor={isFocused ? item.activeColor : item.inActiveColor}
          source={item.icon}
          style={{height: 23, width: 23}}
          resizeMode="contain"
        />
        <Text
          style={[
            styles.textStyle,
            {color: isFocused ? item.activeColor : item.inActiveColor},
          ]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    marginVertical: 5,
    fontFamily: 'Actor-Regular',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
