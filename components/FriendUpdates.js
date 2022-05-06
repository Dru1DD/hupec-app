import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import { useSelector } from 'react-redux'
import { useCatchUpdates } from '../hooks/useCatchUpdates'

const FriendUpdate = () => {

    // const { friendsUpdate } = useCatchUpdates()
    const { friendsUpdates } = useSelector(state => state.user)
    return(
        <ScrollView>
        { friendsUpdates && friendsUpdates.length !== 0 ? friendsUpdates.map((item, key) => {
            if (!item.textBody) return null

            return (
                <View style={styles.container} key={key}>
                    <View>
                        <Text>{item.data}</Text>
                    </View>
                    <View>
                        <Text>{item.textBody}</Text>
                    </View>
                </View>
            )
        }) : (
            <Text>Not a single update from friends</Text>
        )}
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },
    header: {
        margin: 5,
        padding: 10
    },
    headerAvatar: {
        width: 25,
        height: 25,
        borderRadius: 25 / 2,
        backgroundColor: 'grey',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FriendUpdate