import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function StackNavigation() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreen} /> */}
    </Stack.Navigator>
  );
}