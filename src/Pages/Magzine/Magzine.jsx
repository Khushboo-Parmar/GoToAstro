import React from 'react';
import { View, Image, Dimensions, ScrollView, Text, ImageBackground } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import style from '../../utils/css/comoncss/style';
import { Dropdown } from 'react-native-element-dropdown';
import MagzineCard from '../../comon/Cards/MagzineCArd';
import SubcriptionCard from '../../comon/Cards/SubscripTionCard';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const MagazineScreen = () => {
  const data = [
    { label: '2024', value: '1' },
    { label: '2023', value: '2' },
  ];

  return (
    <ImageBackground
      source={{ uri: 'https://gotoastro.com/front-assets/images/e-Magazine.jpg' }}
      style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)', // Dark overlay for better readability
          paddingHorizontal: responsiveWidth(5),
          paddingTop: responsiveWidth(5), // Adjusted padding to accommodate the overlay
        }}>
          <View style={{ marginVertical: responsiveHeight(3), gap: responsiveHeight(2) }}>
            <Text style={[style.white, { fontWeight: 'bold', fontSize: responsiveFontSize(3) }]}>
              <Text style={style.comoncolor2}>Jyotish Sagar</Text> {'\n'}Astrology Magazine
            </Text>

            <Text style={{ color: '#C1C8CE', marginTop: responsiveHeight(1) }}>
              <Text style={{ fontWeight: 'bold' }}>'Jyotish Sagar'</Text> is the most popular astrological 
              monthly magazine in Hindi language. It is being published from March, 1997. 
              This magazine covers most branches of astrology such as: Classical Hindu 
              Astrology, Modern Astrology, Krishnamurthi or KP Astrology, Jaimini 
              Astrology, Career Astrology, Marriage Astrology, Medical Astrology, 
              Remedial Astrology, Lal Kitab, Tajik or Annual Horoscopy, Palmistry, 
              Numerology, Body Reading and Samudrik Shastra, Mundane Astrology, Electional 
              or Muhurta Astrology, Vedic Astrology, Astrological Mathematics and Siddhant
              Jyotish or Hindu Astronomy etc. Detailed Panchanga (calendar), Monthly 
              Ephemeris and Various types of Muhurta are also published in every issue. 
              Monthly Horoscope (Rashiphal) and Tertiary Forecast are also attractive 
              features of Jyotish Sagar. Many permanent columns such as festival planner 
              of the month, Ramcharitmans, Upanishad, Guru Gita, Uttarkalamrit, Puran 
              Katha, Vidur Niti, Upnishad, Nadi Sutra, Narad Bhakti Sutra, Bhaktamal, 
              Jatak Panjika, How to do accurate prediction etc. are other attractions of 
              this magazine. Some articles are also published on Vastu, Tantra, Mantra, and 
              Yantra. Every year a Special issue on Deepavali is also published. More than
              four special issues are published per year.
            </Text>
          </View>

          <View>
            <Image
              style={{
                width: '100%',
                height: screenHeight * 0.6,
                resizeMode: 'contain',
                alignSelf: 'center',
                marginTop: 20,
              }}
              source={{ uri: 'https://d2vvtb6c5o2opz.cloudfront.net/magazine_top/1713872519.webp' }}
            />
          </View>

          <View style={{ marginVertical: responsiveHeight(3) }}>
            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: responsiveFontSize(2.4) }}>
              EDITIONS
            </Text>

            <View style={{ borderBottomWidth: 1, borderBottomColor: 'white', paddingBottom: responsiveHeight(2), marginVertical: responsiveHeight(3) }}>
              <Dropdown
                placeholderStyle={{ color: 'white', paddingHorizontal: responsiveWidth(5), fontWeight: 'bold' }}
                itemTextStyle={{ color: 'black' }}
                selectedTextStyle={{ color: 'white' }}
                data={data}
                search
                maxHeight={400}
                labelField="label"
                valueField="value"
                searchPlaceholder="Search..."
                placeholder="Select Year"
              />
            </View>
          </View>

          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
            <MagzineCard />
            <MagzineCard />
            <MagzineCard />
          </View>

          <View style={{ marginVertical: responsiveHeight(3),gap:responsiveHeight(3) }}>
            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: responsiveFontSize(2.4) }}>
              SUBSCRIPTIONS
            </Text>

            <View style={{gap:responsiveHeight(2)}}>
              <SubcriptionCard />
              <SubcriptionCard />
            </View>
          </View>

        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default MagazineScreen;
