import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'

const ListItems = () => {
    return (
        <TouchableOpacity>
            <View style={styles.itemWrapper}>

            {/* Left side View */}

            <View style={styles.LeftWrapper}>
                <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Ethereum-icon-purple.svg" }} style={styles.image}/>
            {/* Title */}
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Ethereum</Text>
                <Text style={styles.subtitle}>ETH</Text>
            </View>
            </View>

            {/* Right side View */}

            <View style={styles.RightWrapper}>
                <Text style={styles.title}>Ethereum</Text>
                <Text style={[styles.subtitle, {color: 'red'}]}>ETH</Text>
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
        backgroundColor: "grey",
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
