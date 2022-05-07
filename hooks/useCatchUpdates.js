import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'

import { ADD_UPDATES, ADD_FRIENDS_UPDATE } from '../redux/action/actionType'

export const useCatchUpdates = () => {
    const [ updates, setUpdates ] = useState(null)
    const [ friendsUpdates, setFriendsUpdates ] = useState(null)

    const dispatch = useDispatch()
    const { username } = useSelector(state => state.user)

    useEffect(() => {
        const fetchUpdates = async () => {

            const response = await axios.get('https://hupec-app.herokuapp.com/getUserUpdate', {
                username
            })

            await dispatch({
                type: ADD_UPDATES,
                payload: response.data
            })


            const friendsResult = await axios.get('https://hupec-app.herokuapp.com/getFriendsUpdate', {
                username
            })

            await dispatch({
                type: ADD_FRIENDS_UPDATE,
                payload: friendsResult.data
            })

            setUpdates(response.updates)
            setFriendsUpdates(friendsResult.data)
            
        }

        fetchUpdates()
    }, [])

    const fetchUpdates = async () => {
        const response = await axios.get('https://hupec-app.herokuapp.com/getUserUpdate', {
            username
        })

        await dispatch({
            type: ADD_UPDATES,
            payload: response.data
        })

        setUpdates(response.data)
    }

    const fetchFriendsUpdates = async () => {
        const response = await axios.get('https://hupec-app.herokuapp.com/getFriendsUpdate', {
            username
        })

        setFriendsUpdates(response.data)
    }


    return (
        updates,
        friendsUpdates,
        fetchUpdates,
        fetchFriendsUpdates
    )
}
