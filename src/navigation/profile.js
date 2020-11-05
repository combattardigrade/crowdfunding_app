import React, { memo } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
// import { styles } from './style';
import { userIcon } from '../constants/images';
import { colors } from '../constants/colors';

export default memo(() => {
  return (
    <View style={styles.profileCont}>
      <View style={styles.avatar}>
        <Image source={userIcon} style={styles.avatarIcon} />
      </View>
      <View style={styles.user}>
        <Text style={styles.userName}>Juan Pérez</Text>
        <Text style={styles.bio}>Verificación completada</Text>
      </View>
    </View>
  );
});


const styles = StyleSheet.create({
  profileCont: {
    height: 235,
    paddingTop: 73,
    paddingHorizontal: 16,
    paddingBottom: 14,
    borderBottomColor: colors.bg,
    borderBottomWidth: 2,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryBlue,
  },
  avatarIcon: {
    width: 24,
    height: 24,
  },
  userName: {
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 23,
    letterSpacing: 0.15,
    height: 35,
  },
  bio: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  user: {
    paddingTop: 32,
  },

  sideBarList: {
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  sideBarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginTop: 10,
  },
  itemIcon: {
    width: 24,
    height: 24,
  },
  iconCont: {
    width: 50
  }
});