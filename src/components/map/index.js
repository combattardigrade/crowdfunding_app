import React, {memo, useRef, useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import styles from './style';
import {View} from 'react-native';
const coordinates = {
  latitude: 30.39092309,
  longitude: 30.390239,
};
export default memo((props) => {
  let [coor, setCoor] = useState(coordinates);
  const map_ = useRef();

  useEffect(() => {
    if (map_.current) {
      map_.current.animateCamera({center: coor});
    }
    setCoor(coordinates);
  }, [coordinates]);

  const onRegionChangeFunc = (r) => {};

  return (
    <View style={styles.main}>
      <MapView
        ref={map_}
        style={[styles.map, props.height && {height: props.height}]}
        initialRegion={{
          ...coor,
          latitudeDelta: 0.024,
          longitudeDelta: 0.029,
        }}>
        <Marker
          coordinate={{
            ...coor,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        />
      </MapView>
    </View>
  );
});
