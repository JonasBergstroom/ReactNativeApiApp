import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import {ChartDot, ChartPath, ChartPathProvider, ChartYLabel} from '@rainbow-me/animated-charts';

export const {width: SIZE} = Dimensions.get('window');


 


const Chart = ({ currentPrice, logoUrl, name, priceChangePercentage7d, sparkline, symbol }) => {
    const priceChangeColour = priceChangePercentage7d > 0 ? "green" : "red";


    const formatUSD = value => {

        'worklet';
        if (value === '') {
            return `$${currentPrice.toLocaleString('en-US', { currency: 'USD' })}`;
        }

        const formattedValue =`$${parseFloat(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`

        return formattedValue;


    };


    return (

        <ChartPathProvider data={{ points: sparkline, smoothingStrategy: 'bezier' }}>
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
                <ChartYLabel
                          format={formatUSD}
                          style={styles.boldTitle}
            />
                  { /* <Text style={styles.boldTitle}>${currentPrice.toLocaleString('en-US', { currency: 'USD' })}</Text> */ }
                    <Text style={[styles.title, {color: priceChangeColour}]}>{priceChangePercentage7d.toFixed(2)}</Text>
                </View>
            </View>

            <View style={styles.chartLineWrapper}>

            <ChartPath height={SIZE / 2} stroke='black' width={SIZE} />
            <ChartDot style={{ backgroundColor: 'blue' }} />   

            </View>

        </View>
        </ChartPathProvider>
    )
}

const styles = StyleSheet.create({

    chartWrapper: {
    marginVertical: 16,


    },
    titlesWrapper: {

    marginHorizontal: 16

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

    chartWrapper: {

        marginTop: 40,
    },

});

export default Chart
