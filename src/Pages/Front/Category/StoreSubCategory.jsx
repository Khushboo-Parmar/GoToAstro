import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { responsiveHeight, responsiveWidth,responsiveFontSize } from "react-native-responsive-dimensions";
import Header from "../../../comon/HeaderFooter/Header";
import style from "../../../utils/css/comoncss/style";
import Addas from "../../../comon/Ads/Ads";
import CategryCard from "./CategoryCard";

export default function SubCategory({navigation}){
    return(
        <>
        <Header top={<>
        <Text>Gemstone{'\n'}</Text>
        <Text style={{fontSize:responsiveFontSize(1.2)}}>gotoastro provides all types of gemstone. It is online showcase where you can choose gemstone as per your choice and the same piece will be delivered to you. All gemstone are natural, original, lab certified and energized. The wearing method is sent along with the gemstone.</Text>
        </>} />


        <ScrollView style={[style.bgwhite, {
                paddingVertical: responsiveWidth(5),
                height: '100%',
                paddingHorizontal: responsiveWidth(5)
            }]}>
                <Addas />

                <CategryCard navigation={navigation} nav={'Filter'} image={'https://d2vvtb6c5o2opz.cloudfront.net/estore_categories/1658904385.webp'} name={'Ruby (Manikya)'} />
         
            </ScrollView>
        </>
    )
}