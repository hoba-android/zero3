import React, {useRef} from 'react';
import {
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
  FlatList,
  StatusBar,
} from 'react-native';

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

import HistoryComp from './components/HistoryComp';
import {useSelector, useDispatch} from 'react-redux';

const {width, height} = Dimensions.get('screen');

const SPACING = 20;
const ITEM_SIZE = 100;

const History = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const fasts = useSelector(state => state.fasts.fasts);
  // console.log(fasts);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Image
        source={require('../assets/history_bg.jpg')}
        style={StyleSheet.absoluteFillObject}
        blurRadius={7}
        resizeMode={'stretch'}
      />
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>History</Text>
      <Animated.FlatList
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: StatusBar.currentHeight || 12,
        }}
        contentContainerStyle={{
          paddingTop: StatusBar.currentHeight || 45,
        }}
        showsVerticalScrollIndicator={false}
        data={fasts}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 1),
          ];
          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];
          const scale = scrollY.interpolate({
            inputRange: inputRange,
            outputRange: [2, 1, 1, 0],
          });
          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0],
          });

          return (
            <Animated.View style={{transform: [{scale}]}}>
              <HistoryComp
                type={item.type}
                duration={item.duration}
                date={item.date}
              />
            </Animated.View>
          );
        }}
      />
      <StatusBar hidden />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({});
