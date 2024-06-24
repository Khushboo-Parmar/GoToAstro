import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import img from '../../../assets/images/product.webp';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from "../../utils/css/comoncss/style";
import StarRating from "react-native-star-rating-widget";
import InfoCardTwo from "../../comon/info/infoCard";


export default function AstroDetail(){
    const tabs = ['Information', 'Benefits'];
    return(
        <>
   
       <ScrollView style={{       paddingVertical: responsiveWidth(5),
                    height: '100%',
                    backgroundColor:'white',
                    paddingHorizontal: responsiveWidth(5)}}>

<View style={{ alignItems: 'center', backgroundColor: 'white', padding: 10, paddingVertical: responsiveHeight(4) }}>
            <View style={{
                width: responsiveHeight(30),
                height: responsiveHeight(30),
                borderRadius: responsiveHeight(15),
                borderWidth: 2,
                borderColor: '#ea871e',
                alignItems: 'center',
                justifyContent: 'center',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 5,
                position: 'relative',
            }}>
                <Image style={{ borderRadius: responsiveHeight(15) }} width={'100%'} height={'100%'} source={{ uri: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg' }} />
                <TouchableOpacity style={{
                    position: 'absolute',
                    bottom: -responsiveHeight(-3),
                    right: 0,
                    backgroundColor: 'white',
                    borderRadius: 50,
                    padding: 10,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4,
                    elevation: 5
                }}>
                    <Icon name="share-alt" size={responsiveHeight(3)} color="grey" />
                </TouchableOpacity>
            </View>
        </View>
<View>
   <View style={{marginBottom:responsiveHeight(3),gap:15}}>
   <Text style={{color:'black',fontWeight:'bold',fontSize:responsiveFontSize(2.9)}}>
    Astro Harsh
    </Text>

    <StarRating
              rating={4.5}
              starSize={20}
            />
                        <Text style={{ color: 'black', fontWeight: '300', fontSize: responsiveFontSize(1.4) }}>Astro Harsh has 15 year experience in Vedic Astrology and Vastu.</Text>
   </View>

        <View style={{borderBottomWidth:1,borderBottomColor:'grey',paddingBottom:25, flexDirection:'row',gap:10,marginVertical:responsiveHeight(2)}}>
        <Text style={{color:'black',fontWeight:'bold'}}>Language : Hindi</Text>
        </View>


        <View style={{borderBottomWidth:1,borderBottomColor:'grey',paddingBottom:25,gap:10,marginVertical:responsiveHeight(2),gap:20}}>
            <Text style={{color:'black',fontWeight:'bold'}}>Rate per minute </Text>
            <View style={{ flexDirection: 'row',gap:responsiveWidth(5) }}>
                        <Text style={{ color: '#ea5f5b', fontWeight: 'bold', fontSize: responsiveFontSize(3) }}>
                            <Icon color={'#ea5f5b'} size={20} name="inr" /> 10<Text style={{ color: '#ea5f5b', fontWeight: '300', fontSize: responsiveFontSize(1.2) }}> /Min</Text>
                        </Text>
                        <Text style={{ color: 'black' , fontSize: responsiveFontSize(3)}}>|</Text>
                        <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: responsiveFontSize(3), textDecorationLine: 'line-through' }}>
                            <Icon color={'grey'} size={20} name="inr" /> 15<Text style={{ color: 'black', fontWeight: '300', fontSize: responsiveFontSize(1.2) }}> /Min</Text>
                        </Text>
                    </View>
        </View>


        <View style={{ alignItems: 'center', marginVertical: responsiveHeight(1),gap:10 }}>
                        <TouchableOpacity style={[,{
                            borderRadius: 10,
                            paddingVertical: responsiveHeight(2),
                            width: '100%',backgroundColor:'grey'
                        }]}>
                            <Text style={{
                                color: 'white',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                alignItems:'center',justifyContent:'center'
                            }}><Icon size={14} name="comment"></Icon>  Start a Chat Now </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[,{
                            borderRadius: 10,
                            paddingVertical: responsiveHeight(2),
                            width: '100%',backgroundColor:'grey'
                        }]}>
                            <Text style={{
                                color: 'white',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                alignItems:'center',justifyContent:'center'
                            }}><Icon size={14} name="phone"></Icon>  Start a Call Now </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[style.bgcomoncolor2,{
                            borderRadius: 10,
                            paddingVertical: responsiveHeight(2),
                            width: '100%'
                        }]}>
                            <Text style={{
                                color: 'white',
                                textAlign: 'center',
                                fontWeight: 'bold',
                                alignItems:'center',justifyContent:'center'
                            }}><Icon size={14} name="comment"></Icon>  Request Call Back </Text>
                        </TouchableOpacity>
                    </View>

        <InfoCardTwo tabs={tabs} />
</View>
       </ScrollView>
        </>
    )
}