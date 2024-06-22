import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default function StoreCard({ navigation }) {
    const [like,setlike] =useState(false)
  return (
<View style={{ marginBottom: responsiveHeight(2), paddingVertical: responsiveHeight(2), flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
      <TouchableOpacity onPress={() => navigation.navigate(nav ? nav : 'SubCategory')} style={{
        backgroundColor: 'white',
        shadowColor: '#ea871e',
        width: '48%',
        borderRadius: 20,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 30,
        elevation: 3,
        alignItems: 'center',
        paddingVertical: responsiveHeight(2),
        position: 'relative' ,
        gap:responsiveHeight(1.2)
      }}>


        <View style={{zIndex:999, position: 'absolute', top: responsiveHeight(2), right: responsiveWidth(2), gap: 10 }}>
        <TouchableOpacity onPress={()=>setlike(!like)} style={{
            backgroundColor: like ? 'white':'#ea871e',
            padding: responsiveWidth(2),
            borderRadius: 50,
            justifyContent:'center',height:responsiveHeight(3.8)
          }}>
            <Icon name="heart" size={responsiveFontSize(1.5)} color={like ? 'red':'white'} />
          </TouchableOpacity>
          <TouchableOpacity style={{
            backgroundColor: '#ea871e',
            padding: responsiveWidth(2),
            borderRadius: 50,
            justifyContent:'center',height:responsiveHeight(3.8)
          }}>
            <Icon name="video-camera" size={responsiveFontSize(1.5)} color="white" />
          </TouchableOpacity>
        </View>
        
        <Image style={{ width: responsiveWidth(25), height: responsiveHeight(13) }} source={{ uri: 'https://d2vvtb6c5o2opz.cloudfront.net/estore_categories/1658904385.webp' }} />
        <Text style={{ color: 'black', fontWeight: 'bold',fontSize:responsiveFontSize(1.4) }}>Ruby  (Manikya)-3.10 Carat</Text>
        <Text style={{color: 'black', fontWeight: '300',fontSize:responsiveFontSize(1.3)}}>Bagkok - origin</Text>
        <Text style={{ color: 'black', fontWeight: 'bold' }}> <Icon name="inr" size={responsiveFontSize(1.5)} color="black" /> 6200.00</Text>
      </TouchableOpacity>
    </View>
  );
}
