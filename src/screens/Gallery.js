import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Gallery = ({navigation}) => {
  const [data, setData] = React.useState();
  useEffect(() => {
    fetch(
      'https://api.unsplash.com/photos/random?count=30&client_id=_77970I8pPKgwpiVSGm2pBrd6b9D4BjOyDlNtpvPW8U',
    )
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
    console.log('data from h\n', data);
  }, []);

  const renderImage = image => {
    return (
      <View style={{flex: 1, alignItems: 'center', padding: 10}}>
        <View style={{height: 300, width: 350}}>
          <Image
            style={{flex: 1, height: null, width: null}}
            source={{uri: image.urls.regular}}
          />
        </View>
      </View>
    );
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('own Gallery')}
        style={{
          width: '90%',
          height: 50,
          borderRadius: 5,
          backgroundColor: 'teal',
          margin: 10,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'orange', fontSize: 18, fontWeight: 'bold'}}>
          Go to your own gallery
        </Text>
      </TouchableOpacity>
      <FlatList
        scrollEnabled={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={data}
        renderItem={({item}) => renderImage(item)}
      />
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({});
