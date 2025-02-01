import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const VenueCard = ({venue}) => {
  const navigation = useNavigation();
  return (
    <View style={{margin: 15}}>
      <Pressable
        onPress={() => {
          navigation.navigate('Venue', {venue});
        }}
        style={{
          backgroundColor: 'white',
          borderRadius: 5,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        <View>
          <Image
            source={{uri: venue?.image}}
            style={{
              width: '100%',
              height: 200,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
        </View>
        <View style={{paddingVertical: 12, paddingHorizontal: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text>
              {venue?.name.length > 40
                ? venue?.name?.slice(0, 40) + '...'
                : venue?.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'green',
                gap: 6,
                padding: 6,
                borderRadius: 10,
              }}>
              <AntDesign name="star" size={20} color="white" />
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                {venue?.rating}
              </Text>
            </View>
          </View>
          <Text style={{color: 'gray'}}>
            {venue?.address?.length > 40
              ? venue?.address?.slice(0, 40) + '...'
              : venue?.address}{' '}
            Address
          </Text>
          <View
            style={{
              height: 1,
              borderWidth: 0.6,
              borderColor: '#E0E0E0',
              marginVertical: 10,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text>Upto 10% off</Text>
            <Text>250 onwards</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default VenueCard;
