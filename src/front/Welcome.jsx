import { View, Text,Image } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import img from '../../assets/images/logo.webp';



export default function Welcome() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SplashScreen');
    }, 2000);
  }, [navigation]);
  
  return (
    <>
      <View style={{ backgroundColor: 'black', height: '100%', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
      <Image source={img} style={{ width: responsiveWidth(50), height: responsiveHeight(8.5) }} />
      </View>
    </>
  );
}