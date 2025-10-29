import { StyleSheet, Dimensions } from 'react-native';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: '#E9E3FF',
    },
    topSection: {
        backgroundColor: '#E9E3FF',
        paddingHorizontal: 20,
        paddingBottom: 60,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        position: 'relative',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4B0082',
        width: '60%',
        marginTop: 20,
    },
    
    
    blocksImage: {
        
        width: 150, 
        height: 250, 
        position: 'absolute',
        right: 15,
        top: 30,
        transform: [{ rotate: '15deg' }]
    },
    

    form: {
        flex: 1,
        padding: 30,
        marginTop: 10,
    },
    label: {
        fontSize: 16,
        color: '#666',
        marginBottom: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 25,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 10,
        color: '#333',
    },
    signInButton: {
        backgroundColor: '#4B0082',
        paddingVertical: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 20,
        elevation: 5,
    },
    signInButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    forgotPasswordText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#4B0082',
        fontWeight: '600',
    },
});