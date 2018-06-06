import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Panel from './panel.js';

export default class Gamebox extends React.Component {
  render() {
    return(
    <View style={{flex:.9}}>
      <View style={styles.gbox}>
        <Panel />
        <Panel />
        <Panel />
      </View>
      <View style={styles.gbox}>
        <Panel />
        <Panel />
        <Panel />
      </View>
      <View style={styles.gbox}>
        <Panel />
        <Panel />
        <Panel />
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  gbox: {
    backgroundColor: '#05386B',
    flex: 1,
    flexDirection: 'row',
  },
});
