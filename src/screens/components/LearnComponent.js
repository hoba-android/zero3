import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const LearnComponent = () => {
  const ImgUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTklrpDhPqtFECV8_gXlFn_f_vehuk0GNrZUw&usqp=CAU';
  return (
    <View style={{width: '90%'}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 15,
          color: 'black',
        }}>
        Weekly Advise
      </Text>
      <View style={styles.card}>
        <Image
          source={{uri: ImgUrl}}
          style={{
            height: 200,
            width: '96%',
            resizeMode: 'cover',
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            marginBottom: 5,
          }}
        />
        <Text
          style={{
            alignSelf: 'flex-start',
            paddingHorizontal: 12,

            fontSize: 24,
            fontWeight: 'bold',
            marginLeft: 10,
          }}>
          Try more protiens today
        </Text>
        <Text
          style={{
            alignSelf: 'flex-start',
            paddingHorizontal: 12,
            fontSize: 16,
            paddingVertical: 8,
            marginLeft: 10,
          }}>
          Zero
        </Text>
        <Text
          style={{
            alignSelf: 'flex-start',
            paddingHorizontal: 12,
            marginLeft: 10,
          }}>
          May 18, 2020
        </Text>
      </View>
    </View>
  );
};

export default LearnComponent;

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    width: '100%',
    borderRadius: 10,

    paddingBottom: 10,

    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,

    elevation: 10,
  },
});
