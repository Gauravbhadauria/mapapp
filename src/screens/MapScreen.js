import {View, Text, Dimensions, Alert, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  AnimatedRegion,
  Polyline,
  Circle,
} from 'react-native-maps';
const {height, width} = Dimensions.get('window');
import Geolocation from 'react-native-geolocation-service';
import ChatDialog from '../common/ChatDialog';

const nearUsers = [
  {
    name: 'Ankit',
    image: require('../images/ankit.png'),
    cord: {
      latitude: 28.541580121835317,
      longitude: 77.5376149344909,
    },
  },
  {
    name: 'Riya',
    image: require('../images/riya.png'),
    cord: {
      latitude: 28.540814074457263,
      longitude: 77.53821076127798,
    },
  },
  {
    name: 'Akash',
    image: require('../images/akash.png'),
    cord: {
      latitude: 28.54049010351709,
      longitude: 77.53851262457952,
    },
  },
  ,
];
const MapScreen = ({navigation}) => {
  const [lat, setLat] = useState(0);
  const [lang, setLang] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUserIndex, setSelectedUserIndex] = useState(0);
  useEffect(() => {
    getMyLocation();
  }, []);
  const getMyLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setLat(position.coords.latitude);
        setLang(position.coords.longitude);
      },
      error => {
        Alert.alert(error.message.toString());
      },
    );
  };
  return (
    <View style={{flex: 1}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        style={{width: width, height: height}} // remove if not using Google Maps
        region={{
          latitude: lat,
          longitude: lang,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          title="Me"
          coordinate={{
            latitude: lat,
            longitude: lang,
          }}>
          <Image
            source={require('../images/me.png')}
            style={{height: 35, width: 35}}
          />
        </Marker>

        {nearUsers.map((item, index) => {
          return (
            <Marker
              title={item.name}
              coordinate={item.cord}
              onPress={() => {
                setSelectedUserIndex(index);
                setModalVisible(true);
              }}>
              <Image source={item.image} style={{height: 35, width: 35}} />
            </Marker>
          );
        })}

        <Circle
          center={{latitude: lat, longitude: lang}}
          radius={2000}
          strokeWidth={2}
          strokeColor="#3399ff"
          fillColor="#80bfff"
        />
      </MapView>
      {modalVisible && (
        <ChatDialog
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          data={nearUsers[selectedUserIndex]}
          onClickChat={() => {
            navigation.navigate('ChatScreen', {
              data: nearUsers[selectedUserIndex],
            });
          }}
        />
      )}
    </View>
  );
};

export default MapScreen;
