import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import style from "../../../utils/css/comoncss/style";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import Header from "../../../comon/HeaderFooter/Header";
import Icon from 'react-native-vector-icons/FontAwesome';
import { StarRatingDisplay } from "react-native-star-rating-widget";
import Addas from "../../../comon/Ads/Ads";
import AstroCard from "../../../comon/Cards/AstroCards";

export default function Filter({navigation}) {
    const data = [
        { label: 'English', value: '1' },
        { label: 'Hindi', value: '2' },
    ];
    return (
        <>
            <Header top={<Text>Find &amp; Talk {'\n'}To Astrologers</Text>} />
            
            <ScrollView style={[style.bgwhite, {
                paddingVertical: responsiveWidth(5),
                height: '100%',
                paddingHorizontal: responsiveWidth(5)
            }]}>
                <Addas navigation={navigation} />


                <View>
                    <MultipleSelectList
                        data={data}
                        save="key"    
                        label="value" 
                        placeholder="Search"
                        dropdownTextStyles={{ color: 'black' }}
                        searchPlaceholder="Search Options"
                        boxStyles={{ borderColor: '#ea871e', height: responsiveHeight(7), alignItems: 'center', borderRadius: 30, paddingHorizontal: responsiveWidth(10) }}
                    />
                </View>

                <View style={{ marginVertical: responsiveHeight(2) }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={[style.comoncolor2, { fontWeight: 'bold' }]}>Sort By :</Text>
                        <View style={{ flexDirection: 'row', gap: responsiveWidth(3) }}>
                            <TouchableOpacity><Text style={[style.black, { fontWeight: 'bold', fontSize: responsiveFontSize(1.5) }]}>Price <Icon color='#78411b' size={12} name="long-arrow-up"></Icon><Icon color='#78411b' size={12} name="long-arrow-down"></Icon> </Text></TouchableOpacity>
                            <TouchableOpacity><Text style={[style.black, { fontWeight: 'bold', fontSize: responsiveFontSize(1.5) }]}>Name <Icon color='#78411b' size={12} name="long-arrow-up"></Icon><Icon color='#78411b' size={12} name="long-arrow-down"></Icon>  </Text></TouchableOpacity>
                            <TouchableOpacity><Text style={[style.black, { fontWeight: 'bold', fontSize: responsiveFontSize(1.5) }]}>Popular</Text></TouchableOpacity>
                            <TouchableOpacity><Text style={[style.black, { fontWeight: 'bold', fontSize: responsiveFontSize(1.5) }]}>Newest First</Text></TouchableOpacity>


                        </View>
                    </View>
                </View>


<View style={{marginVertical:responsiveHeight(2.5)}}>
<AstroCard navigation={navigation} />
</View>
            </ScrollView>
        </>
    )
}