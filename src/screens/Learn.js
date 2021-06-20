import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Video1 from 'react-native-video';
import Sound from 'react-native-sound';

import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const sampleVid = 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';

import LearnComponent from './components/LearnComponent';
import VideoPlayer from './components/VideoPlayer';

const soundUrl =
  'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3';
const soundTitle = 'Play some music';

const Learn = ({navigation}) => {
  const [paused, setPuased] = useState(true);
  const [controls, setContols] = useState(false);

  const mySound = new Sound(soundUrl, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  });

  const playSound = () => {
    mySound.play(success => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  };

  const puaseSound = () => {
    mySound.pause();
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      setPuased(false);
      setContols(true);
    });
    navigation.addListener('blur', () => {
      setPuased(true);
      setContols(false);
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <LearnComponent />
        <Video1
          source={{
            uri: sampleVid,
          }}
          paused={paused}
          playInBackground={false}
          playWhenInactive={false}
          repeat={false}
          resizeMode={'contain'}
          style={{width: 360, height: 300, margin: 10, alignSelf: 'center'}}
          controls={controls}
        />

        <View
          style={{
            borderWidth: 2,
            borderRadius: 10,
            borderColor: 'orange',
            width: 360,
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Icon name="playlist" size={100} color="black" style={{margin: 20}} />

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={playSound}>
              <Icon2 name="play" size={40} color="black" style={{margin: 20}} />
            </TouchableOpacity>

            <TouchableOpacity onPress={puaseSound}>
              <Icon2
                name="pausecircle"
                size={40}
                color="black"
                style={{margin: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Learn;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
