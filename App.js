import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Gamebox from './components/gamebox.js';



export default class App extends React.Component {
  render() {
    return (
    <View style={pStyle.parent}>
      <View style={hStyle.header}>
        <Text style={tStyle.text}>Hunting Party</Text>
      </View>
      <View style={cStyle.container}>
        <Gamebox />
      </View>
    </View>
    );
  }
}


const pStyle = StyleSheet.create({
  parent: {
    flex: 1,
  },
});

const hStyle = StyleSheet.create({
  header: {
    flex: .5,
    backgroundColor: '#b72234',
    borderColor: '#05386B',
    borderBottomWidth: 2,
  },
});

const cStyle = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#b72234',
  },
});

const tStyle = StyleSheet.create({
  text: {
    fontSize: 40,
    marginTop: 10,
    textAlign: 'center',
    color:'#f9d759',
  },
});
