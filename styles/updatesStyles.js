import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0.13,
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
        flex:4,
    },
    bottomSheetContainer: {
        backgroundColor: 'white',
        padding: 16,
        height: 300,
    },
    bottomSheetTitle: {
        padding: 5,
    },
    bottomSheetMain: {
        padding: 5
    },
    bottomSheetButton: {
        height: 35,
        width: '95%',
        margin: 15,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'grey',
        justifyContent: 'center',
        borderRadius: 10,
        alignItems: 'center'
    }
})