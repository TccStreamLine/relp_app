import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    header: {
        paddingHorizontal: 24,
        paddingTop: 60,
        paddingBottom: 24,
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 10,
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
    profileIconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#E0E0E0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    // --- MODAL GENÉRICO (Fundo Escuro) ---
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)', // Um pouco mais escuro
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '85%',
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 25,
        elevation: 10,
        maxHeight: '80%', // Evita que o modal estoure a tela
    },
    
    // --- Estilos Específicos do Modal de Perfil ---
    modalIconContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
        textAlign: 'center',
    },
    modalSubtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 30,
        textAlign: 'center',
    },
    logoutButton: {
        backgroundColor: '#FF3B30',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 25,
        width: '100%',
        alignItems: 'center',
    },
    logoutText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },

    // --- Estilos Específicos do Modal de Venda (NOVO) ---
    detailHeader: {
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
        paddingBottom: 15,
        marginBottom: 15,
    },
    detailLabel: {
        fontSize: 12,
        color: '#888',
        textTransform: 'uppercase',
        marginTop: 10,
    },
    detailValue: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
    },
    detailProductItem: {
        backgroundColor: '#F3F5F7',
        borderRadius: 12,
        padding: 12,
        marginBottom: 10,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4B0082',
        marginBottom: 5,
    },
    stockRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    stockBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        overflow: 'hidden',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FFF',
    },
    stockNormal: { backgroundColor: '#4CD964' }, // Verde
    stockLow: { backgroundColor: '#FF9500' },    // Laranja
    closeButton: {
        marginTop: 20,
        backgroundColor: '#4B0082',
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#EEE',
        fontWeight: 'bold',
    },

    // --- Dashboard e Listas ---
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
        alignItems: 'center',
    },
    chartStyle: {
        borderRadius: 16,
        marginVertical: 8,
    },
    tooltipContainer: {
        position: 'absolute',
        top: 10,
        left: 20,
        backgroundColor: 'rgba(75, 0, 130, 0.9)',
        padding: 8,
        borderRadius: 8,
        zIndex: 100,
    },
    tooltipText: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'bold',
    },
    transactionItem: {
        backgroundColor: '#FFF',
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 1,
    },
    transactionIcon: {
        width: 48,
        height: 48,
        borderRadius: 12,
        backgroundColor: '#F3EFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    transactionInfo: {
        flex: 1, 
        marginLeft: 16,
        marginRight: 12,
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
        textAlign: 'right',
        minWidth: 80,
    },
});