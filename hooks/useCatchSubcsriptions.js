import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'
import { ADD_ALL_SUBSCRIBER, ADD_ALL_SUBSCRTIPTION } from '../redux/action/actionType'

export const useCatchSubcsriptions = () => {

    const [ subscriptionsData, setSubscriptionsData ] = useState(null)
    const [ subscribersData, setSubscribersData ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    const { username } = useSelector((state) => state.user)

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchUsers = async (name) => {
            await console.log(name)

            const response = await axios.get('http://localhost:6000/getAllSubscriber', {
                username: username
            }).finally(() => setLoading(!loading))

            await dispatch({
                type: ADD_ALL_SUBSCRIBER,
                payload: response.data.subscribers
            })

            await dispatch({
                type: ADD_ALL_SUBSCRTIPTION,
                payload: response.data.subscribers
            })

            setSubscriptionsData(response.data.subscriptions)
            setSubscribersData(response.data.subscribers)
        }

        fetchUsers(username)
    }, [])

    const fetchUsers = async () => {
        const response = await axios.get('http://localhost:6000/getAllSubscriber', {
            username
        })
        
        setSubscriptionsData(response.data)
    }
    
    return {
        subscriptionsData,
        subscribersData,
        fetchUsers,
        loading
    }
}


/***
 *          NOCODEAPI LOGIC
 *         const fetchUsers = async() => {
            const result = await axios.get('https://v1.nocodeapi.com/dru1dd/google_sheets/rbETzjmzroxnFHOZ?tabId=friends')

            setSubscriptionsData(() => {
                return result.data.data.map((item: any) => {
                    if(id === item.id) {
                        return {
                            name: item.username,
                            id: item.id
                        }
                    }
                })
            })
        }

        fetchUsers()
 */