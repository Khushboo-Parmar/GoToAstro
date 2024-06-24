import { Image, ScrollView, Text, TouchableOpacity, View, StyleSheet, Dimensions } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import style from "../../../utils/css/comoncss/style";
import { useNavigation } from '@react-navigation/native';
import InfoCardTwo from "../../../comon/info/infoCard";
import FlatListCorosel from "./FlatListCorosel";

const { width } = Dimensions.get('window');
export default function StoreDetail() {
    const navigation = useNavigation();
    const [showdate, setShowDate] = useState(false)
    const [activeTab, setActiveTab] = useState('Brief Information');
    const tabs = ['Information', 'Benefits'];
    
    const data = [
        { label: 'Authorized Lab Certificate (Free)', value: '1' },
        { label: 'GTL Lab Certificate (Rs 1500) (5 Days Extra)  INR 1500', value: '2' },
    ];
    const dataEnergization = [
        { label: 'No Energization', value: '1' },
        { label: 'Authorized Lab Certificate (Free)', value: '2' },
        { label: 'Vedic Puja for Energization (Rs 1100) (1 Day Extra)  INR 1100 ', value: '3' },
        { label: 'Vedic Puja for Energization (with video) (Rs 2100) (2 Days Extra)  INR 2100', value: '4' },
        { label: 'Energization with Vedic Prana Pratishtha Puja (with Viedo) (Rs 2100) (1 Day Extra)  INR 2100', value: '5' },
        { label: 'Energization with Vedic Prana Pratishtha Puja (with video) (Rs 3100) (2 days Extra)  INR 3100', value: '6' },
        { label: 'Energization with Vedic Prana Pratishtha Puja (Rs 3500)(Live) (2 Days Extra)  INR 3500', value: '7' },
    ];

    return (
        <>

            <View style={{ alignItems: 'center' }}>
                <Image  source={{uri:'https://d2vvtb6c5o2opz.cloudfront.net/estore_categories/1658904385.webp'}} style={{ height: responsiveHeight(30),width:'100%' }} />
            </View>
            <ScrollView style={{
                paddingVertical: responsiveWidth(5),
                height: '100%',
                backgroundColor: 'white',
                paddingHorizontal: responsiveWidth(5)
            }}>


                <View>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: responsiveFontSize(2.9) }}>
                        Ruby (Manikya)-3.10 Carat
                    </Text>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey', paddingBottom: 20, marginVertical: responsiveHeight(2) }}>
                        <Text style={{ color: '#28a745', fontWeight: 'bold', fontSize: responsiveFontSize(1.8) }}>$ 2000</Text>
                        <Text style={{ color: 'black', fontSize: responsiveFontSize(1.8) }}>Included Taxes</Text>
                    </View>

                    <View style={{ marginVertical: responsiveHeight(2), flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>

                            <View style={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                            <Text style={{ color: 'black', fontWeight: '500' }}>SKU: </Text>
                                <Text style={{ color: 'black', fontWeight: '500' }}>0301301031000002162</Text>
                            </View>
                        </View>

                        <View>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                                <Text style={{ color: 'black', fontWeight: '500' }}>Origin: </Text>
                                <Text style={{ color: 'black', fontWeight: '500' }}>Bangkok</Text>
                            </View>
                        </View>
                    </View>


                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey', paddingBottom: 25, flexDirection: 'row', gap: 10, marginVertical: responsiveHeight(2) }}>
                        <Text style={{ color: 'black', fontWeight: '400' }}>Ruby is the stone for Sun and is a precious stone. This gem should be worn in the ritualistic way, which has been used for ages and has been found to energise the stone.</Text>
                    </View>




                    <View style={{ marginVertical: responsiveHeight(1.5), gap: 20 }}>

                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>Certification :  </Text>
                            <Text style={{ color: 'red', }}>*</Text>
                        </View>
                        <TouchableOpacity style={{
                            borderWidth: 1,
                            borderColor: 'black',
                            borderRadius: 4,
                            paddingVertical: responsiveHeight(2),
                            width: '100%'
                        }}>
                            <Dropdown
                                placeholderStyle={{ color: 'grey', paddingHorizontal: responsiveWidth(5) }}
                                itemTextStyle={{ color: 'black' }}
                                data={data}
                                search
                                maxHeight={400}
                                labelField="label"
                                valueField="value"
                                searchPlaceholder="---Select Option---"
                                placeholder="Authorized Lab Certificate (Free) "
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginVertical: responsiveHeight(1.5), gap: 20 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>Energization:  </Text>
                            <Text style={{ color: 'red', }}>*</Text>
                        </View>
                        <TouchableOpacity style={{
                            borderWidth: 1,
                            borderColor: 'black',
                            borderRadius: 4,
                            paddingVertical: responsiveHeight(2),
                            width: '100%'
                        }}>
                            <Dropdown
                                placeholderStyle={{ color: 'grey', paddingHorizontal: responsiveWidth(5) }}
                                itemTextStyle={{ color: 'black' }}
                                data={dataEnergization}
                                search
                                maxHeight={400}
                                labelField="label"
                                valueField="value"
                                searchPlaceholder="---Select Option---"
                                placeholder="Basic Energization Puja (Free)  "
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginVertical: responsiveHeight(2), gap: 10 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Include Product type : </Text>
                        <View style={{ width: responsiveWidth(40), gap: 20, marginVertical: responsiveHeight(2), borderWidth: 1, borderColor: 'grey', padding: responsiveWidth(5), borderRadius: 5 }}>
                            <Image source={{uri:'https://gts-images.s3.ap-south-1.amazonaws.com/blogs/1678961360.png'}} style={{ height: responsiveHeight(10), width: responsiveWidth(30) }} />
                            <Text style={{ color: 'black', textAlign: 'center', fontSize: responsiveFontSize(1.6) }}>Ring</Text>

                        </View>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', gap: 1,marginBottom:responsiveHeight(3) }}>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Dispatch Time:: </Text>
                        <Text>23 June 2024</Text>
                    </View>

                    <View style={{ alignItems: 'center', marginVertical: responsiveHeight(1) }}>
                        <TouchableOpacity style={[style.bgcomoncolor, {
                            borderRadius: 10,
                            paddingVertical: responsiveHeight(2),
                            width: '100%'
                        }]}>
                            <Text style={{
                                color: 'white',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                alignItems: 'center', justifyContent: 'center',

                            }}> <Icon size={15} name="shopping-cart">  ADD TO CART </Icon></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center', marginVertical: responsiveHeight(1) }}>
                        <TouchableOpacity style={[style.bgcomoncolor, {
                            borderRadius: 10,
                            paddingVertical: responsiveHeight(2),
                            width: '100%'
                        }]}>
                            <Text style={{
                                color: 'white',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                alignItems: 'center', justifyContent: 'center',

                            }}> Buy Now</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.header}>
                        <Text style={styles.headerText}>Product Details</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <View style={styles.detailRow}>
                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Treatment</Text>
                                <Text style={styles.detailText}>Na</Text>
                            </View>
                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Cut</Text>
                                <Text style={styles.detailText}>Mixed</Text>
                            </View>

                        </View>

                        <View style={styles.detailRow}>

                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Certification</Text>
                                <Text style={styles.detailText}>Yes</Text>
                            </View>
                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Shape</Text>
                                <Text style={styles.detailText}>Oval</Text>
                            </View>
                        </View>


                        <View style={styles.detailRow}>
                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Return Policy</Text>
                                <Text style={styles.detailText}>Yes</Text>
                            </View>
                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Colour</Text>
                                <Text style={styles.detailText}>Red</Text>
                            </View>
                        </View>

                        <View style={styles.detailRow}>
                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Dimension (height x width)</Text>
                                <Text style={styles.detailText}>Na</Text>
                            </View>
                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Weight (carat)</Text>
                                <Text style={styles.detailText}>3.10</Text>
                            </View>
                        </View>

                        <View style={styles.detailRow}>
                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Weight (ratti)</Text>
                                <Text style={styles.detailText}>3.41</Text>
                            </View>
                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Optic Character</Text>
                                <Text style={styles.detailText}>Anisotropic D.R.</Text>
                            </View>
                        </View>

                        <View style={styles.detailRow}>
                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Specific Gravity</Text>
                                <Text style={styles.detailText}>3.98-4.00 approx</Text>
                            </View>
                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Refractive Index</Text>
                                <Text style={styles.detailText}>1.762-1.770</Text>
                            </View>
                        </View>
                        <View style={styles.detailRow}>
                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Species Group</Text>
                                <Text style={styles.detailText}>Corundum(9)</Text>
                            </View>
                            <View style={styles.detailColumn}>
                                <Text style={styles.detailHeader}>Origin</Text>
                                <Text style={styles.detailText}>Bangkok</Text>
                            </View>
                        </View>
                    </View>

<View>
<InfoCardTwo tabs={tabs} />
    </View>
                    

                    <View style={styles.header}>
                        <Text style={styles.headerText}>PEOPLE ALSO BOUGHT THESE</Text>
                    </View>
                    <View style={{marginBottom:responsiveHeight(5)}}>
                        <FlatListCorosel />
                    </View>
                </View>




            </ScrollView>
        </>
    )
}


const styles = StyleSheet.create({
    header: {
        borderTopWidth: 1,
        borderTopColor: "#aaa",
        // paddingTop: responsiveHeight(2),
        paddingVertical: responsiveHeight(2),
        marginTop: responsiveHeight(2),
    },
    headerText: {
        fontSize: responsiveFontSize(2),
        color: '#333',
        fontWeight: '600',
        marginBottom:responsiveHeight(3)
    },
    detailsContainer: {
        flexDirection: 'column',
    },
    detailRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: responsiveHeight(2),
    },
    detailColumn: {
        width: width < 768 ? '50%' : '25%', // Adjust the width based on screen size
        padding: responsiveWidth(2),
    },
    detailHeader: {
        fontSize: responsiveFontSize(2),
        color: '#333',
        fontWeight: '600',
        marginBottom: responsiveHeight(0.5),
    },
    detailText: {
        fontSize: responsiveFontSize(1.8),
        color: '#666',
    },
});