import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {mainStyles} from '../../global-styles/global-styles';
import VirtualizedView from '../../helpers/virtualized-view';
import Splash from '../../components/common/splash';

const HomeScreen = props => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);

  return (
    <View style={[mainStyles.mainContainer, {paddingHorizontal: 0}]}>
      {load && <Splash />}
      <VirtualizedView>
        <View style={mainStyles.titleBlock}>
          <Text style={mainStyles.secondTitle}>ОБЩАЯ ЧАСТЬ</Text>
        </View>

        <View></View>

        <View style={mainStyles.titleBlock}>
          <Text style={mainStyles.secondTitle}>ОСОБЕННАЯ ЧАСТЬ</Text>
        </View>

        <View></View>
      </VirtualizedView>
    </View>
  );
};

export default HomeScreen;
