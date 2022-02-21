import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Map() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:"absolute",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    bottom:-320,
  },
  map: {
    width: 405,
    height: 150,
  },
});