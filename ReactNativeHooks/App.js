import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

let {height, width} = Dimensions.get('window');

const App = () => {
  const [like, setLike] = useState(6);
  const [dislike, setDislike] = useState(1);
  const [likeColor, setLikeColor] = useState('darkcyan');
  const [dislikeColor, setDislikeColor] = useState('red');

  useEffect(() => {
    setLikeColor(likeColor === 'darkcyan' ? 'blueviolet' : 'darkcyan');
  }, [like]);

  useEffect(() => {
    setDislikeColor(dislikeColor === 'red' ? 'brown' : 'red');
  }, [dislike]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.header}>
              <Text style={styles.headerText}>facebook</Text>
            </View>
            <Image
              source={{
                uri: 'https://source.unsplash.com/random/400x400?nature',
              }}
              style={styles.img}
            />
            <View style={styles.row}>
              <View style={styles.row}>
                <TouchableOpacity
                  onPress={() => setLike(like + 1)}
                  style={[{backgroundColor: likeColor}, styles.btn]}>
                  <Text style={styles.num}>👍 {like}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.row}>
                <TouchableOpacity
                  onPress={() => setDislike(dislike + 1)}
                  style={[{backgroundColor: dislikeColor}, styles.btn]}>
                  <Text style={styles.num}>👎 {dislike}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 65,
    backgroundColor: '#3b5998',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 4,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 16,
    paddingBottom: 3,
  },
  img: {
    width: width,
    height: height / 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  btn: {
    borderRadius: 4,
    padding: 10,
  },
  num: {
    fontSize: 20,
    marginLeft: 5,
    color: 'white',
  },
});

export default App;
