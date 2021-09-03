import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Chart = ({ currentPrice, logoUrl, name, priceChangePercentage7d, sparkline, symbol }) => {
    const priceChangeColour = priceChangePercentage7d > 0 ? "green" : "red";


    return (
        <View styel={styles.chartWrapper}>


            {/* Titles */}

            <View style={styles.titlesWrapper}>

                <View style={styles.upperTitles}>
                    <View style={styles.upperLeftTitle}>
                        <Image source={{ uri: logoUrl }} style={styles.image} />
                        <Text style={styles.subtitle}>{name} ({symbol.toUpperCase()})</Text>
                    </View>
                    <Text style={styles.subtitle}>7d</Text>
                </View>

                <View style={styles.lowerTitle}>
                    <Text style={styles.boldTitle}>${currentPrice.toLocaleString('en-US', { currency: 'USD' })}</Text>
                    <Text style={[styles.title, {color: priceChangeColour}]}>{priceChangePercentage7d.toFixed(2)}</Text>



                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    chartWrapper: {
        margin: 16,


    },
    titlesWrapper: {




    },
    
    upperTitles: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    },
    upperLeftTitle: {

    flexDirection: 'row',
    alignItems: 'center',


    },
    image:{

    width: 24,
    height: 24,
    marginRight: 4,


    },
    subtitle: {

    fontSize: 14,
    color: 'grey',


    },
    lowerTitle: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    },

    boldTitle: {

    fontSize: 24,
    fontWeight: 'bold'

    },
    title: {

    fontSize: 18,
    },

});

export default Chart
