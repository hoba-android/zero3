import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{activeTintColor: 'orange'}}
        animationEnabled>
        <Tab.Screen
          name="Timer"
          component={Timer}
          options={{
            tabBarLabel: 'Timer',
            tabBarIcon: ({color, size}) => (
              <Icon name="timer" size={24} color="grey" />
            ),
          }}
        />

        <Tab.Screen
          name="Fasts"
          component={Router}
          options={{
            tabBarLabel: 'Fasts',
            tabBarIcon: ({color, size}) => (
              <Icon2 name="file-alt" size={24} color="grey" />
            ),
          }}
        />

        <Tab.Screen
          name="History"
          component={History}
          options={{
            tabBarLabel: 'History',
            tabBarIcon: ({color, size}) => (
              <Icon3 name="bar-graph" size={24} color={'grey'} />
            ),
          }}
        />

        <Tab.Screen
          name="Learn"
          component={Learn}
          options={{
            tabBarLabel: 'Learn',
            tabBarIcon: ({color, size}) => (
              <Icon4 name="open-book" size={24} color={'grey'} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default HomeTabNavigator;
