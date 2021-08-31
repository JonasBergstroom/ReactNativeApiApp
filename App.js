import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ListItems from './components/ListItems';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
      <Text style={styles.largeTitle}>Markets</Text>
      </View>
      <View style={styles.divider} />
      <ListItems />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  titleWrapper: {
    marginTop: 80,
    paddingHorizontal: 16,
  },


  largeTitle: {
    fontSize: 24,
    fontWeight: "bold"

  },

  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'grey',
    marginHorizontal: 16,
    marginTop: 16,


  }

});

