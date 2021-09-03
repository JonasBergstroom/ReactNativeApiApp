import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native'

const ListItems = ({ name, symbol, currentPrice, priceChangePercentage7d, logoUrl, onPress }) => {

    const priceChangeColour = priceChangePercentage7d > 0 ? "green" : "red";
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.itemWrapper}>

                {/* Left side View */}

                <View style={styles.LeftWrapper}>
                    <Image source={{ uri: logoUrl }} style={styles.image} />
                    {/* Title */}
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
                    </View>
                </View>

                {/* Right side View */}

                <View style={styles.RightWrapper}>
                    <Text style={styles.title}>${currentPrice.toLocaleString('en-US', { currency: 'USD' })}</Text>
                    <Text style={[styles.subtitle, { color: priceChangeColour }]}>{priceChangePercentage7d.toFixed(2)}%</Text>
                </View>


            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    itemWrapper: {
        paddingHorizontal: 16,
        marginTop: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },

    LeftWrapper: {
        flexDirection: "row",
        alignItems: "center",


    },
    image: {
        height: 48,
        width: 48,
    },
    titleWrapper: {
        marginLeft: 8,

    },
    title: {
        fontSize: 18,
    },
    subtitle: {
        marginTop: 4,
        fontSize: 14,
        color: "grey",
    },
    RightWrapper: {
        alignItems: "flex-end",
    },


})

export default ListItems
