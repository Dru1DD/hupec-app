import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'

const ButtonUpdates = ({ onClick }) => {
    return (
        <Pressable style={styles.container} onPress={onClick}>
            <Text style={styles.text}>+</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 10,
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    text: {
        fontSize: 32,
        color: '#fff'
    }
})

export default ButtonUpdates