import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';

const MagzineCard = () => {
  return (
    <View style={{ width: '48%', marginBottom: responsiveHeight(2), position: 'relative' }}>
      <Image
        style={{ width: '100%', height: responsiveHeight(30), resizeMode: 'contain' }}
        source={{ uri: 'https://d2vvtb6c5o2opz.cloudfront.net/magazine/1698047887.webp' }}
      />
      <View style={{
        position: 'absolute',
        bottom: 10,
        left: '45%',
        transform: [{ translateX: -24 }], // Adjust based on icon size
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 48, // Adjust based on icon size and spacing
        gap:10
      }}>
         <TouchableOpacity style={{
            backgroundColor:'white',
            padding: responsiveWidth(2),
            borderRadius: 50,
            justifyContent:'center',height:responsiveHeight(3.8)
          }}>
            <Icon name="shopping-cart" size={responsiveFontSize(1.5)} color={'black'} />
          </TouchableOpacity>
 <TouchableOpacity style={{
            backgroundColor:'white',
            padding: responsiveWidth(2),
            borderRadius: 50,
            justifyContent:'center',height:responsiveHeight(3.8)
          }}>
            <Icon name="heart" size={responsiveFontSize(1.5)} color={'black'} />
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default MagzineCard;
