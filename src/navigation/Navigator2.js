import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon4 from 'react-native-vector-icons/Entypo';

import FastDetais13 from '../screens/FastDetais13';
import FastDetais16 from '../screens/FastDetais16';
import FastDetais18 from '../screens/FastDetais18';
import FastDetais20 from '../screens/FastDetais20';

import Fasts from '../screens/Fasts';
import History from '../screens/History';
import Learn from '../screens/Learn';
import Timer from '../screens/Timer';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Fasts'}
        component={Fasts}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={'13 hours fast'}
        component={FastDetais13}
        options={{
          title: ' 13 : 11',
        }}
      />

      <Stack.Screen
        name={'16 hours fast'}
        component={FastDetais16}
        options={{
          title: ' 16 : 8',
        }}
      />

      <Stack.Screen
        name={'18 hours fast'}
        component={FastDetais18}
        options={{
          title: ' 18 : 6',
        }}
      />

      <Stack.Screen
        name={'20 hours fast'}
        component={FastDetais20}
        options={{
          title: ' 20 : 4',
        }}
      />
    </Stack.Navigator>
  );
};

const HomeTabNavigator = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Timer'},
    {key: '2', title: 'Fasts'},
    {key: '3', title: 'History'},
    {key: '4', title: 'Learn'},
  ]);

  const renderScene = SceneMap({
    1: Timer,
    2: Router,
    3: History,
    4: Learn,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default HomeTabNavigator;
