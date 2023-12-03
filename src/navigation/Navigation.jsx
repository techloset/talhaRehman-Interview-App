import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Articles from '../screens/articles/Articles';
import Lightbulb from 'react-native-vector-icons/Foundation';
import Setting1 from 'react-native-vector-icons/AntDesign';
import Dashboard from 'react-native-vector-icons/MaterialCommunityIcons';
import PieChart from 'react-native-vector-icons/AntDesign';
import Plus from '../assets/images/NavigationPlus.png';

const Navigation = () => {
  const Tab = createBottomTabNavigator();

  const CustomTabBarButton = ({ children, onPress }) => {
    return (
      <TouchableOpacity
        style={{
          top: -50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={{
          width: 70
        }}>{children}</View>
      </TouchableOpacity>
    );
  };

  const screenData = [
    { name: 'Home', component: Home, icon: 'view-dashboard', iconComponent: Dashboard },
    { name: 'Articles', component: Articles, icon: 'lightbulb', iconComponent: Lightbulb },
    { name: 'Articles2', component: Articles, icon: Plus, iconComponent: 'Image' },
    { name: 'Home1', component: Home, icon: 'piechart', iconComponent: PieChart },
    { name: 'Articles1', component: Articles, icon: 'setting', iconComponent: Setting1 },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#rgba(255, 247, 239, 1)', height: 70, shadowOffset: -10, shadowColor: 'rgba(92, 108, 156, 0.10)' },
        tabBarActiveTintColor: '#000000',
      }}
    >
      {screenData.map(({ name, component, icon, iconComponent }, index) => (
        <Tab.Screen
          key={index}
          name={name}
          component={component}
          options={() => ({
            tabBarIcon: ({ focused }) => {
              const lightbulb = focused ? 'rgba(251, 124, 0, 1)' : 'rgba(251, 124, 0, 0.52)';
              const size = 30;
              if (typeof iconComponent === 'string' && iconComponent === 'Image') {
                return (
                  <Image
                    source={icon}
                    resizeMode='contain'
                    style={{
                      top: -33,
                      backgroundColor: 'transparent',
                      borderRadius: 0
                    }}
                  />
                );
              }
              return React.createElement(iconComponent, { name: icon, size, color: lightbulb });
            },
          })}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Navigation;
