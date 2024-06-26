import React, { useMemo, useState } from 'react';
import { Image, ScrollView, Text, Pressable, View, TouchableOpacity, StyleSheet, Modal, TextInput } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Icon from 'react-native-vector-icons/FontAwesome';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import { Dropdown } from "react-native-element-dropdown";
import style from '../../../utils/css/comoncss/style';
import InfoCardTwo from '../../../comon/info/infoCard';
import { Picker } from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
import RadioGroup from 'react-native-radio-buttons-group';
import AstroReportModal from './AstroReportModal';

export default function ReportDetail() {

    const [selectedRelation, setSelectedRelation] = useState('self');

    const [isHoveredDetails, setIsHoveredDetails] = useState(false);
    const [isHoveredMember, setIsHoveredMember] = useState(false);
    const [activeTab, setActiveTab] = useState('Brief Information');
    const [isModalVisible, setIsModalVisible] = useState(false);



    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };
    const tabs = ['Information'];

    const data = [
        { label: 'English', value: '1' },
        { label: 'Hindi', value: '2' },
    ];
    const dataChart = [
        { label: 'North', value: '1' },
        { label: 'south', value: '2' },
        { label: 'East', value: '3' },
    ];

    const [showFullText, setShowFullText] = useState(false);
    const fullText = `Your Kundli has the answers to most of your questions. The questions about love, career, marriage, health, family, and more aspects of your life. The entire information is derived from the position of stars and planets during the time of your birth. Isn’t it fascinating? Moreover, Kundli provides a detailed insight into your life, your current circumstances, your past, and even your future.

Kundli helps you in making informed decisions in your life and career. It can help you understand how your decisions would affect you and your surroundings. From your lucky colour to your suitable career option, the Kundli helps you find out the best and worst things for you.

You understand how significant a Kundli can be for you and your loved ones. Therefore, gotoAstro brings you their Free Kundli service which can be fully trusted for its results. Our online Free Kundli feature generates a detailed report which includes Astro Details,

Planetary Positions, Horoscope Charts, and more. As an alternative to the traditional manual Kundli, our online Free Kundli generation software is equally precise and trustworthy. And then once you get your Free Kundli online, you can always consult our certified Astrologers for your queries and doubts.
Our online Free Kundli generating software is efficient, quick, and precise. It also gives you the benefit of access to the service according to your convenience. You can generate your digital Free Kundli anywhere anytime with a few simple clicks. Just enter the asked details and find out what your Kundli says about you.`;

    const truncatedText = fullText.substring(0, 200) + '...';
    return (
        <>
            <View style={{ alignItems: 'center' }}>
                <Image style={{ width: "100%", height: responsiveHeight(30), }} source={{ uri: 'https://d2vvtb6c5o2opz.cloudfront.net/reports/1686227180.webp' }} />
            </View>
            <ScrollView style={{
                paddingVertical: responsiveWidth(5),
                height: '100%',
                backgroundColor: 'white',
                paddingHorizontal: responsiveWidth(5)
            }}>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: responsiveFontSize(2.9) }}>
                            Online Kundli Matching
                        </Text>
                        <TouchableOpacity>
                            <IconEvilIcons name="share-google" size={responsiveHeight(3.5)} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey', paddingBottom: 25, flexDirection: 'row', gap: 10, marginVertical: responsiveHeight(2) }}>
                        <Text style={{ color: 'black', letterSpacing: 0.5 }}>Looking for online kundli matching? gotoastro provides reliable and trusted online kundli matching service</Text>
                    </View>
                    <View style={{ marginVertical: responsiveHeight(2), gap: 20 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Languages :  </Text>
                        <TouchableOpacity style={{
                            borderWidth: 1,
                            borderColor: 'black',
                            borderRadius: 8,
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
                                searchPlaceholder="Search..."
                                placeholder="Select Style"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginVertical: responsiveHeight(4), gap: 20 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Chart style:  </Text>
                        <TouchableOpacity style={{
                            borderWidth: 1,
                            borderColor: 'black',
                            borderRadius: 8,
                            paddingVertical: responsiveHeight(2),
                            width: '100%'
                        }}>
                            <Dropdown
                                placeholderStyle={{ color: 'grey', paddingHorizontal: responsiveWidth(5) }}
                                itemTextStyle={{ color: 'black' }}
                                data={dataChart}
                                search
                                maxHeight={400}
                                labelField="label"
                                valueField="value"
                                searchPlaceholder="Search..."
                                placeholder="Select Language"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Pressable
                                onPressIn={() => setIsHoveredDetails(true)}
                                onPressOut={() => setIsHoveredDetails(false)}
                                onPress={toggleModal}
                                style={({ pressed }) => [
                                    {
                                        paddingVertical: 10,
                                        padding: responsiveHeight(3),
                                        backgroundColor: pressed ? '#e17400' : 'white',
                                        borderWidth: 1,
                                        borderColor: '#075cc0',
                                        borderRadius: 4,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    },
                                ]}
                            >
                                <Icon name="plus-square" size={20} color={isHoveredDetails ? '#ffffff' : '#075cc0'} />
                                <Text style={{ color: isHoveredDetails ? '#ffffff' : '#075cc0', marginLeft: 10 }}> ADD DETAILS</Text>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable
                                onPressIn={() => setIsHoveredMember(true)}
                                onPressOut={() => setIsHoveredMember(false)}
                                style={({ pressed }) => [
                                    {
                                        paddingVertical: 10,
                                        padding: responsiveHeight(3),
                                        backgroundColor: pressed ? '#e17400' : 'white',
                                        borderWidth: 1,
                                        borderColor: '#075cc0',
                                        borderRadius: 4,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    },
                                ]}
                            >
                                <Icon name="plus-square" size={20} color={isHoveredMember ? '#ffffff' : '#075cc0'} />
                                <Text style={{ color: isHoveredMember ? '#ffffff' : '#075cc0', marginLeft: 10 }}> ADD MEMBER</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey', paddingBottom: 20, marginVertical: responsiveHeight(4) }}>
                        <Text style={{ color: 'black', fontSize: responsiveFontSize(1.8) }}>Price Of Report</Text>
                        <Text style={{ color: '#28a745', fontWeight: 'bold', fontSize: responsiveFontSize(2) }}>FREE</Text>
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
                                alignItems: 'center', justifyContent: 'center'
                            }}><Icon size={14} name="arrow-circle-right"></Icon>  GENERATE REPORT </Text>
                        </TouchableOpacity>
                    </View>
                    <InfoCardTwo tabs={tabs} />

                    <View style={{ marginVertical: responsiveHeight(1), borderBottomWidth: 1, borderBottomColor: 'grey', paddingBottom: 25, marginHorizontal: responsiveWidth(1) }}>
                        <Text style={{ color: 'black', fontWeight: '300', fontSize: responsiveFontSize(1.5) }} >
                            {showFullText ? fullText : truncatedText}
                        </Text>
                        <TouchableOpacity onPress={() => setShowFullText(!showFullText)}>
                            <Text style={[style.comoncolor2, { marginTop: responsiveHeight(1), fontSize: responsiveFontSize(1.6) }]}>
                                {showFullText ? 'Read Less' : 'Read More'}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <AstroReportModal isVisible={isModalVisible} toggleModal={toggleModal} />
                </View>
            </ScrollView>
        </>
    );
}


