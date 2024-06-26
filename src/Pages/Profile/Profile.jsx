
import React, { useMemo, useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, ScrollView, Pressable, TextInput } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import RNPickerSelect from 'react-native-picker-select';
import RadioGroup from 'react-native-radio-buttons-group';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
    const navigation = useNavigation();
    const [showAccountOptions, setShowAccountOptions] = useState(false);
    const [showMyActivity, setShowMyActivity] = useState(false);
    const [showProfileUpdate, setShowProfileUpdate] = useState(false);

    const toggleAccountOptions = () => {
        setShowAccountOptions(!showAccountOptions);
        setShowMyActivity(false);
        setShowProfileUpdate(false);
    };

    const toggleMyActivity = () => {
        setShowMyActivity(!showMyActivity);
        setShowAccountOptions(false);
        setShowProfileUpdate(false);
    };

    const toggleProfileUpdate = () => {
        setShowProfileUpdate(!showProfileUpdate);
        setShowMyActivity(false);
        setShowAccountOptions(false);
    };
    const [selectedRelation, setSelectedRelation] = useState('self');
    const [selectedId, setSelectedId] = useState();
    const [selectedIdGender, setSelectedIdGender] = useState();
    const [date, setDate] = useState(new Date())
    const radioButtons = useMemo(() => ([
        { id: '1', label: 'Single', value: 'option1', size: 15, borderSize: 1, labelStyle: { fontSize: responsiveFontSize(1.8), color: 'black' }, },
        { id: '2', label: 'Married', value: 'option2', size: 15, borderSize: 1, labelStyle: { fontSize: responsiveFontSize(1.8), color: 'black' }, }
    ]), []);
    const radioButtonsGender = useMemo(() => ([
        { id: '1', label: 'Male', value: 'option1', size: 15, borderSize: 1, labelStyle: { fontSize: responsiveFontSize(1.8), color: 'black' }, },
        { id: '2', label: 'Female', value: 'option2', size: 15, borderSize: 1, labelStyle: { fontSize: responsiveFontSize(1.8), color: 'black' }, },
        { id: '3', label: 'Other', value: 'option3', size: 15, borderSize: 1, labelStyle: { fontSize: responsiveFontSize(1.8), color: 'black' }, }
    ]), []);

    return (
        <View style={styles.container}>

            <Image source={require('../../../assets/images/profilebg.jpg')} style={styles.backgroundImage} />


            <TouchableOpacity onPress={() => navigation.navigate('')} style={styles.profileImageContainer}>
                <Image
                    source={require('../../../assets/images/profilebg.jpg')}
                    style={styles.profileImage}
                />
                {/* <Icon name="shopping-cart" size={responsiveFontSize(1.5)} color={'white'} /> */}
            </TouchableOpacity>


            <View style={styles.userTitles}>
                <Text style={styles.userName}>User parmar</Text>
                <Text style={styles.userInfo}>swskhushbooparmar@gmail.com</Text>
            </View>


            <ScrollView contentContainerStyle={styles.menuContainer}>

                <View style={styles.menuSection}>
                    <TouchableOpacity onPress={toggleAccountOptions}>
                        <LinearGradient
                            colors={['#8ca6db', '#b993d6']}
                            style={styles.gradientBg}
                        >
                            <Text style={styles.menuHeader}>Account Options</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    {showAccountOptions && (
                        <View style={{ marginHorizontal: responsiveWidth(3) }}>
                            <TouchableOpacity style={styles.menuItem}><Text>My Wallet</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem}><Text>Saved Addresses</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem}><Text>Members</Text></TouchableOpacity>
                        </View>
                    )}
                </View>


                <View style={styles.menuSection}>
                    <TouchableOpacity onPress={toggleMyActivity}>
                        <LinearGradient
                            colors={['#8ca6db', '#b993d6']}
                            style={styles.gradientBg}
                        >
                            <Text style={styles.menuHeader}>My Activity</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    {showMyActivity && (
                        <View style={{ marginHorizontal: responsiveWidth(3) }}>
                            <TouchableOpacity style={styles.menuItem}><Text>My Favorites</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem}><Text>My Orders</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem}><Text>My Subscriptions</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem}><Text>My Call/Chat History</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem}><Text>My Call Request</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem}><Text>My Magazine</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem}><Text>My Reports</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem}><Text>My Daily Horoscope</Text></TouchableOpacity>
                        </View>
                    )}
                </View>


                <View style={styles.menuSection}>
                    <TouchableOpacity onPress={toggleProfileUpdate}>
                        <LinearGradient
                            colors={['#8ca6db', '#b993d6']}
                            style={styles.gradientBg}
                        >
                            <Text style={styles.menuHeader}>Profile Update</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    {showProfileUpdate && (
                        <View style={{ marginHorizontal: responsiveWidth(5) }}>


                            {/*  */}



                            <View style={styles.modalContent}>

                                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                                    <View style={styles.formGroup}>
                                        <Text style={styles.label}>First Name</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Enter Your Name"
                                            placeholderTextColor="#aaa"
                                            autoCapitalize="none"
                                        />
                                        <Text style={styles.label}>Last Name</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Enter Your Last Name"
                                            placeholderTextColor="#aaa"
                                            autoCapitalize="none"
                                        />
                                        <Text style={styles.label}>Phone</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Enter Your mobile number"
                                            placeholderTextColor="#aaa"
                                            autoCapitalize="none"
                                        />
                                        <Text style={styles.label}>Email</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Enter Your email address"
                                            placeholderTextColor="#aaa"
                                            autoCapitalize="none"
                                        />

                                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={styles.label}>Marital Status : </Text>
                                            <RadioGroup
                                                radioButtons={radioButtons}
                                                onPress={setSelectedId}
                                                selectedId={selectedId}
                                                layout='row'
                                            />
                                        </View>
                                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={styles.label}>Gender : </Text>
                                            <RadioGroup
                                                radioButtons={radioButtonsGender}
                                                onPress={setSelectedIdGender}
                                                selectedId={selectedIdGender}
                                                layout='row'
                                            />
                                        </View>

                                        <Text style={styles.label}>Select your Birth Information : </Text>

                                        <View>
                                            <DatePicker date={date} onDateChange={setDate} />
                                        </View>

                                        <Text style={styles.label}>Place of Birth : </Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Enter Your Birth Place "
                                            placeholderTextColor="#aaa"
                                            autoCapitalize="none"
                                        />
                                        <Text style={styles.label}>GSTIN </Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Enter GSTIN number "
                                            placeholderTextColor="#aaa"
                                            autoCapitalize="none"
                                        />

                                    </View>
                                </ScrollView>
                                <Pressable
                                    style={({ pressed }) => [
                                        styles.AddButton,
                                        { backgroundColor: pressed ? '#e17400' : 'white' },
                                    ]}
                                >
                                    <Text style={{ color: 'black' }}>Update Done</Text>
                                </Pressable>

                            </View>


                            {/*  */}
                        </View>
                    )}
                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backgroundImage: {
        width: '100%',
        height: responsiveHeight(20),
    },
    profileImageContainer: {
        width: responsiveWidth(25),
        height: responsiveWidth(25),
        borderRadius: responsiveWidth(12.5),
        borderWidth: 1,
        borderColor: '#000',
        overflow: 'hidden',
        position: 'absolute',
        top: responsiveHeight(14),
        left: '50%',
        marginLeft: responsiveWidth(-12.5),
    },
    profileImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    userTitles: {
        marginTop: responsiveHeight(7),
        alignItems: 'center',
    },
    userName: {
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
        color: 'black',
    },
    userInfo: {
        fontSize: responsiveFontSize(1.8),
        color: 'black',
        fontWeight: '400'
    },
    menuContainer: {
        paddingTop: responsiveHeight(2),
    },
    menuSection: {
        marginBottom: responsiveHeight(2),
    },
    gradientBg: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: responsiveHeight(1),
        paddingHorizontal: responsiveWidth(2),
    },
    menuHeader: {
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
        color: '#fff',
    },
    menuItem: {
        paddingVertical: responsiveHeight(1),
        paddingHorizontal: responsiveWidth(2),
        fontSize: responsiveFontSize(2),
        color: 'black',
        fontWeight: '500'

    },

    modalContent: {
        backgroundColor: '#ffffff',
        padding: responsiveHeight(2),
        borderRadius: 10,
        // alignItems: 'center',
        elevation: 5,
        // width: "95%",
        // height: '80%'
    },
    modalButton: {
        width: responsiveWidth(6),
        height: responsiveHeight(3),
        borderRadius: 4,
        borderColor: '#ea871e',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginBottom: responsiveHeight(2)
    },
    AddButton: {
        width: "100%",
        height: responsiveHeight(5),
        borderRadius: 4,
        borderColor: '#ea871e',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginBottom: responsiveHeight(2)
    },
    formGroup: {
        width: '100%',
        marginBottom: responsiveHeight(2),
    },
    label: {
        fontSize: responsiveFontSize(1.8),
        color: 'black',
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
        color: 'black',
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
    },
    labelStyle: {
        color: 'red',

    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        marginBottom: responsiveHeight(3),
    },
});

export default Profile;
