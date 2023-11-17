import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';

const CatagoryList = ({text, handleCatagory, deleteCatagory, index}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        setIsActive(!isActive);
        if (!isActive) {
          handleCatagory({name: text, select: !isActive});
        } else {
          deleteCatagory({name: text, select: !isActive});
        }
      }}
      style={{
        // padding: 7,
        paddingHorizontal: 15,
        paddingVertical: 4,

        backgroundColor: isActive ? '#ffffff' : 'transparent',
        borderColor: isActive ? '#ffffff' : '#B4A9D2',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        borderWidth: 1,
        marginVertical: 3,
      }}>
      <Text style={{color: isActive ? '#741777' : '#B4A9D2'}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CatagoryList;

const styles = StyleSheet.create({});
