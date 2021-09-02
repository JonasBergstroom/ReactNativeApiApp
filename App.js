import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import ListItems from './components/ListItems';
import { SAMPLE_DATA } from './components/data/sampleData';

const ListHeader = () => (
  <>

    <View style={styles.titleWrapper}>
      <Text style={styles.largeTitle}>Markets</Text>
    </View>
    <View style={styles.divider} />

  </>


)

export default function App() {
  return (
    <SafeAreaView style={styles.container}>


      <FlatList

        keyExtractor={(item) => item.id}
        data={SAMPLE_DATA}
        renderItem={({ item }) => (

          <ListItems

            name={item.name}
            symbol={item.symbol}
            currentPrice={item.current_price}
            priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
            logoUrl={item.image}

          />
        )}
        ListHeaderComponent={<ListHeader />}
      />

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  titleWrapper: {
    marginTop: 20,
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

