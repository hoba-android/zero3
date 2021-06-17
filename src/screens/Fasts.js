import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Fasts = ({navigation}) => {
  const typeColors = {
    13: '#66538A',
    16: '#E08372',
    18: '#438D90',
    20: '#E8AD6B',
  };
  return (
    <ScrollView>
      <View
        style={{alignItems: 'center', justifyContent: 'center', margin: 30}}>
        <Text style={{fontSize: 16, marginBottom: 20, fontWeight: 'bold'}}>
          Fasts
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('13')}
          style={[styles.typeButton, {backgroundColor: typeColors[13]}]}>
          <Text style={styles.line1}>13 HOURS</Text>
          <Text style={styles.line2}>Circadian Rhythm TRF</Text>
          <Text style={styles.line3}>
            This fast starts at sunset and lasts to morning.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('16')}
          style={[styles.typeButton, {backgroundColor: typeColors[16]}]}>
          <Text style={styles.line1}>16 HOURS</Text>
          <Text style={styles.line2}>16:8 TRF</Text>
          <Text style={styles.line3}>
            A 16-hour fast with an 8 hour feeding window.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('18')}
          style={[styles.typeButton, {backgroundColor: typeColors[18]}]}>
          <Text style={styles.line1}>18 HOURS</Text>
          <Text style={styles.line2}>18:6 TRF</Text>
          <Text style={styles.line3}>
            A 18-hour fast with an 6 hour feeding window.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('20')}
          style={[styles.typeButton, {backgroundColor: typeColors[20]}]}>
          <Text style={styles.line1}>20 HOURS</Text>
          <Text style={styles.line2}>20:4 TRF</Text>
          <Text style={styles.line3}>
            A 20-hour fast with an 4 hour feeding window.
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Fasts;

const styles = StyleSheet.create({
  typeButton: {
    width: 280,
    height: 120,
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
  },
  line1: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 12,
    opacity: 0.7,
  },
  line2: {color: 'white', fontWeight: 'bold', marginBottom: 10, fontSize: 16},
  line3: {color: 'white', marginBottom: 10, opacity: 0.7},
});
