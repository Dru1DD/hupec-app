import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

const MyUpdates = () => {

    const { username, updates } = useSelector(state => state.user)

    return(
        <ScrollView>
            { updates && updates.length !== 0 ? updates.map((item, key) => {
                if(key === 0) {
                    return null
                }

                if (!item.textBody) return null
                
                return (
                    <View style={styles.container} key={key}>
                        <View>
                            <View><Text style={{fontSize: 14}}>{username}</Text></View>
                            <Text style={{ paddingTop: 10, paddingBottom: 10}}>{item.data}</Text>
                        </View>
                        <View>
                            <Text>{item.textBody}</Text>
                        </View>
                    </View>
                )
            }) : (
                <Text>Add Updates</Text>
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
export default MyUpdates