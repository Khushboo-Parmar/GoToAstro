import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
export default function InfoCard(){
    const [activeTab, setActiveTab] = useState('Brief Information');
  const tabs = ['Brief Information', 'Puja Description', 'Benefits', 'Who can do'];
    return(
        <>
                <View style={{ paddingVertical: responsiveHeight(4), backgroundColor: '#f1f2f6', marginVertical: responsiveHeight(5) }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap:20, justifyContent: 'space-around', paddingHorizontal: responsiveWidth(2) }}
      >
        {tabs.map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
            <Text style={{
                fontWeight:'bold',
              paddingVertical: responsiveHeight(1),
              paddingHorizontal: responsiveWidth(2),
              fontSize: responsiveHeight(2),
              color: activeTab === tab ? '#085cc0' : 'black',
              borderBottomWidth: activeTab === tab ? 2 : 0,
              borderBottomColor: activeTab === tab ? '#085cc0' : 'transparent',
            }}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={{paddingHorizontal:responsiveWidth(4),marginVertical:responsiveHeight(3)}}>
        <Text style={{color:'grey'}}>
        The engagement or ring ceremony is the first important ritual of marriage ceremony. The engagement is the 'Vara Varan' or 'Bride Varan' mentioned in the ancient texts. Under this, the bride's parents and other relatives are engaged bride-groom, similarly  parents and other family members of bride-groom give fruits, sweets and dresses to bride.  This ceremony has importance to engage the bride and bridegroom, while on the other hand, it is important because of worship for the happy life of the future couple. In the engagement puja, Lord Ganesha along with the goddess Gauri are worshiped, while Navagraha Pujan, Matrika Puja, Kalash Pujan, Swastivachan, etc. are also performed.
        </Text>
      </View>
    </View>
        </>
    )
}