import React, { useState, useRef } from 'react'
import { View, Text, Pressable, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useCatchUpdates } from '../hooks/useCatchUpdates'

import MyUpdates from '../components/MyUpdates'
import FriendUpdate from '../components/FriendUpdates'
import ButtonUpdates from '../components/ButtonUpdates'

import BottomSheetBehavior from 'reanimated-bottom-sheet'
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment'
import axios from 'axios'

import { styles } from '../styles/updatesStyles'

import { ADD_UPDATES } from '../redux/action/actionType'


const Updates = () => {
    const [ activePage, setActivePage ] = useState({
        first: true,
        second: false
    })

    const sheetRef = useRef(null)
    const [ update, setUpdate ] = useState('')

    const dispatch = useDispatch()
    const { username } = useSelector(state => state.user)

    
    const addUpdates = async () => {
        const date = moment().format('DD/MMM/YYYY')

        try {
            if(update.length !== 0) {
                await axios.post('http://localhost:6000/addUpdates', {
                            username,
                            data: date,
                            textBody: update
                        })

                await dispatch({
                    type: ADD_UPDATES,
                    payload: {
                        data: date,
                        textBody: update
                    }
                })
                setUpdate('')    
            }
            
        } catch (e) {
            console.log(e)
        }
    }

    const renderBottomSheetContent = () => {

        return (
            <View style={styles.bottomSheetContainer}>
                <View style={styles.bottomSheetTitle}>
                    <Text style={{ fontSize: 18}}>New update</Text>
                </View>
                <View style={styles.bottomSheetMain}>
                    <TextInput
                        multiline={true}
                        numberOfLines={12}
                        value={update}
                        onChangeText={setUpdate}
                        onEndEditing={addUpdates}
                        placeholder={"Description"}
                    />
                </View>
                <TouchableOpacity
                    style={styles.bottomSheetButton}
                    onPress={() => addUpdates()}
                >
                    <AntDesign name="arrowright" size={18} color="white" />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable 
                    style={[ activePage.first ? styles.activePage: null, styles.myUpdates]}
                    onPress={() => setActivePage({
                        first: true,
                        second: false
                    })}
                >
                    <Text>My Updates</Text>
                </Pressable>
                <Pressable 
                    style={[ activePage.second ? styles.activePage : null, styles.friendsUpdates]}
                    onPress={() => setActivePage({
                        first: false,
                        second: true
                    })}
                >
                    <Text>Friends Updates</Text>
                </Pressable>
            </View>
            <ScrollView style={styles.footer}>
                {
                    activePage.first ? <MyUpdates/> : <FriendUpdate />
                }
            </ScrollView>
            <ButtonUpdates 
                onClick={() => sheetRef.current.snapTo(0)}
            />
            <BottomSheetBehavior 
                ref={sheetRef}
                snapPoints={[300, 300, 0]}
                borderRadius={10}
                renderContent={() => renderBottomSheetContent()}
            />
        </View>
    )
}

export default Updates