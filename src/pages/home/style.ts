import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF', // Fundo branco
    },
    // --- Cabeçalho ---
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 20,
    },
    headerLeft: {
        marginRight: 15,
    },
    headerCenter: {
        flex: 1,
    },
    locationText: {
        fontSize: 14,
        color: '#888',
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    // --- Banner ---
    bannerCard: {
        backgroundColor: '#4B0082', // Roxo escuro
        borderRadius: 20,
        marginHorizontal: 20,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden', // Para a imagem não vazar
    },
    bannerTextContainer: {
        flex: 1,
    },
    bannerText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    bannerImage: {
        width: 100,
        height: 120,
        resizeMode: 'contain',
        position: 'relative',
        right: -10, // Ajuste para a imagem ficar na borda
    },
    // --- Gráfico ---
    chartContainer: {
        marginTop: 30,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    chartTitle: {
        fontSize: 18,
        color: '#888',
        fontWeight: '600',
    },
    chartValue: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 5,
        marginBottom: 20,
    },
    chart: {
        borderRadius: 16,
    },
});