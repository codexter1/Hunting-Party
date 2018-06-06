import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Panel extends React.Component {
  render() {
    return(
      <View style={styles.panels}>
  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  panels: {
    backgroundColor: '#f9d759',
    borderColor: '#05386B',
    borderWidth: 2,
    borderStyle: 'solid',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // width: 88,
    // height:80,
    flex:1,
    margin: 3,
  },
});
