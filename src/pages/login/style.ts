import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3EFFF',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    boxTop: {
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 80,
        resizeMode: 'contain',
    },
    slogan: {
        marginTop: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#5E35B1',
    },
    boxMid: {
        width: '100%',
        alignItems: 'center',
    },
    illustration: {
        width: 300,
        height: 250,
    },
    boxBottom: {
        width: '100%',
        alignItems: 'center',
    },
    connectButton: {
        backgroundColor: '#5E35B1',
        paddingVertical: 15,
        borderRadius: 25,
        width: '90%',
        alignItems: 'center',
        marginBottom: 15,
        elevation: 5,
    },
    connectButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    registerButton: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 15,
        borderRadius: 25,
        width: '90%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#DDDDDD',
    },
    registerButtonText: {
        color: '#5E35B1',
        fontSize: 16,
        fontWeight: 'bold',
    },
});