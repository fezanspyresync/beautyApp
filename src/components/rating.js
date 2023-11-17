import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const Rating = ({rating, totalStart}) => {
  const display = () => {
    const stars = [];
    for (let i = 1; i <= totalStart; i++) {
      stars.push(
        <TouchableOpacity>
          <Icon
            key={i}
            name={i <= rating ? 'star' : 'staro'}
            size={25}
            color={i <= rating ? '#E8F703' : null}
          />
        </TouchableOpacity>,
      );
    }
    return stars;
  };
  return <View style={{flexDirection: 'row'}}>{display()}</View>;
};

export default Rating;

const styles = StyleSheet.create({});
