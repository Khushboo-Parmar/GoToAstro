import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import style from "../../../utils/css/comoncss/style";
import Header from "../../../comon/HeaderFooter/Header";
import Addas from "../../../comon/Ads/Ads";
import CategryCard from "./CategoryCard";

export default function StoreCategory({navigation}) {
    return (
        <>
            <Header top={'Store'} />

            <ScrollView style={[style.bgwhite, {
                paddingVertical: responsiveWidth(5),
                height: '100%',
                paddingHorizontal: responsiveWidth(5)
            }]}>
                <Addas />
                <CategryCard navigation={navigation} image={'https://5.imimg.com/data5/QD/BD/MY-3456141/astrology-gemstones-500x500.png'} name={'Gemstone'} />

            </ScrollView>
        </>
    )
}