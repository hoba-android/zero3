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
const {width, height} = Dimensions.get('screen');
const DATA = [
  {
    id: 1,
    type: 18,
    duration: '10 hours',
    date: 'June, 1',
  },
  {
    id: 2,
    type: 20,
    duration: '22 hours',
    date: 'June, 2',
  },
  {
    id: 3,
    type: 20,
    duration: '12 hours',
    date: 'June, 3',
  },
  {
    id: 4,
    type: 13,
    duration: '16 hours',
    date: 'June, 4',
  },
  {
    id: 5,
    type: 16,
    duration: '16 hours',
    date: 'June, 5',
  },
  {
    id: 6,
    type: 16,
    duration: '17 hours',
    date: 'June, 6',
  },
  {
    id: 7,
    type: 18,
    duration: '19 hours',
    date: 'Jan, 23',
  },
  {
    id: 8,
    type: 13,
    duration: '10 hours',
    date: 'Oct, 29',
  },
  {
    id: 9,
    type: 13,
    duration: '12 hours',
    date: 'Nov, 20',
  },
  {
    id: 10,
    type: 20,
    duration: '23 hours',
    date: 'May, 30',
  },
];

const SPACING = 20;
const ITEM_SIZE = 100;

const History = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

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
        data={DATA}
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
