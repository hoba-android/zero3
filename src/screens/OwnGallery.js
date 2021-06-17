import React, {useState} from 'react';
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

// import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';

var ImagePicker = NativeModules.ImageCropPicker;

const OwnGallery = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [images, setImages] = useState(null);

  const cleanupImages = () => {
    ImagePicker.clean()
      .then(() => {
        // console.log('removed tmp images from tmp directory');
        alert('Temporary images history cleared');
      })
      .catch(e => {
        alert(e);
      });
  };

  const pickMultiple = () => {
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      includeExif: true,
      forceJpg: true,
    })
      .then(images => {
        setImage(null);
        setImages(
          images.map(i => {
            console.log('received image', i);
            return {
              uri: i.path,
              width: i.width,
              height: i.height,
              mime: i.mime,
            };
          }),
        );
      })
      .catch(e => alert(e));
  };

  const renderImage1 = image => {
    return (
      <Image
        style={{width: 200, height: 200, resizeMode: 'contain'}}
        source={image}
      />
    );
  };

  const renderAsset = image => {
    if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
      return renderVideo(image);
    }

    return renderImage(image);
  };

  const getImage = async () => {
    const images = await AsyncStorage.getItem('images');
    setImages(images);
  };

  const chooseFromGallery = () => {
    pickMultiple();
    // console.log('gallery');
    // ImagePicker.openPicker({
    //   width: 300,
    //   height: 400,
    //   cropping: true,
    // })
    //   .then(image => {
    //     // console.log(image);
    //     // AsyncStorage.setItem('images', [
    //     //   {
    //     //     id: Date(),
    //     //     image: JSON.stringify(image.path),
    //     //   },
    //     // ]);
    //     // setImages(images.push(image.path));
    //     console.log(image.path);
    //   })
    //   .catch(function (error) {
    //     console.log('There has been a problem with your fetch operation: ');
    //     // ADD THIS THROW error
    //     throw error;
    //   });
  };

  const takeWithCamera = () => {
    // // console.log('gallery');
    // ImagePicker.openCamera({
    //   width: 300,
    //   height: 400,
    //   cropping: true,
    // })
    //   .then(image => {
    //     console.log('images befor', images);
    //     const p = image['path'];
    //     setImages(p);
    //     setModalVisible(false);
    //     console.log('images after', images);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  const renderImage = image => {
    return (
      <View style={{flex: 1, alignItems: 'center', padding: 10}}>
        <View style={{height: 300, width: 350}}>
          <Image style={{flex: 1, height: 200, width: 200}} source={image} />
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
});
