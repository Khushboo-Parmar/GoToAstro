import { Image, ScrollView, Text, View } from "react-native";
import style from "../../../utils/css/comoncss/style";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Banner from "../Banner";


export default function BlogDetail(){
    return(
        <>
        <ScrollView style={[style.bgwhite,{
            width:'100%',
            paddingVertical: responsiveWidth(5),
            height: '100%',
            paddingHorizontal: responsiveWidth(5)
        }]}>

<View style={{gap:responsiveHeight(3), borderBottomWidth: 3, paddingVertical: 10, borderBottomColor: '#ea871e' }}>
    <Text style={{textAlign:'center',fontWeight:'bold',fontSize:responsiveFontSize(2.2),color:'black'}} >
    Top 5 Zodiac Signs Who get married with Famous Personalities
    </Text>

    <Image width={'100%'}  height={responsiveHeight(30)} source={{uri:'https://d2vvtb6c5o2opz.cloudfront.net/blogs/1646301755.webp'}} />
</View>

<View style={{marginVertical:responsiveHeight(2),gap:responsiveHeight(2)}}>
    <Text style={{color:'black',fontWeight:'300',fontSize:responsiveFontSize(1.5)}}>
    Pushkar Navansh is one of the remarkable contributions of South Indian scholars and texts in Falit Astrology. Falakthan has been done on the basis of Pushkaransh and Pushkar Navamsh in Falit and Nadi texts of South India.
There is a special part in Pushkaransh Rashi, which is auspicious and fruitful. The planet located there is auspicious and fruitful. Similarly, the planet situated in Pushkar Navamsha is also auspicious.
Vidyamadhav (14th century) describes Pushkaramsa and Pushkara Navamsa as follows:
    </Text>
</View>

<View style={{marginVertical:responsiveHeight(2),gap:responsiveHeight(2)}}>
    <Text style={{fontWeight:'bold',color:'black'}}>Predictions based on Pushkar Navamsa</Text>
<Text style={{color:'black',fontWeight:'300',fontSize:responsiveFontSize(1.5)}}>
1. If the Ascendant is in the Pushkar Navamsa, then the person achieves high success.
2. If Shubh Bhavesh, Panchamesh, Bhagyesh, Karmesh etc. are located in Pushkar Navamsh, then in their dashas the person gets high success.
3. The planet situated in Pushkar Navansh is Rajayogakaraka. In its condition, the person gets Raja Yoga, wealth or success.
Yogas related to Pushkar Navamsa are also described in the scriptures. Some yogas are presented here:
(i) Sun and all the planets are in Pushkaramsh, then the person who receives the blessings of Lakshmi becomes rich, wealthy, famous and happy.
रव्यादयो ग्रहाः सर्वो पुष्करांशे प्रजायते।
लक्ष्मीकटाक्षवान् भोगी धनिकः कीतिर्मान् सुखी।। (देवकेरलम् 1/79)
(ii) If Moon, Mars and Jupiter all three are in Pushkar Navamsa, then it is Rajayogakaraka. According to Vaidyanath such a person becomes a king:
वर्गोत्तमे वा यदि पुष्करांशे सारेन्दुदेवेन्द्रगुरौ नृपाल:। (जातकपारिजात 7/25)
</Text>
</View>

<View style={{marginVertical:responsiveHeight(2),gap:responsiveHeight(2)}}>
    <Text style={{fontWeight:'bold',color:'black'}}>Predictions based on Pushkar Navamsa</Text>
<Text style={{color:'black',fontWeight:'300',fontSize:responsiveFontSize(1.5)}}>
1. If the Ascendant is in the Pushkar Navamsa, then the person achieves high success.
2. If Shubh Bhavesh, Panchamesh, Bhagyesh, Karmesh etc. are located in Pushkar Navamsh, then in their dashas the person gets high success.
3. The planet situated in Pushkar Navansh is Rajayogakaraka. In its condition, the person gets Raja Yoga, wealth or success.
Yogas related to Pushkar Navamsa are also described in the scriptures. Some yogas are presented here:
(i) Sun and all the planets are in Pushkaramsh, then the person who receives the blessings of Lakshmi becomes rich, wealthy, famous and happy.
रव्यादयो ग्रहाः सर्वो पुष्करांशे प्रजायते।
लक्ष्मीकटाक्षवान् भोगी धनिकः कीतिर्मान् सुखी।। (देवकेरलम् 1/79)
(ii) If Moon, Mars and Jupiter all three are in Pushkar Navamsa, then it is Rajayogakaraka. According to Vaidyanath such a person becomes a king:
वर्गोत्तमे वा यदि पुष्करांशे सारेन्दुदेवेन्द्रगुरौ नृपाल:। (जातकपारिजात 7/25)
</Text>
</View>

<Text style={{marginTop:responsiveHeight(3),textAlign:'center',fontWeight:'bold',fontSize:responsiveFontSize(2.5),color:'black'}}>Related Blogs</Text>

<ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: responsiveHeight(3) }}>
                    <Banner image={'https://d2vvtb6c5o2opz.cloudfront.net/blogs/1692881863.webp'} />
                    <Banner image={'https://d2vvtb6c5o2opz.cloudfront.net/blogs/1691222005.webp'} />
                    <Banner image={'https://d2vvtb6c5o2opz.cloudfront.net/blogs/1691151847.webp'} />
                    <Banner image={'https://d2vvtb6c5o2opz.cloudfront.net/blogs/1662719044.webp'} />
                </ScrollView>
        </ScrollView>
        </>
    )
}