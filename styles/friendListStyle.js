import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        padding: 5
    },
    header: {
        width: '100%',
        height: '35%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    headerTab: {
        borderBottomWidth: 1,
        borderColor: '#DADADA'
    },
    active: {
        borderBottomColor: '#363636'
    },
    footer: {
        width: '100%',
        height: 125
    },
    friendItem: {
        width: '100%',
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center'
    }, 
    friendAvatar: {
        width: 50,
        height: 50,
        backgroundColor: '#6750A420',
        borderRadius: 50 /2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    friendEmpty: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})