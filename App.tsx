import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home/Home';
import OnBoarding from './src/screens/onBoarding/OnBoarding';
import Analytics from './src/screens/analytics/Analytics';
import Articles from './src/screens/articles/Articles';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Analytics" component={Analytics} />
        <Stack.Screen name="Articles" component={Articles} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}  