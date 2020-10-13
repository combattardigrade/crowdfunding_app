import React, {memo, useState} from 'react';
import {View, Dimensions} from 'react-native';
import styles from './style';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {colors} from '../../constants/colors';
import Compana from './tabScreens/compana';
import Details from './tabScreens/details';
import Garantia from './tabScreens/garantia';
import Randim from './tabScreens/randim';

const initialLayout = {width: Dimensions.get('window').width};

export default memo(() => {
  const [index, setIndex] = useState(0);
  const [dynamic_height, setDynamic] = useState(1600);
  const [routes] = useState([
    {key: 'first', title: 'Campaña'},
    {key: 'second', title: 'Garantía'},
    {key: 'third', title: 'Detalles'},
    {key: 'four', title: 'Rendimiento'},
  ]);

  const renderScene = SceneMap({
    first: Compana,
    second: Garantia,
    third: Details,
    four: Randim,
  });

  const _onTabChange = (index) => {
    switch (index) {
      case 0:
        setDynamic(1600);
        setIndex(index);
        break;
      case 1:
        setDynamic(800);
        setIndex(index);
        break;
      case 2:
        setDynamic(1550);
        setIndex(index);
        break;
      case 3:
        setDynamic(700);
        setIndex(index);
        break;
    }
  };

  return (
    <View style={styles.tabView}>
      <TabView
        style={{height: dynamic_height}}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            tabStyle={styles.inActiveindicator}
            labelStyle={styles.labelStyle}
            inactiveColor="rgba(0,0,0,.4)"
            activeColor={colors.primaryDark}
            style={{backgroundColor: 'transparent'}}
            indicatorStyle={styles.indicator}
          />
        )}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={_onTabChange}
        initialLayout={initialLayout}
      />
    </View>
  );
});
