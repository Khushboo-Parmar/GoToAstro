import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import style from "../../../utils/css/comoncss/style";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Header from "../../../comon/HeaderFooter/Header";
import Addas from "../../../comon/Ads/Ads";
import AstroCard from "../../../comon/Cards/AstroCards";
import StoreCard from "../../../comon/Cards/StoreCards";
import AstroReport from "../../../comon/Cards/AstroReportCard";
import Search from "../../../comon/Filter/SearchFilter";
import Main from "../Puja/Main";
import PujaCard from "../../../comon/Cards/PujaCard";

export default function Filter(props,{navigation}) {
    // props?.route?.params?.name
    return (
        <>
            <Header top={<Text>Find &amp; Talk {'\n'}To Astrologers</Text>} />
            
            <ScrollView style={[style.bgwhite, {
                paddingVertical: responsiveWidth(5),
                height: '100%',
                paddingHorizontal: responsiveWidth(5)
            }]}>
                <Addas navigation={navigation} />

<Search />


<View style={{marginVertical:responsiveHeight(2.5)}}>


{props?.route?.params?.name === 'TALK TO ASTROLOGER'
?<AstroCard navigation={navigation} />:props?.route?.params?.name === 'ASTRO REPORTS'?<AstroReport />:props?.route?.params?.name === 'PUJA' ? <PujaCard navigation={navigation} />:<StoreCard navigation={navigation} /> }



</View>
            </ScrollView>
        </>
    )
}