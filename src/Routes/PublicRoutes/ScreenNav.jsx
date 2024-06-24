import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../../front/Splash';
import Welcome from '../../front/Welcome';
import Detail from '../../Pages/common/Detail';
import Filter from '../../Pages/Front/Filter/Filter';
import AstroDetail from '../../Pages/common/AstroDetail';
import StoreCategory from '../../Pages/Front/Category/StoreCategory';
import SubCategory from '../../Pages/Front/Category/StoreSubCategory';
import CoursesPage from '../../Pages/Front/Courses/CoursesPage';
import MagazineScreen from '../../Pages/Magzine/Magzine';
import Main from '../../Pages/Front/Puja/Main';
import StoreDetail from '../../Pages/common/Store/StoreDetail';
import ReportDetail from '../../Pages/common/AstroReport/AstroReport';
import Blog from '../../Pages/Blog/Blog';
import BlogDetail from '../../Pages/Blog/Detail/BlogDetail';
import Home from '../../Pages/Home/Home';



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
      <Stack.Screen options={{ headerShown: false }} name="SubCategory" component={SubCategory} />


      {/* Pages  */}
      <Stack.Screen options={{ headerShown: false }} name="Course" component={CoursesPage} />
      <Stack.Screen options={{ headerShown: false }} name="Magzine" component={MagazineScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Puja" component={Main} />
      <Stack.Screen options={{ headerShown: false }} name="Blog" component={Blog} />
      <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />




      {/* Detail  */}
      <Stack.Screen options={{ headerShown: false }} name="StoreDetail" component={StoreDetail} />
      <Stack.Screen options={{ headerShown: false }} name="ReportDetail" component={ReportDetail} />
      <Stack.Screen options={{ headerShown: false }} name="BlogDetail" component={BlogDetail} />





    
    </Stack.Navigator>
  );
}