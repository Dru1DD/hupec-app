import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#e5e5e5'
    },
    header: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 28,
    },
    footer: {
        flex: 6
    },
    mainInfo: {
        width: '100%',
        padding: 10,  
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#DADADA'
    },
    mainAvatar: {
        width: 50,
        height: 50,
        backgroundColor: '#6750A420',
        borderRadius: 50 /2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    statistics: {
        padding: 20,
        width: '100%',
        justifyContent: 'center'
    },
    statHeader: {
        fontSize: 18,
        paddingBottom: 10
    },
    statList: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#DADADA',
        alignSelf: 'center',
        borderRadius: 15
    },
    statItem: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5
    },
    avatar: {
        width: 50,
        height: 50,
        backgroundColor: '#6750A420',
        borderRadius: 50 /2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    firstPart: {
        flexDirection: 'row',
        alignItems: 'center',
    }, 
    secondPart: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    friendPart: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    friendHeader: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    friendList: {
        width: '100%',
        height: 200,
        borderWidth: 1,
        borderColor: '#DADADA',
        alignSelf: 'center',
        borderRadius: 15
    }
})