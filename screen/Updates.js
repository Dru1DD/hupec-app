import React, { useState } from 'react'
import { View, Text, Pressable, ScrollView, Modal as _Modal } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import MyUpdates from '../components/MyUpdates'
import FriendUpdate from '../components/FriendUpdates'
import ButtonUpdates from '../components/ButtonUpdates'

import moment from 'moment'
import axios from 'axios'

import { styles } from '../styles/updatesStyles'

import { ADD_UPDATES } from '../redux/action/actionType'
import Modal from '../components/AddUpdatesModal'


const Updates = () => {
    const [ activePage, setActivePage ] = useState({
        first: true,
        second: false
    })
    const [ isOpen, setIsOpen ] = useState(false)

    const [ update, setUpdate ] = useState('')

    const dispatch = useDispatch()
    const { username } = useSelector(state => state.user)
    
    const addUpdates = async () => {
        const date = moment().format('DD/MMM/YYYY')

        try {
            if(update.length !== 0) {
                await axios.post('https://hupec-app.herokuapp.com/addUpdates', {
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

        setIsOpen(!isOpen)
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable
            style={[
              activePage.first ? styles.activePage : null,
              styles.myUpdates,
            ]}
            onPress={() =>
              setActivePage({
                first: true,
                second: false,
              })
            }
          >
            <Text>My Updates</Text>
          </Pressable>
          <Pressable
            style={[
              activePage.second ? styles.activePage : null,
              styles.friendsUpdates,
            ]}
            onPress={() =>
              setActivePage({
                first: false,
                second: true,
              })
            }
          >
            <Text>Friends Updates</Text>
          </Pressable>
        </View>
        <ScrollView style={styles.footer}>
          {activePage.first ? <MyUpdates /> : <FriendUpdate />}
        </ScrollView>
        <ButtonUpdates onClick={() => setIsOpen(!isOpen)} />
        <Modal
          modalVisible={isOpen}
          setModalVisible={setIsOpen}
          addUpdates={addUpdates}
          update={update}
          setUpdate={setUpdate}
        />
      </View>
    );
}

export default Updates