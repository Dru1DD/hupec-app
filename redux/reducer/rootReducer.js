import { ADD_USER_INFO, ADD_SUBSCRIBER, ADD_SUBSCRIPTION, ADD_ALL_SUBSCRIBER, ADD_ALL_SUBSCRTIPTION, ADD_UPDATES, ADD_FRIENDS_UPDATE } from "../action/actionType"

export const initialState = {
    user: {
        id: '',
        email: '',
        username: '',
        subscriber: [],
        subscriptions: [],
        updates: [],
        friendsUpdates: []
    }
}

export const rootReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case ADD_USER_INFO: 
            return {
                ...state,
                user: action.payload
            }
        case ADD_ALL_SUBSCRIBER: 
            return {
                ...state,
                user: {
                    ...state.user,
                    subscriber: [...state.user.subscriber, action.payload]
                }
            }
        case ADD_ALL_SUBSCRTIPTION:
            return {
                ...state,
                user: {
                    ...state.user,
                    subscriptions: [...state.user.subscriptions, action.payload]
                }
            }
        case ADD_SUBSCRIBER:
            return {
                ...state,
                user: {
                    ...state.user,
                    subscriber: [...state.user.subscriber, action.payload]
                }
            }
        case ADD_SUBSCRIPTION:
            return {
                ...state,
                user: {
                    ...state.user,
                    subscriptions: [...state.user.subscriptions, action.payload]
                }
            }
        case ADD_UPDATES:

            return {
                ...state,
                user: {
                    ...state.user,
                    updates: [...state.user.updates, action.payload]
                }
            }
        case ADD_FRIENDS_UPDATE:
            return {
                ...state, 
                user: {
                    ...state.user,
                    friendsUpdates: [...state.user.friendsUpdates, action.payload]
                }
            }
        default: 
            return {...state}
    }
}