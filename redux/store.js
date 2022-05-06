import { createStore } from 'redux' 
import { rootReducer, initialState } from './reducer/rootReducer'

export const store = createStore(
    rootReducer,
    initialState
)