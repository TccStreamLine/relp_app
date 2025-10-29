import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3EFFF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#4B0082',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#333',
        textAlign: 'center',
        marginBottom: 40,
    },
    button: {
        backgroundColor: '#4B0082',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 50,
        elevation: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});