import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { ADD_FRIENDS_UPDATE } from '../redux/action/actionType'

const FriendUpdate = () => {

    const [ loading, setLoading ] = useState(true)
    const { username, friendsUpdates} = useSelector((state) => state.user)

    const dispatch = useDispatch() 

    useEffect(() => {
        const fetchFriendsUpdate = async () => {
            try {
                // const response = await axios.get('http://localhost:6000/getFriendsUpdate', {
                //     params: {
                //         username
                //     }
                // })

                const response = await axios.get("https://hupec-app.herokuapp.com/getFriendsUpdate", {
                    params: {
                        username
                    }
                },

                ).catch(e => console.log(e))

                await dispatch({
                    type: ADD_FRIENDS_UPDATE,
                    payload: response.data
                })

                setLoading(!loading)
            } catch (e) {
                console.log(e.message)
            }
        }

        fetchFriendsUpdate()
    }, [])
    return(
        <ScrollView>
        { loading ? (
            <View>
                <Text>Loading...</Text>
            </View>
        ) : friendsUpdates.length !== 0 ? friendsUpdates.map((friendUpdate, index)=> {
            const { friendName, friendUpdates } = friendUpdate.friendsUpdate[index]
            
            return friendUpdates.map(update => {
                return (
                    <View style={styles.container} key={update._id}>
                        <View>
                            <View><Text style={{ fontSize: 14 }}>{friendName}</Text></View>
                            <Text style={{ paddingTop: 10, paddingBottom: 10 }}>{update.data}</Text>
                        </View>
                        <View>
                            <Text>{update.textBody}</Text>
                        </View>
                    </View>
                )
                // return update.map(item => (
                //     <View style={styles.container} key={item._id}>
                //         <View>
                //             <View><Text style={{fontSize: 14}}>{update.friendName}</Text></View>
                //             <Text style={{ paddingTop: 10, paddingBottom: 10}}>{item.data}</Text>
                //         </View>
                //         <View>
                //             <Text>{item.textBody}</Text>
                //         </View>
                //     </View> 
                // ))
            })
            
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