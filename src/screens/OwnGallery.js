import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';

const OwnGallery = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const chooseFromGallery = () => {
    console.log('gallery');
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  const takeWithCamera = () => {
    console.log('gallery');
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  return (
    <View style={styles.main}>
      <ScrollView>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon
            name="add-a-photo"
            size={40}
            color="black"
            style={{marginRight: 10}}
          />
        </TouchableOpacity>

        <Modal
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
          style={{position: 'absolute', bottom: 0, left: 0, right: 0}}
          hasBackdrop={false}
          backdropOpacity={0.6}>
          <View style={styles.modalStyle}>
            <TouchableOpacity onPress={takeWithCamera} style={styles.button}>
              <Text style={{color: 'orange', fontSize: 18, fontWeight: 'bold'}}>
                Take a photo
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => chooseFromGallery()}
              style={styles.button}>
              <Text style={{color: 'orange', fontSize: 18, fontWeight: 'bold'}}>
                Choose from gallery
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.button}>
              <Text style={{color: 'orange', fontSize: 18, fontWeight: 'bold'}}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default OwnGallery;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    marginTop: 15,
  },
  button: {
    width: '90%',
    height: 50,
    borderRadius: 5,
    backgroundColor: 'teal',
    margin: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalStyle: {
    backgroundColor: '#DDDBCF',
    borderRadius: 10,
  },
});
