import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default function Home() {

  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    (async function () {
      const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
      if (status === 'granted') {
        let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
        setOrigin({
          latitude: location.coords.latitude,
          longitude:location.coords.longitude,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        })

      } else {
        throw new Error('Location permission not granted');
      }
    })();
  }, [])

  return (
    <View>
      <MapView

        style={styles.map}

        region={origin}

        showsUserLocation={true}
        loadingEnabled={true}
      >

        <Marker
          coordinate={{
            latitude: -23.44172527,
            longitude: -51.86645508,
          }}
          title="casa 01"
          description="R$:250,00"
        />

        <Marker
          coordinate={{
            latitude: -23.44125279,
            longitude: -51.86748505,
          }}
          title="casa 02"
          description="R$:300,00"
        />

        <Marker
          coordinate={{
            latitude: -23.43093654,
            longitude: -51.86267853,
          }}
          title="casa 02"
          description="R$:300,00"
        />

      </MapView>

    </View>

  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});