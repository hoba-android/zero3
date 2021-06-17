import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HeaderBackButton} from '@react-navigation/stack';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon4 from 'react-native-vector-icons/Entypo';
import Icon5 from 'react-native-vector-icons/Entypo';

import FastDetais13 from '../screens/FastDetais13';
import FastDetais16 from '../screens/FastDetais16';
import FastDetais18 from '../screens/FastDetais18';
import FastDetais20 from '../screens/FastDetais20';

import Fasts from '../screens/Fasts';
import History from '../screens/History';
import Learn from '../screens/Learn';
import Timer from '../screens/Timer';
import Gallery from '../screens/Gallery';
import OwnGallery from '../screens/OwnGallery';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const loginStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Log In'}
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Tabs'}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const GalleryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Gallery'}
        component={Gallery}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={'own Gallery'}
        component={OwnGallery}
        options={{
          title: 'My Own Gallery',
          headerStyle: {backgroundColor: '#66538A'},
          headerTitleStyle: {color: 'white'},
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );
};
const FastsStack = () => {
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
        name={'13'}
        component={FastDetais13}
        options={{
          title: ' 13 : 11',
          headerStyle: {backgroundColor: '#66538A'},
          headerTitleStyle: {color: 'white'},
          headerTintColor: 'white',
        }}
      />

      <Stack.Screen
        name={'16'}
        component={FastDetais16}
        options={{
          title: ' 16 : 8',
          headerStyle: {backgroundColor: '#E08372'},
          headerTitleStyle: {color: 'white'},
          headerTintColor: 'white',
        }}
      />

      <Stack.Screen
        name={'18'}
        component={FastDetais18}
        options={{
          title: ' 18 : 6',
          headerStyle: {backgroundColor: '#438D90'},
          headerTitleStyle: {color: 'white'},
          headerTintColor: 'white',
        }}
      />

      <Stack.Screen
        name={'20'}
        component={FastDetais20}
        options={{
          title: ' 20 : 4',
          headerStyle: {backgroundColor: '#E8AD6B'},
          headerTitleStyle: {color: 'white'},
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );
};

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarPosition={'bottom'}
      tabBarOptions={{
        activeTintColor: '#ec7068',
        inactiveTintColor: 'black',
        showIcon: true,
        labelStyle: {
          fontSize: 12,
          textTransform: 'none',
        },
      }}>
      <Tab.Screen
        name="Timer"
        component={Timer}
        options={{
          tabBarLabel: 'Timer',
          tabBarIcon: ({color, size}) => (
            <Icon name="timer" size={20} color="grey" />
          ),
        }}
      />

      <Tab.Screen
        name="Fasts"
        component={FastsStack}
        options={{
          tabBarLabel: 'Fasts',
          tabBarIcon: ({color, size}) => (
            <Icon2 name="file-alt" size={20} color="grey" />
          ),
        }}
      />

      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: 'History',

          tabBarIcon: ({color, size}) => (
            <Icon3 name="bar-graph" size={20} color={'grey'} />
          ),
        }}
      />

      <Tab.Screen
        name="Learn"
        component={Learn}
        options={{
          tabBarLabel: 'Learn',
          tabBarIcon: ({color, size}) => (
            <Icon4 name="open-book" size={20} color={'grey'} />
          ),
        }}
      />
      <Tab.Screen
        name="Gallery"
        component={GalleryStack}
        options={{
          tabBarLabel: 'Gallery',
          tabBarIcon: ({color, size}) => (
            <Icon5 name="image" size={20} color={'grey'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default loginStack;
