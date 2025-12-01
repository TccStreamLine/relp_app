import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF', // Fundo branco limpo
        paddingHorizontal: 30,
        justifyContent: 'space-between', // Distribui o conteúdo verticalmente
        paddingVertical: 50,
    },
    
    // --- Área Superior (Logo e Texto) ---
    topSection: {
        alignItems: 'center',
        marginTop: 40,
    },
    logo: {
        width: 150,
        height: 60,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    slogan: {
        fontSize: 12,
        color: '#4B0082', // Roxo da marca
        fontWeight: 'bold',
        letterSpacing: 2,
        textTransform: 'uppercase',
    },

    // --- Área Central (Ilustração) ---
    midSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    illustration: {
        width: width * 0.9, // 90% da largura da tela
        height: height * 0.35, // 35% da altura
        resizeMode: 'contain',
    },

    // --- Área Inferior (Botões) ---
    bottomSection: {
        alignItems: 'center',
        marginBottom: 20,
    },
    welcomeTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 8,
    },
    welcomeSubtitle: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
        marginBottom: 30,
        paddingHorizontal: 20,
        lineHeight: 22,
    },

    // Botão Conecte-se (Principal)
    connectButton: {
        backgroundColor: '#4B0082',
        width: '100%',
        paddingVertical: 18,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 15,
        elevation: 5,
        shadowColor: '#4B0082',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    connectButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },

    // Botão Cadastre-se (Secundário/Outline)
    registerButton: {
        backgroundColor: '#FFF',
        width: '100%',
        paddingVertical: 18,
        borderRadius: 16,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#F3EFFF', // Borda sutil
    },
    registerButtonText: {
        color: '#4B0082',
        fontSize: 16,
        fontWeight: 'bold',
    },
});