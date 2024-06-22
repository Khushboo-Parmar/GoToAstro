import { Image, Text, TouchableOpacity, View } from "react-native";
import style from "../../utils/css/comoncss/style";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Header({top}){
    return(
        <>
         <View style={{ height: responsiveHeight(35),backgroundColor:'#fff4dd',paddingVertical: responsiveWidth(8), paddingHorizontal: responsiveWidth(5), position: 'relative' }}>
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <View>
      <TouchableOpacity>
      <Icon color='#78411b' size={16} name="bars"></Icon>
      </TouchableOpacity>
    </View>
    <View><Icon color='#78411b' size={16} name="user"></Icon></View>
  </View>
  
  <Text style={[style.black, {marginTop:responsiveHeight(5), color:'#78411b', fontWeight: 'bold', fontSize: responsiveFontSize(3.5) }]}>{top}</Text>
  <Image
    source={require('../../../assets/images/he.png')}
    style={{ position: 'absolute', bottom: -responsiveWidth(32), 
    right: -responsiveWidth(25), width: responsiveWidth(80),
     height: responsiveWidth(80),opacity:0.2,transform: [{ rotate: '-25deg' }] }} 
  />
</View>
        </>
    )
}