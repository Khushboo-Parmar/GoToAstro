import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const Banner = ({image}) => {
    const navigation =useNavigation()
    return (
       
        
            <TouchableOpacity onPress={()=>navigation.navigate('BlogDetail')} style={{
                backgroundColor: 'red',
                borderRadius: 10,
                overflow: 'hidden',
                marginRight: 10,
                width: responsiveWidth(90),
                shadowColor: '#ea871e',
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.3,
                shadowRadius: 30,
                elevation: 3,
                height:200
            }}>

                <ImageBackground
                    source={{ uri:image }}
                    style={{
                        width: '100%',
                        height: '100%', // Fixed height or adjust as needed
                        borderRadius: 10,
                        overflow: 'hidden',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <View style={{ 
                        padding: 10 ,backgroundColor:'black',height:'100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent black background
                        borderRadius: 10,
                        padding: 10,
                        paddingTop:responsiveHeight(8)
                        }}>
                    <Text style={{ color: 'white', fontSize: responsiveFontSize(2), textAlign: 'center', fontWeight: 'bold', paddingHorizontal: 10 }}>
                        Chandrayaan 3 : चाँद पर भारत के कदम ...
                    </Text>
                    <Text style={{ marginTop: 10, fontSize: responsiveFontSize(1.4), color: 'white' }}>
                        ‘मैं अपनी मंजिल पर पहुँच गया और आप भी...’ यह संदेश चाँद से आया है और भेजने वाला है भारत के चन्द्रयान-3 मिशन का ‘विक्रम लैंडर’। 23 अगस्त, 2023 को चन्द्रमा की सतह पर पहुँचने के बाद उसने यह संदेश भेजा और उसके साथ ही चाँद की सतह की एक तस्वीर भी भेजी।
                    </Text>

                    <Text style={{ marginTop: 10, fontSize: responsiveFontSize(1.4), color: 'white',fontWeight: 'bold' }}>
                        By - <Text>gotoAstro</Text>
                    </Text>
                </View>
                </ImageBackground>
            </TouchableOpacity>
   
    );
};

export default Banner;
