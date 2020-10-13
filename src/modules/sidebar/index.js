import React, {memo} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import Profile from './profile';
import {drawerItems} from './drawerItems';
import {styles} from './style';

const SideBar = memo((props) => {
  const _renderItem = ({item}) => {
    return (
      <TouchableOpacity activeOpacity={0.9} style={styles.sideBarItem}>
        <View style={styles.iconCont}>
          <Image source={item.icon} style={styles.itemIcon} />
        </View>
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View>
        <Profile />
        <View style={styles.sideBarList}>
          <FlatList
            data={drawerItems}
            keyExtractor={(_, index) => index.toString()}
            renderItem={_renderItem}
          />
        </View>
      </View>
    </>
  );
});
export default SideBar;
