import React, { useState, useCallback, useRef } from 'react';
import { 
    View, 
    Text, 
    ScrollView, 
    Image, 
    Dimensions, 
    ActivityIndicator, 
    RefreshControl, 
    TouchableOpacity,
    Animated, 
    Easing,
    Modal // Importamos o Modal
} from 'react-native';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';
import { useFocusEffect } from '@react-navigation/native';
import { style } from './style';

const screenWidth = Dimensions.get('window').width;

const API_URL = 'https://upbeat-creativity-production.up.railway.app'; 

interface Venda {
    id: number;
    valor_total: string;
    data_venda: string;
    cliente?: string;
}

interface DashboardData {
    total: string;
    grafico: {
        labels: string[];
        datasets: { data: number[] }[];
    };
    recentes: Venda[];
}

export default function Home({ navigation, route }: { navigation: any, route: any }) {
    // Pega dados do usuário
    const { user } = route.params || {};
    const nomeEmpresa = user?.nome_empresa || "Visitante";
    const cnpjEmpresa = user?.cnpj || "CNPJ não informado";

    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [selectedPoint, setSelectedPoint] = useState<{value: number, index: number} | null>(null);
    
    // Estado para controlar o Modal de Perfil
    const [modalVisible, setModalVisible] = useState(false);

    const [data, setData] = useState<DashboardData>({
        total: '0,00',
        grafico: { labels: [], datasets: [{ data: [0] }] },
        recentes: [] 
    });

    // Animações
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(50)).current;

    const startAnimation = () => {
        fadeAnim.setValue(0);
        slideAnim.setValue(50);
        Animated.parallel([
            Animated.timing(fadeAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
            Animated.timing(slideAnim, { toValue: 0, duration: 800, easing: Easing.out(Easing.exp), useNativeDriver: true })
        ]).start();
    };

    const fetchData = async () => {
        try {
            const response = await fetch(`${API_URL}/dashboard_api.php`);
            const json = await response.json();

            if (json.success) {
                setData({
                    total: json.total_vendas,
                    grafico: json.grafico,
                    recentes: json.vendas_recentes || []
                });
                startAnimation();
            }
        } catch (error) {
            console.error("Erro:", error);
        } finally {
            setIsLoading(false);
            setRefreshing(false);
        }
    };

    useFocusEffect(useCallback(() => { fetchData(); }, []));

    const onRefresh = () => {
        setRefreshing(true);
        fetchData();
    };

    const handleDataPointClick = (data: { value: number, index: number }) => {
        setSelectedPoint(selectedPoint && selectedPoint.index === data.index ? null : data);
    };

    // Função para Sair do App
    const handleLogout = () => {
        setModalVisible(false);
        // replace impede que o usuário volte para a Home clicando em "Voltar"
        navigation.replace('Login'); 
    };

    return (
        <View style={style.container}>
            
            {/* --- HEADER --- */}
            <View style={style.header}>
                <View style={style.headerTextContainer}>
                    <Text style={style.welcomeText}>Bem-vindo de volta,</Text>
                    <Text style={style.userName}>{nomeEmpresa}</Text>
                </View>
                
                {/* Ao clicar no ícone, abre o Modal */}
                <TouchableOpacity 
                    style={style.profileIconContainer} 
                    onPress={() => setModalVisible(true)}
                >
                    <Ionicons name="person" size={28} color="#A0A0A0" />
                </TouchableOpacity>
            </View>

            <ScrollView 
                showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#4B0082']} />}
            >
                <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
                    
                    {/* Card Total */}
                    <View style={style.mainCard}>
                        <View>
                            <Text style={style.cardLabel}>Faturamento Total</Text>
                            {isLoading ? <ActivityIndicator color="#FFF" /> : <Text style={style.cardValue}>R$ {data.total}</Text>}
                        </View>
                        <View style={style.cardIconBg}>
                            <MaterialCommunityIcons name="finance" size={120} color="#FFFFFF" />
                        </View>
                    </View>

                    {/* Gráfico */}
                    <View style={style.sectionContainer}>
                        <Text style={style.sectionTitle}>Vendas da Semana (7 Dias)</Text>
                        <View style={style.chartCard}>
                            {selectedPoint && (
                                <View style={style.tooltipContainer}>
                                    <Text style={style.tooltipText}>Dia: {data.grafico.labels[selectedPoint.index]}</Text>
                                    <Text style={style.tooltipText}>R$ {selectedPoint.value.toFixed(2)}</Text>
                                </View>
                            )}

                            {data.grafico.labels.length > 0 && !isLoading ? (
                                <LineChart
                                    data={{
                                        labels: data.grafico.labels,
                                        datasets: [{ data: data.grafico.datasets[0].data }]
                                    }}
                                    width={screenWidth - 64} 
                                    height={220}
                                    yAxisLabel="R$"
                                    yAxisSuffix=""
                                    onDataPointClick={handleDataPointClick}
                                    chartConfig={{
                                        backgroundColor: '#FFF',
                                        backgroundGradientFrom: '#FFF',
                                        backgroundGradientTo: '#FFF',
                                        decimalPlaces: 0,
                                        color: (opacity = 1) => `rgba(75, 0, 130, ${opacity})`,
                                        labelColor: (opacity = 1) => `rgba(100, 100, 100, ${opacity})`,
                                        style: { borderRadius: 16 },
                                        propsForDots: { r: "5", strokeWidth: "2", stroke: "#4B0082" },
                                        propsForBackgroundLines: { strokeDasharray: "" }
                                    }}
                                    bezier
                                    style={style.chartStyle}
                                    withInnerLines={true}
                                    withOuterLines={false}
                                    fromZero
                                />
                            ) : (
                                <View style={{height: 220, justifyContent: 'center'}}>
                                    {isLoading ? <ActivityIndicator color="#4B0082" /> : <Text style={{color: '#999'}}>Sem dados nesta semana</Text>}
                                </View>
                            )}
                        </View>
                    </View>

                    {/* Lista Recentes */}
                    <View style={[style.sectionContainer, { marginBottom: 40 }]}>
                        <Text style={style.sectionTitle}>Últimas Transações</Text>
                        
                        {data.recentes.map((venda, index) => (
                            <TouchableOpacity key={index} style={style.transactionItem}>
                                <View style={style.transactionIcon}>
                                    <Feather name="shopping-bag" size={24} color="#4B0082" />
                                </View>
                                <View style={style.transactionInfo}>
                                    <Text style={style.transactionTitle} numberOfLines={1}>Venda #{venda.id}</Text>
                                    <Text style={style.transactionDate}>
                                        {venda.data_venda ? new Date(venda.data_venda).toLocaleDateString('pt-BR') : '-'}
                                    </Text>
                                </View>
                                <Text style={style.transactionValue} numberOfLines={1}>+ R$ {venda.valor_total}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </Animated.View>
            </ScrollView>

            {/* --- MODAL DE PERFIL --- */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                {/* Fundo escuro clicável para fechar */}
                <TouchableOpacity 
                    style={style.modalOverlay} 
                    activeOpacity={1} 
                    onPress={() => setModalVisible(false)}
                >
                    {/* Conteúdo do Modal (Impede o clique de fechar o modal se clicar dentro) */}
                    <View style={style.modalContent} onStartShouldSetResponder={() => true}>
                        
                        {/* Ícone Grande */}
                        <View style={style.modalIconContainer}>
                             <Ionicons name="person-circle" size={80} color="#ccc" />
                        </View>

                        {/* Dados do Usuário */}
                        <Text style={style.modalTitle}>{nomeEmpresa}</Text>
                        <Text style={style.modalSubtitle}>CNPJ: {cnpjEmpresa}</Text>

                        {/* Botão de Sair */}
                        <TouchableOpacity style={style.logoutButton} onPress={handleLogout}>
                            <Text style={style.logoutText}>Sair da Conta</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>

        </View>
    );
}