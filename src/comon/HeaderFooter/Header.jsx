import { Image, Text, TouchableOpacity, View } from "react-native";
import style from "../../utils/css/comoncss/style";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
export default function Header({top}){
  const navigation = useNavigation()
    return(
        <>
         <View style={{ height: responsiveHeight(35),backgroundColor:'#fff4dd',paddingVertical: responsiveWidth(8), paddingHorizontal: responsiveWidth(5), position: 'relative' }}>
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <View>
      <TouchableOpacity onPress={()=>{navigation.openDrawer()}}> 
      <Icon color='#78411b' size={16} name="bars"></Icon>
      </TouchableOpacity>
    </View>
    <View style={{ alignItems: 'center', gap: responsiveHeight(1) }}>
            <Icon color='#78411b' size={16} name="user" />
            <TouchableOpacity style={{ position: 'relative' }}>
                <Icon color='#78411b' size={18} name="shopping-cart" />
                <View
                    style={[style.bgcomoncolor2,{
                      position: 'absolute',
                      right: -8,
                      top: -8,
                      borderRadius: 8,
                      width: 16,
                      height: 16,
                      justifyContent: 'center',
                      alignItems: 'center',
                  }]}
                >
                    <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>1</Text>
                </View>
            </TouchableOpacity>
        </View>
    
  </View>
  
  <View style={{width:'70%'}}>
  <Text style={[style.black, {marginTop:responsiveHeight(5), color:'#78411b', fontWeight: 'bold', fontSize: responsiveFontSize(3.5) }]}>{top}</Text>
  </View>
  
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
