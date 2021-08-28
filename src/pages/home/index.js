import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Home() {
  return (
    <View>
      <MapView

        style={styles.map}

        region={{
          latitude: -23.44172527,
          longitude: -51.86645508,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        }}

        showsUserLocation="true"
        loadingEnabled
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