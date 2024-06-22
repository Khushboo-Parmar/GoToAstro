import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import style from '../../utils/css/comoncss/style';

export default function AstroReport() {
    return (
        <>
<View style={{ marginBottom: responsiveHeight(2), paddingVertical: responsiveHeight(2), flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
      <TouchableOpacity onPress={() => navigation.navigate(nav ? nav : 'SubCategory')} style={{
        backgroundColor: 'white',
        shadowColor: '#ea871e',
        width: '48%',
        borderRadius: 5,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 30,
        elevation: 3,
        alignItems: 'center',
        paddingBottom: responsiveHeight(2),
        gap:responsiveHeight(1.2)
      }}>
        
        <Image style={{ width: '100%', height: responsiveHeight(13) }} source={{ uri: 'https://d2vvtb6c5o2opz.cloudfront.net/reports/1686226943.webp' }} />
        <Text style={{textAlign:'center', color: 'black', fontWeight: 'bold',fontSize:responsiveFontSize(1.4) }}>Gemstone-Rudraksha Recommendation Report</Text>
        <Text style={{color: 'black', fontWeight: '300',fontSize:responsiveFontSize(1.3)}}>Free</Text>
        <View style={{ alignItems: 'center' ,width:'100%'}}>
                        <TouchableOpacity style={[style.bgcomoncolor,{ width: '80%', alignItems: 'center', paddingVertical: responsiveWidth(1.8), borderRadius: 5 }]}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: responsiveFontSize(1.3) }}>Generate Now</Text>
                        </TouchableOpacity>
                    </View>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => navigation.navigate(nav ? nav : 'SubCategory')}
        style={{
          backgroundColor: 'white',
          shadowColor: '#ea871e',
          width: '48%',
          borderRadius: 5,
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.3,
          shadowRadius: 30,
          elevation: 3,
          alignItems: 'center',
          paddingBottom: responsiveHeight(2),
          gap: responsiveHeight(1.2),
          position: 'relative', // Ensure relative positioning for the badge
        }}
      >
        {/* 50% OFF Badge */}
        <View
          style={{
            position: 'absolute',
            top: responsiveHeight(1),
            left: responsiveWidth(1),
            backgroundColor: '#ff6347',
            paddingVertical: responsiveHeight(0.5),
            paddingHorizontal: responsiveWidth(2),
            borderRadius: 5,
            zIndex:9999
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: responsiveFontSize(1.2) }}>50% OFF</Text>
        </View>

        <Image
          style={{ width: '100%', height: responsiveHeight(13) }}
          source={{ uri: 'https://d2vvtb6c5o2opz.cloudfront.net/reports/1686226943.webp' }}
        />
        <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: responsiveFontSize(1.4) }}>
          Gemstone-Rudraksha Recommendation Report
        </Text>
        <View style={{ flexDirection: 'row', justifyContent:'space-between',gap:10,alignItems:'center' }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: responsiveFontSize(1.5) }}>
                            <Icon color={'black'} size={10} name="inr" /> 10<Text style={{ color: 'black', fontWeight: '300', fontSize: responsiveFontSize(1.2) }}> /Min</Text>
                        </Text>
                        <Text style={{ color: 'black' }}>|</Text>
                        <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: responsiveFontSize(1.5), textDecorationLine: 'line-through' }}>
                            <Icon color={'grey'} size={10} name="inr" /> 15<Text style={{ color: 'black', fontWeight: '300', fontSize: responsiveFontSize(1.2) }}> /Min</Text>
                        </Text>
                    </View>
        <View style={{ alignItems: 'center', width: '100%' }}>
          <TouchableOpacity
            style={[
              style.bgcomoncolor,
              { width: '80%', alignItems: 'center', paddingVertical: responsiveWidth(1.8), borderRadius: 5 },
            ]}
          >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: responsiveFontSize(1.3) }}>Generate Now</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
        </>
    )
}