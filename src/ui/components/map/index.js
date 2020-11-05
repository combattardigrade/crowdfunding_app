import React, { memo, useRef, useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import styles from './style';
import { View, Dimensions } from 'react-native';
const coordinates = {
  latitude: 30.39092309,
  longitude: 30.390239,
};

const window = Dimensions.get('window');
const { width, height } = window
const LATITUD_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUD_DELTA + (width / height)

export default memo((props) => {
  let [coor, setCoor] = useState({ latitude: props.lat, longitude: props.lng });
  const map_ = useRef();

  useEffect(() => {
    if (map_.current) {
      map_.current.animateCamera({ center: coor });
    }
    setCoor(coordinates);
  }, [coordinates]);

  const onRegionChangeFunc = (r) => { };

  return (
    <View style={styles.main}>
      <MapView
        ref={map_}
        style={[styles.map, props.height && { height: props.height }]}
        initialRegion={{
          latitude: props.lat,
          longitude: props.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        z
      >
        <Marker
          coordinate={{
            latitude: props.lat,
            longitude: props.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        />
      </MapView>
    </View>
  );
});
