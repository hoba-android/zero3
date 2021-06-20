import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
  Image,
  NativeModules,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';

const OwnGallery = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [images, setImages] = useState([]);

  const getImage = async () => {
    const storedImages = await AsyncStorage.getItem('images');
    setImages(storedImages);
  };

  const storeImge = async seneImages => {
    const images = await AsyncStorage.setItem('images', seneImages.string);
  };

  const chooseFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      multiple: true,
      height: 400,
      cropping: true,
    }).then(image => {
      const selectedImagePath = image[0].path;
      console.log(image);
      console.log('images', images);
      setModalVisible(false);
      images.push(selectedImagePath);
      console.log('images', images);
      // storeImge(images);
    });
  };

  const takeWithCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      const selectedImagePath = image['path'];
      console.log('images', images);
      setModalVisible(false);
      images.push(selectedImagePath);
      console.log('images', images);
    });
  };

  const renderImage = image => {
    return (
      <View style={{alignItems: 'center', padding: 10}}>
        <View>
          <Image
            style={{
              height: 200,
              width: 350,
              resizeMode: 'cover',
              marginBottom: 20,
            }}
            source={{
              uri: image,
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.main}>
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

      <FlatList
        scrollEnabled={true}
        pagingEnabled
        data={images}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => renderImage(item)}
      />
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
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 2,
  },
});

// {"cropRect": {"height": 960, "width": 719, "x": 120, "y": 0},
//  "height": 400,
//  "mime": "image/jpeg",
//   "modificationDate": "1624193418000",
//    "path": "file:///storage/emulated/0/Android/data/com.zero/files/Pictures/4210bb0e-3c0d-407c-9665-29c0bb3f8106.jpg",
//    "size": 64120, "width": 300}
