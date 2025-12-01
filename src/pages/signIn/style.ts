import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    // --- Cabeçalho Roxo ---
    headerContainer: {
        backgroundColor: '#4B0082',
        height: height * 0.35, // 35% da altura da tela
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 30,
        elevation: 10,
        shadowColor: '#4B0082',
        shadowOpacity: 0.3,
        shadowRadius: 20,
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 25,
        zIndex: 10,
        padding: 8,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 12,
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 5,
    },
    headerSubtitle: {
        fontSize: 16,
        color: 'rgba(255,255,255,0.8)',
    },

    // --- Área do Formulário ---
    formContainer: {
        flex: 1,
        marginTop: -40, // Faz o formulário "subir" por cima do roxo
        paddingHorizontal: 30,
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 24,
        padding: 30,
        elevation: 5, // Sombra suave
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    
    // --- Inputs ---
    inputLabel: {
        fontSize: 14,
        color: '#4B0082',
        fontWeight: '600',
        marginBottom: 8,
        marginTop: 15,
    },
    inputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3EFFF', // Fundo roxo bem clarinho para o input
        borderRadius: 12,
        paddingHorizontal: 15,
        height: 55,
        borderWidth: 1,
        borderColor: 'transparent', // Pode mudar para roxo ao focar (se quiser)
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        marginLeft: 10,
    },
    icon: {
        color: '#888',
    },

    // --- Botão Entrar ---
    signInButton: {
        backgroundColor: '#4B0082',
        borderRadius: 16,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        elevation: 5,
        shadowColor: '#4B0082',
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 4 },
    },
    signInButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },

    // --- Rodapé ---
    footerLink: {
        marginTop: 20,
        alignItems: 'center',
    },
    forgotPasswordText: {
        color: '#4B0082',
        fontSize: 14,
        fontWeight: 'bold'
    },
});