const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',

    },
    modalContent: {
        backgroundColor: '#ffffff',
        padding: responsiveHeight(2),
        borderRadius: 10,
        alignItems: 'center',
        elevation: 5,
        width: "90%"
    },
    modalButton: {
        marginTop: responsiveHeight(2),
        paddingVertical: responsiveHeight(2),
        paddingHorizontal: responsiveWidth(2),
        borderRadius: 4,
        alignItems: 'center',
    },
    formGroup: {
        width: '100%',
        marginBottom: responsiveHeight(2),
    },
    label: {
        fontSize: responsiveFontSize(1.8),
        color: '#333333',
        marginTop: responsiveHeight(2),
        marginBottom: responsiveHeight(2),
    },
    input: {
        borderWidth: 1,
        borderColor: '#dddddd',
        borderRadius: 5,
        paddingVertical: responsiveHeight(1.5),
        paddingHorizontal: responsiveWidth(3),
        fontSize: responsiveFontSize(1.5),
        color: '#333333',
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
    },
    picker: {
        borderWidth: 1,
        borderColor: '#dddddd',
        borderRadius: 5,
        paddingVertical: responsiveHeight(1.5),
        paddingHorizontal: responsiveHeight(2),
        fontSize: responsiveFontSize(2),
        color: '#333333',
    },

});
