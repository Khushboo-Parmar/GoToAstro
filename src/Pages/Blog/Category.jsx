import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";

export default function Category(){
    return(
        <>
        <ScrollView horizontal>
          <View style={{flexDirection:'row',gap:responsiveHeight(3)}}>
          <TouchableOpacity><Text style={{fontSize:responsiveFontSize(1.5),color:'black',fontWeight:'bold'}}>Gemstone (राशि रत्न)</Text></TouchableOpacity>
          <TouchableOpacity><Text  style={{fontSize:responsiveFontSize(1.5),color:'black',fontWeight:'bold'}}>Gemstone (राशि रत्न)</Text></TouchableOpacity>
          <TouchableOpacity><Text  style={{fontSize:responsiveFontSize(1.5),color:'black',fontWeight:'bold'}}>Gemstone (राशि रत्न)</Text></TouchableOpacity>
          <TouchableOpacity><Text  style={{fontSize:responsiveFontSize(1.5),color:'black',fontWeight:'bold'}}>Gemstone (राशि रत्न)</Text></TouchableOpacity>
          <TouchableOpacity><Text  style={{fontSize:responsiveFontSize(1.5),color:'black',fontWeight:'bold'}}>Gemstone (राशि रत्न)</Text></TouchableOpacity>
          </View>
        </ScrollView>
        </>
    )
}