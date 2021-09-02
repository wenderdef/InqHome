import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/login/login';

const Stack = createStackNavigator();

export default function App() {
  // return (
  //   <NavigationContainer>
  //     <Routes />
  //   </NavigationContainer>
  // );
  return (
    <NavigationContainer>
      <Stack.Navigator
      
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
    }}
      >
        <Stack.Screen 
          name="Login"
          component={Login}
        />
      <Stack.Screen 
          name="Routes"
          component={Routes}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
