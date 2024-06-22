import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import style from "../../../utils/css/comoncss/style";
import Header from "../../../comon/HeaderFooter/Header";
import Addas from "../../../comon/Ads/Ads";

export default function StoreCategory() {
    return (
        <>
            <Header top={'Store'} />

            <ScrollView style={[style.bgwhite, {
                paddingVertical: responsiveWidth(5),
                height: '100%',
                paddingHorizontal: responsiveWidth(5)
            }]}>
                <Addas />
                <View style={{marginBottom:responsiveHeight(2), paddingVertical:responsiveHeight(2), flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
                    <TouchableOpacity style={{
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
                        <Image style={{ width: responsiveWidth(25), height: responsiveHeight(13) }} source={{ uri: 'https://5.imimg.com/data5/QD/BD/MY-3456141/astrology-gemstones-500x500.png' }} />
                        <Text style={[style.black, { fontWeight: 'bold' }]}>Gemstone</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
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
                        <Image style={{ width: responsiveWidth(25), height: responsiveHeight(13) }} source={{ uri: 'https://5.imimg.com/data5/QD/BD/MY-3456141/astrology-gemstones-500x500.png' }} />
                        <Text style={[style.black, { fontWeight: 'bold' }]}>Gemstone</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
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
                        <Image style={{ width: responsiveWidth(25), height: responsiveHeight(13) }} source={{ uri: 'https://5.imimg.com/data5/QD/BD/MY-3456141/astrology-gemstones-500x500.png' }} />
                        <Text style={[style.black, { fontWeight: 'bold' }]}>Gemstone</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}