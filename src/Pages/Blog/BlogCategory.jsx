import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import style from '../../utils/css/comoncss/style';
import { useNavigation } from '@react-navigation/native';

export default function BlogCategory({text,image}) {
    const navigation = useNavigation()
    return (
        <ScrollView style={{paddingVertical:responsiveHeight(1)}}>
            <View
                style={{
                    marginBottom: responsiveHeight(3),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <View style={{ borderBottomWidth: 3, paddingVertical: 10, borderBottomColor: '#ea871e' }}>
                    <Text style={{ fontWeight: 'bold', color: 'black' }}>{text}</Text>
                </View>
                <TouchableOpacity>
                    <Text style={[style.comoncolor2, { fontWeight: 'bold' }]}>See All</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={()=>navigation.navigate('BlogDetail')}
                style={{
                    marginHorizontal: responsiveWidth(2),
                    marginBottom: responsiveHeight(2),
                    backgroundColor: 'white',
                    shadowColor: '#ea871e',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 5,
                    elevation: 1.6,
                    paddingBottom: responsiveHeight(3),
                }}
            >
                <View>
                    <Image
                        style={{ width: '100%', height: responsiveHeight(25) }}
                        source={{
                            uri: image,
                        }}
                    />
                </View>

                <View style={{ paddingHorizontal: responsiveWidth(4), paddingTop: responsiveHeight(2),gap:responsiveHeight(2) }}>
                    <Text
                        style={{
                            fontWeight: '500',
                            color: 'black',
                            fontSize: responsiveFontSize(1.7),
                        }}
                    >
                        Top 5 Zodiac Signs Who get married with Famous Personalities
                    </Text>
                    <View style={{alignItems:'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: responsiveHeight(1) }}>
                        <Text style={[style.comoncolor2,{ fontSize: responsiveFontSize(1.4), fontWeight: 'bold' }]}>By - <Text>gotoAstro</Text></Text>
                        <Text style={{fontWeight:'bold',color:'grey',fontSize:responsiveFontSize(1.5)}}>15 Jul 2023</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <View style={{opacity:0.3, borderBottomWidth: 1,marginTop:20, borderBottomColor: '#ea871e' ,width:'100%'}}></View>
        </ScrollView>
    );
}
