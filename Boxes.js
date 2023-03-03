import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Boxes extends React.Component{
render() {
  return(
    <View style={styles.container}>

        <view style={styles.box}>
         <view style={styles.inner}>
            <Text>Drama</Text>
            </view>
            </view>

            <view style={styles.box}>
         <view style={styles.inner}>
            <Text>Comic</Text>
            </view>
            </view>

            <view style={styles.box}>
         <view style={styles.inner}>
            <Text>Sci-Fi</Text>
            </view>
            </view>

            <view style={styles.box}>
         <view style={styles.inner}>
            <Text>Comics</Text>
            </view>
            </view>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '85%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  box: {
    width: '50%',
    height: '50%',
    padding: 5,
  },
    inner {
       flex: 1,
       backgroundColor: '#eee',
       alignItems: 'center',
       justifyContent: 'center'

    }

});