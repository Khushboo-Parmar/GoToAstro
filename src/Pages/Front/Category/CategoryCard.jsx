import style from "../../../utils/css/comoncss/style";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { responsiveHeight, responsiveWidth,responsiveFontSize } from "react-native-responsive-dimensions";
export default function CategryCard({image,name,navigation,nav}){
    return(
        <>
               <View style={{marginBottom:responsiveHeight(2), paddingVertical:responsiveHeight(2), flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
                    <TouchableOpacity onPress={()=>navigation.navigate(nav ? nav : 'SubCategory')} style={{
                        backgroundColor: 'white',
                        shadowColor: '#ea871e',
                        width: '48%', // Ensure two items fit in a row
                        borderRadius: 20,
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.3,
                        shadowRadius: 30,
                        elevation: 3,
                        alignItems: 'center', paddingVertical: responsiveHeight(2)
                    }}>
                        <Image style={{ width: responsiveWidth(25), height: responsiveHeight(13) }} source={{ uri: image }} />
                        <Text style={[style.black, { fontWeight: 'bold' }]}>{name}</Text>
                    </TouchableOpacity>
                </View>
        </>
    )
}