import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3EFFF',
        alignItems: 'center',
        justifyContent: 'space-between', 
        paddingHorizontal: 20,
        paddingVertical: 60, 
    },
    boxTop: {
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 130, 
        resizeMode: 'contain',
    },
    slogan: {
        marginTop: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4B0082', 
    },
    boxMid: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 20,
    },
    illustration: {
        width: '90%', 
        height: 250,
        resizeMode: 'contain',
    },
    boxBottom: {
        width: '100%',
        alignItems: 'center',
    },
    connectButton: {
        backgroundColor: '#4B0082', 
        paddingVertical: 15,
        borderRadius: 50, 
        width: '90%',
        alignItems: 'center',
        marginBottom: 50,
        elevation: 10,
    },
    connectButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    registerButton: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 15,
        borderRadius: 50, 
        width: '90%',
        alignItems: 'center',
        elevation: 3, 
        marginTop: -20,
    },
    registerButtonText: {
        color: '#4B0082', 
        fontSize: 16,
        fontWeight: 'bold',
    },
});