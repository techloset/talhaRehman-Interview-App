import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Articles from '../screens/articles/Articles';
import Lightbulb from 'react-native-vector-icons/Foundation';
import Setting1 from "react-native-vector-icons/AntDesign"
import Dashboard from "react-native-vector-icons/MaterialCommunityIcons"
import PieChart from "react-native-vector-icons/AntDesign"



const Navigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={
      {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#rgba(255, 247, 239, 1)' },
        tabBarActiveTintColor: '#000000',
      }
    }>
      <Tab.Screen name="Home" component={Home} options={() => ({
        tabBarIcon: ({ focused}) => {
          const lightbulb = focused ? 'rgba(251, 124, 0, 1)' : 'rgba(251, 124, 0, 0.52)';
          return <Dashboard name="view-dashboard" size={30} color={lightbulb} />;
        },
      })} />
      <Tab.Screen name="Articles" component={Articles}  options={() => ({
        tabBarIcon: ({ focused}) => {
          const lightbulb = focused ? 'rgba(251, 124, 0, 1)' : 'rgba(251, 124, 0, 0.52)';
          return <Lightbulb name="lightbulb" size={30} color={lightbulb} />;
        },
      })} />
      <Tab.Screen name="Home1" component={Home} options={() => ({
        tabBarIcon: ({ focused}) => {
          const lightbulb = focused ? 'rgba(251, 124, 0, 1)' : 'rgba(251, 124, 0, 0.52)';
          return <PieChart name="piechart" size={30} color={lightbulb} />;
        },
      })}  />
      <Tab.Screen name="Articles1" component={Articles} options={() => ({
        tabBarIcon: ({ focused}) => {
          const lightbulb = focused ? 'rgba(251, 124, 0, 1)' : 'rgba(251, 124, 0, 0.52)';
          return <Setting1 name="setting" size={30} color={lightbulb} />;
        },
      })} />
    </Tab.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({})