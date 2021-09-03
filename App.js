import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React, {useRef, useMemo, useState} from 'react';
import ListItems from './components/ListItems';
import Chart from './components/Chart';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

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

  const [selectedCoinData, setSelectedCoinData] = useState(0);


// ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['50%'], []);

  const openModal = (item) => {
    setSelectedCoinData(item);
    bottomSheetModalRef.current.present();


  }
 

  return (

    <BottomSheetModalProvider>
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
              onPress={() => openModal(item)}

            />
          )}
          ListHeaderComponent={<ListHeader />}
        />

      </SafeAreaView>

      <BottomSheetModal

        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        style={styles.bottomSheet}

        >

          { selectedCoinData ? (

          <Chart

          currentPrice={selectedCoinData.current_price}
          logoUrl={selectedCoinData.image}
          name={selectedCoinData.name}
          symbol={selectedCoinData.symbol}
          priceChangePercentage7d={selectedCoinData.price_change_percentage_7d_in_currency}
          sparkline={selectedCoinData.sparkline_in_7d.price}
          />
          )
         : null }
      </BottomSheetModal>

    </BottomSheetModalProvider>

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
  },

  bottomSheet: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 2.5,
    shadowRadius: 4,
    elevation: 5, 
  },

});

