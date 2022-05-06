import React from 'react'
import { View, Text, ScrollView, Pressable } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useSelector } from 'react-redux'

import { styles } from '../styles/profileStyles'
import { statListArr } from '../data/data'

import { FontAwesome5 } from '@expo/vector-icons';
import FriendList from '../components/FriendList'


const Profile = ({ navigation }) => {

    const { id, email, username } = useSelector((state) => state.user)
    
    const routeFunc = () => navigation.navigate('FriendPage')

    return (
        <View style={styles.main}>
            <View style={styles.header}>
                <StatusBar />
                <Text style={styles.headerText}>Profile</Text>
            </View>
            <ScrollView style={styles.footer}>
                <View style={styles.mainInfo}>
                    <View>
                        <Text style={{ fontSize: 18 }}>{username}</Text>
                        <Text style={{ fontSize: 14 }}>{email}</Text> 
                    </View>
                    <View style={styles.mainAvatar}>
                        <Text style={{ fontSize: 18 }}>{username.charAt(0)}</Text>
                    </View>
                </View>
                <View style={styles.statistics}>
                    <Text style={styles.statHeader}>Statistic for month</Text>
                    <ScrollView style={styles.statList}>
                        {
                            statListArr.map((item, key) => {
                                return (
                                    <View style={styles.statItem} key={key}>
                                        <View style={styles.firstPart}>
                                            <View style={styles.avatar}/>
                                            <Text style={{ paddingLeft: 10 }}>{item.name}</Text>
                                        </View>
                                        <View style={styles.secondPart}>
                                           {item.isStrict ? <FontAwesome5 name="fire-alt" size={24} color="orange" /> : null}
                                            <Text style={{ paddingLeft: 5 }}>{item.dayCount} days</Text>  
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                    <View style={styles.friendPart}>
                        <View style={styles.friendHeader}>
                            <Text style={{ fontSize: 18 }}>Friend</Text>
                            <Pressable
                                onPress={() => routeFunc()}
                            >
                                <Text >Add friend</Text>
                            </Pressable>
                        </View>
                        <View style={styles.friendList}>
                            <FriendList routeFunc={routeFunc} />
                        </View>
                    </View>
                </View>
            </ScrollView>
            
        </View>
    )
}

export default Profile