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

const sampleVid = 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';

import LearnComponent from './components/LearnComponent';
import VideoPlayer from './components/VideoPlayer';

const Learn = ({navigation}) => {
  const [paused, setPuased] = useState(true);
  const [controls, setContols] = useState(false);

  const seekLeft = () => {};
  const seekRight = () => {};

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
