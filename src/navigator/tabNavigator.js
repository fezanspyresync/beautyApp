import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Erkunden from '../screens/erkunden';
import Kalender from '../screens/kalender';
import CustomTabBar from '../components/customTabBar';
import Profil from '../screens/profil';
const Tab = createBottomTabNavigator();
const screens = [
  {
    name: 'erkunden',
    component: Erkunden,
    icon: require('../../assets/images/search.png'),
    activeColor: '#741777',
    inActiveColor: '#B4A9D2',
  },
  {
    name: 'profil',
    component: Profil,
    icon: require('../../assets/images/profile.png'),
    activeColor: '#741777',
    inActiveColor: '#B4A9D2',
  },
];

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,

        tabBarStyle: {
          height: 80,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          borderCurve: 123,
          position: 'absolute',
        },
      }}>
      {screens.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={{
              tabBarButton: props => {
                return <CustomTabBar {...props} item={item} />;
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabNavigator;
