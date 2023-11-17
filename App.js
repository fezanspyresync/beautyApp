import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Kalender from './src/screens/kalender';
import TabNavigator from './src/navigator/tabNavigator';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Notifications"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="detail" component={Kalender} />
        <Stack.Screen name="Notifications" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
