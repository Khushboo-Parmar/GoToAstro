
import style from "../../../utils/css/comoncss/style";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { responsiveHeight, responsiveWidth,responsiveFontSize } from "react-native-responsive-dimensions";
import Header from "../../../comon/HeaderFooter/Header";
import Addas from "../../../comon/Ads/Ads";
    
export default function PujaCard({image,name,navigation}){
    return(
        <>
        <Header top={'Puja'} />
        <ScrollView style={[style.bgwhite, {
                paddingVertical: responsiveWidth(5),
                height: '100%',
                paddingHorizontal: responsiveWidth(5)
            }]}>
        <Addas />
      <TouchableOpacity onPress={() => navigation.navigate('Filter',{name:'PUJA'})} style={{
        backgroundColor: 'white',
        shadowColor: '#ea871e',
        width: '48%',
        borderRadius: 4,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 30,
        elevation: 3,
        alignItems: 'center',
        paddingBottom: responsiveHeight(2),
        gap:responsiveHeight(1.2)
      }}>
        
        <Image style={{ width: '100%', height: responsiveHeight(13) }} source={{ uri: image }} />
        <Text style={{textAlign:'center', color: 'black', fontWeight: 'bold',fontSize:responsiveFontSize(1.4) }}>{name}</Text>
      </TouchableOpacity>

      </ScrollView>
        </>
    )
}