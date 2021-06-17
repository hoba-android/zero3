import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';

const FastDetais13 = () => {
  return (
    <View style={styles.main}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 15,
        }}>
        <AnimatedCircularProgress
          size={70}
          width={8}
          fill={50}
          tintColor="#66538A"
          backgroundColor="#D7DFF7"
          fillLineCap={'round'}
          rotation={0}
        />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: 25,
          }}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>13 : 11</Text>
        </View>
      </View>

      <View style={{padding: 10, width: 300, marginTop: 15}}>
        <Text style={{fontSize: 18, opacity: 0.6, textAlign: 'center'}}>
          Let’s be real, sometimes we just need to give ourselves permission to
          go ham on a plate of turkey. If there’s anytime it’s appropriate to
          indulge, it’s Thanksgiving.
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {}}
        style={{
          width: 180,
          height: 40,
          borderRadius: 20,
          backgroundColor: '#2EBF8A',
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>
          Change ongoing fast
        </Text>
      </TouchableOpacity>

      <View style={styles.dashed}>
        <Text style={{fontSize: 12, marginTop: 10}}>
          TIPS TO PREPARE FOR THIS FAST
        </Text>

        <View style={styles.row}>
          <Icon name="cup" size={24} color={'#7AC3DB'} />
          <Text style={{marginLeft: 20}}>Heydrate with water</Text>
        </View>

        <View style={styles.row}>
          <Icon2 name="candy-cane" size={24} color={'#9446EC'} />
          <Text style={{marginLeft: 20}}>Avoid prodcessed food</Text>
        </View>

        <View style={styles.row}>
          <Icon3 name="food-apple" size={24} color={'#0AB68F'} />
          <Text style={{marginLeft: 20}}>Prepare healthy and fresh food</Text>
        </View>
      </View>
    </View>
  );
};

export default FastDetais13;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  dashed: {
    width: '80%',
    height: 200,

    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderStyle: 'dashed',
    alignItems: 'center',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: 20,
    justifyContent: 'space-between',

    marginTop: 20,
  },
});
