import React, { useState } from 'react'
import { View, Text, Pressable, ScrollView, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'

import { styles } from '../styles/friendListStyle'


const FriendList= ({ routeFunc }) => {

    const [ headerActive, setHeaderActive ] = useState({
        first: true,
        second: false
    })

    const user = useSelector(state => state.user)

    return (
        <View style={styles.main}>
            <View style={styles.header}>
                <Pressable 
                    style={[ headerActive.first ? styles.active : null, styles.headerTab]}
                    onPress={() => setHeaderActive({
                        first: true,
                        second: false
                    })}
                >
                    <Text>Subscriptions</Text>
                </Pressable>
                <Pressable 
                    style={[ headerActive.second ? styles.active : null, styles.headerTab]}
                    onPress={() => setHeaderActive({
                        first: false,
                        second: true
                    })}
                >
                    <Text>Subscribers</Text>
                </Pressable>
            </View>
            <ScrollView style={styles.footer}>
                    {
                        headerActive.first ?
                            user.subscriptions && user.subscriptions.length !== 0 ? user.subscriptions.map((item, key) => {
                                return (
                                   <View style={styles.friendItem} key={key}>
                                        <View style={styles.friendAvatar}/>
                                        <Text style={{ margin: 5 }}>{item.subscriptionsName}</Text>
                                    </View> 
                                )
                                
                            }) : (
                                <View style={styles.friendEmpty}>
                                    <Text>You don't have subscriptions</Text>
                                </View>
                            )
                            : user.subscriber && user.subscriber.length !== 0 ? user.subscriber.map((item, key) => {
                                return (
                                    <View style={styles.friendItem} key={key}>
                                        <View style={styles.friendAvatar} />
                                        <Text style={{ margin: 5 }}>{item.subscriberName}</Text>
                                    </View>
                                )
                            }) : (
                                <TouchableOpacity
                                    style={styles.friendEmpty}
                                    onPress={() => routeFunc()}
                                >
                                    <Text>Add friend</Text>
                                </TouchableOpacity>
                            )
                    }
            </ScrollView>
        </View>
    )
}

export default FriendList