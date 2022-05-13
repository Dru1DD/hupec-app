import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
      height: 75,
        borderWidth: 1,
        borderColor: 'lightgrey',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    myUpdates: {
        height: '100%',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    friendsUpdates: {
        height: '100%',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    activePage: {
        borderBottomWidth: 1,
        borderBottomColor: 'blue'
    },
    footer: {
        width: '100%'
    }
})