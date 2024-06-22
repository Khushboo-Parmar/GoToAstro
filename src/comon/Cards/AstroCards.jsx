import { useNavigation } from "@react-navigation/native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Icon from 'react-native-vector-icons/FontAwesome';
export default function AstroCard() {
const navigation = useNavigation()

    return (
        <>
            <View style={{ flexWrap: 'wrap', paddingVertical: responsiveHeight(1), flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate('AstroDetail')} style={{
                    gap: responsiveWidth(4),
                    paddingVertical: responsiveHeight(3),
                    paddingHorizontal: responsiveWidth(3),
                    backgroundColor: 'white',
                    shadowColor: '#ea871e',
                    width: '48%', // Ensure two items fit in a row
                    borderRadius: 8,
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.3,
                    shadowRadius: 30,
                    elevation: 3,
                    margin: '1%',
                    position: 'relative' // Ensure relative positioning for the badge
                }}>
                    {/* Offer Badge */}
                    <View style={{
                        position: 'absolute',
                        top: -responsiveHeight(1),
                        right: -responsiveWidth(1),
                        backgroundColor: '#ff6347',
                        paddingVertical: responsiveHeight(0.5),
                        paddingHorizontal: responsiveWidth(2),
                        borderRadius: 5
                    }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: responsiveFontSize(1.2) }}>66% OFF</Text>
                    </View>

                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Image style={{ borderRadius: 14 }} width={responsiveWidth(12)} height={responsiveHeight(6)} source={{ uri: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg' }} />
                        <View style={{ gap: 5 }}>
                            <Text style={{ color: '#ea871e', fontWeight: 'bold', textAlign: 'right' }}>
                                <Icon color={'#ea871e'} size={12} name="star" /> 4.9
                            </Text>
                            <View style={{ backgroundColor: '#ea871e', paddingVertical: responsiveHeight(0.3), paddingHorizontal: responsiveWidth(2), width: '100%', alignItems: 'center', borderRadius: 5 }}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: responsiveFontSize(1.5) }}>EXP 4Y+</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ gap: responsiveWidth(2) }}>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Astro Dr. Amit Ram</Text>
                        <Text style={{ color: 'black', fontWeight: '300', fontSize: responsiveFontSize(1.2) }}>Vedic Astrology , Numerology</Text>
                        <Text style={{ color: '#ea871e', fontWeight: '300', fontSize: responsiveFontSize(1.5) }}>Hindi , English</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: responsiveFontSize(2) }}>
                            <Icon color={'black'} size={12} name="inr" /> 10<Text style={{ color: 'black', fontWeight: '300', fontSize: responsiveFontSize(1.2) }}> /Min</Text>
                        </Text>
                        <Text style={{ color: 'black' }}>|</Text>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: responsiveFontSize(2), textDecorationLine: 'line-through' }}>
                            <Icon color={'black'} size={12} name="inr" /> 15<Text style={{ color: 'black', fontWeight: '300', fontSize: responsiveFontSize(1.2) }}> /Min</Text>
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={{ backgroundColor: '#ea871e', width: '80%', alignItems: 'center', paddingVertical: responsiveWidth(1.8), borderRadius: 5 }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: responsiveFontSize(1.3) }}>Request Call Back</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}