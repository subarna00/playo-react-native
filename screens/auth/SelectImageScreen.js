import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SelectImageScreen = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState();
  const images = [
    {
      id: '0',
      image: 'https://cdn-icons-png.flaticon.com/128/16683/16683469.png',
    },
    {
      id: '0',
      image: 'https://cdn-icons-png.flaticon.com/128/16683/16683439.png',
    },
    {
      id: '0',
      image: 'https://cdn-icons-png.flaticon.com/128/4202/4202835.png',
    },
    {
      id: '0',
      image: 'https://cdn-icons-png.flaticon.com/128/3079/3079652.png',
    },
  ];

  const saveImage = () => {
    navigation.navigate('PrefinalScreen');
  };
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{marginHorizontal: 10}}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </View>
        <View style={{marginHorizontal: 10, marginVertical: 15}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Complete Your Profile
          </Text>
          <Text style={{marginTop: 10, color: 'gray'}}>
            What would like your mate to call you?
          </Text>
        </View>

        <View style={{marginVertical: 25}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                borderColor: 'green',
                borderWidth: 2,
                resizeMode: 'cover',
              }}
              source={{uri: image ? image : setImage(images[0].image)}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 25,
              alignItems: 'center',
            }}>
            {images.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => {
                  setImage(item.image);
                }}
                style={{
                  margin: 10,
                  gap: 10,
                }}>
                <Image
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 50,
                    borderColor: image == item.image ? 'green' : 'transparent',
                    borderWidth: 2,
                    resizeMode: 'cover',
                  }}
                  source={{uri: item.image}}
                />
              </Pressable>
            ))}
          </View>
          <Text
            style={{textAlign: 'center', color: 'gray', marginVertical: 20}}>
            OR
          </Text>
          <View style={{margin: 20}}>
            <View>
              <Text>Enter Image Link</Text>
              <TextInput
                value={image}
                onChangeText={setImage}
                style={{
                  padding: 10,
                  borderColor: '#D0D0D0',
                  borderWidth: 1,
                  borderRadius: 10,
                  marginTop: 10,
                }}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
      <SafeAreaView>
        <Pressable
          onPress={saveImage}
          style={{
            backgroundColor: '#07bc0c',
            padding: 12,
            marginHorizontal: 10,
            borderRadius: 5,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 15,
              fontWeight: '500',
            }}>
            Next
          </Text>
        </Pressable>
      </SafeAreaView>
    </>
  );
};

export default SelectImageScreen;

const styles = StyleSheet.create({});
