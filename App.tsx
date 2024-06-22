import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/Routes/PublicRoutes/ScreenNav';
import DrawerNavigatorPage from './src/Routes/DrawerNavigation/DrawerNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigatorPage />
    </NavigationContainer>
  );
};

export default App;