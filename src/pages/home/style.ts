import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA', // Fundo cinza bem claro, mais moderno que branco puro
    },
    header: {
        paddingHorizontal: 24,
        paddingTop: 60,
        paddingBottom: 24,
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        elevation: 5, // Sombra no Android
        shadowColor: '#000', // Sombra no iOS
        shadowOpacity: 0.1,
        shadowRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTextContainer: {
        flex: 1,
    },
    welcomeText: {
        fontSize: 14,
        color: '#888',
        fontFamily: 'System',
    },
    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#E0E0E0',
    },
    
    // --- Cartão Principal (Roxo) ---
    mainCard: {
        backgroundColor: '#4B0082',
        borderRadius: 24,
        margin: 24,
        padding: 24,
        shadowColor: "#4B0082",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 10,
        position: 'relative',
        overflow: 'hidden',
    },
    cardLabel: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 16,
        marginBottom: 8,
    },
    cardValue: {
        color: '#FFF',
        fontSize: 36,
        fontWeight: 'bold',
    },
    cardIconBg: {
        position: 'absolute',
        right: -20,
        top: -20,
        opacity: 0.1,
    },

    // --- Seção do Gráfico ---
    sectionContainer: {
        paddingHorizontal: 24,
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
    },
    chartCard: {
        backgroundColor: '#FFF',
        borderRadius: 16,
        padding: 16,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 10,
        alignItems: 'center',
    },
    chartStyle: {
        borderRadius: 16,
        marginVertical: 8,
    },

    // --- Lista de Transações ---
    transactionItem: {
        backgroundColor: '#FFF',
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 1,
    },
    transactionIcon: {
        width: 48,
        height: 48,
        borderRadius: 12,
        backgroundColor: '#F3EFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    transactionInfo: {
        flex: 1,
    },
    transactionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    transactionDate: {
        fontSize: 12,
        color: '#888',
        marginTop: 4,
    },
    transactionValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4B0082',
    },
});