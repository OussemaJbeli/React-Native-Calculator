import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    monitor_chow: {
        width: '100%',
        height: '50%',
        backgroundColor: '#ffffff',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingRight: 20,
        paddingBottom: 20,
    },
    monitor_buttons: {
        borderWidth: 1,
        borderTopColor: '#ccc',
        width: '100%',
        height:'50%',
        backgroundColor: '#ffffff',
    },
    monitorText: {
        fontSize: 50,
    },
    resultText: {
        fontSize: 30,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height:'20%',
    },
    button: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
        width: "25%",
        height: '50%',
    },
    buttonText: {
        fontSize: 30,
    },
    buttonTextoperator: {
        color: '#fff',
        fontSize: 40,
    },
    operatorButton: {
        backgroundColor: '#ff6426',
        borderRadius: 50,
        width: '50%',
        height:"80%",
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    operatorButtonText: {
        color: '#ff6426',
        fontSize: 35,
    },
});

export default styles;