import { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import Modal from '../components/Modal'

import { styles } from '../styles/loginStyles'

import { useDispatch } from 'react-redux'

import axios from 'axios'

import { ADD_USER_INFO } from '../redux/action/actionType'


const Login = ({ navigation }) => {

    const [ email, setEmail ] = useState('')
    const [ userID, setUserID ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ isError, setIsError ] = useState(false)

    const dispatch = useDispatch()

    const loginHandler = async () => {
        try {
            const response = await axios
                .post('http://localhost:6000/login', {
                    username,
                    email
                })
                setUserID(response.data.id)
            
        } catch (e) {
            console.log(e)
            return setIsError(!isError)
        }


        if(!isError) {
            await dispatch({
                type: ADD_USER_INFO,
                payload: {
                    id: userID,
                    email: email,
                    username: username,
                    subscriber: [],
                    subscriptions: [],
                    updates: [],
                    friendsUpdates: []
                }
            })

            navigation.navigate('Root')
        }
    }
 
    const registrationHandler = async () => {

        try {
            const response = await axios.post('http://localhost:6000/registration', {
                email, 
                username
            })
            setUserID(response.data._id)
        } catch (e) {
            return setIsError(!isError)
        }

        if(!isError) {
            await dispatch({
                type: ADD_USER_INFO,
                payload: {
                    id: userID,
                    email: email,
                    username: username,
                    subscriber: [],
                    subscriptions: [],
                    updates: [],
                    friendsUpdates: []
                }
            })

            navigation.navigate('Root')
        }
    }

    return (
        <View style={styles.main}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Login</Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.action}>
                    <Text style={styles.actionText}>Email</Text>
                    <TextInput 
                        style={styles.actionInput}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="user@gmail.com"
                        autoCapitalize='none'
                    />
                </View>
                <View style={styles.action}>
                    <Text style={styles.actionText}>Nickname</Text>
                    <TextInput 
                        style={styles.actionInput}
                        value={username}
                        onChangeText={setUsername}
                        placeholder="Nickname"
                        autoCapitalize='none'
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={registrationHandler}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={loginHandler}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Modal 
                    modalVisible={isError}
                    setModalVisible={setIsError}
                    errorText={"Проверьте правильность введённых данных и повторите попытку"}
                />
            </View>
        </View>
    )
}

export default Login


/**
 * Nocode API : 
 * https://v1.nocodeapi.com/dru1dd/google_sheets/rbETzjmzroxnFHOZ?tabId=users  axios get
 * https://v1.nocodeapi.com/dru1dd/google_sheets/rbETzjmzroxnFHOZ?tabId=users axios post
 */  

// **** Login *******

// response.data.data.map(async (item:any) => {
        //     if(item.Email === email) {
        //         if(item.Username === username) {
        //             await dispatch({
        //                     type: ADD_USER_INFO,
        //                     payload: {
        //                         id: item.UserID,
        //                         email: item.Email,
        //                         username: item.Username
        //                     }
        //                 })
        //                 navigation.navigate('Root')
        //         } else {use
        //             setIsError(!isError)
        //         }
        //     } else {
        //         setIsError(!isError)
        //     }
        // })


        // **** Registration ****
        // let response: any
        // try {
        //     response = await axios.post('https://v1.nocodeapi.com/dru1dd/google_sheets/rbETzjmzroxnFHOZ?tabId=users', {
        //         userId,
        //         email,
        //         username
        //     })
        // } catch (e) {
        //     setIsError(!isError)
        // }