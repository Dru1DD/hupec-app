import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#E5E5E5'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 46
    },
    footer: {
        flex: 4,
        justifyContent: 'flex-start',
        alignItems:'center'
    },
    action: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%'
    },
    actionText: {
        fontSize: 18,
        alignSelf: 'flex-start',
        marginLeft: 20
    },
    actionInput: {
        width: '100%',
        margin: 15,
        padding: 5,
        borderRadius: 15,
        backgroundColor: 'white'
    },
    button: {
        marginTop: 50,
        width: 200,
        height: 40,
        backgroundColor: 'red',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    }
})