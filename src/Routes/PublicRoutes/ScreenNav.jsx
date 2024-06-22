import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../../front/Splash';
import Welcome from '../../front/Welcome';
import Detail from '../../Pages/common/Detail';
import Filter from '../../Pages/Front/Filter/Filter';
import AstroDetail from '../../Pages/common/AstroDetail';
import StoreCategory from '../../Pages/Front/Category/StoreCategory';



const Stack = createStackNavigator();
export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome} />
      <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Detail" component={Detail} />
      <Stack.Screen options={{ headerShown: false }} name="Filter" component={Filter} />
      <Stack.Screen options={{ headerShown: false }} name="AstroDetail" component={AstroDetail} />
      <Stack.Screen options={{ headerShown: false }} name="Store" component={StoreCategory} />

    
    </Stack.Navigator>
  );
}