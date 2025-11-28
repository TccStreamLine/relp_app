import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, Image, Dimensions, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';
import { useFocusEffect } from '@react-navigation/native';
import { style } from './style';

const screenWidth = Dimensions.get('window').width;
const avatar = require('../../assets/doctor.png'); // Ou logo.png se preferir

// --- ATENÇÃO: MANTENHA SEU LINK DO RAILWAY AQUI ---
const API_URL = 'https://upbeat-creativity-production.up.railway.app'; 

export default function Home({ navigation }: { navigation: any }) {
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    
    const [data, setData] = useState({
        total: '0,00',
        grafico: { labels: [], datasets: [{ data: [0] }] },
        recentes: [] // Array para a lista
    });

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

    return (
        <View style={style.container}>
            {/* --- CABEÇALHO BRANCO --- */}
            <View style={style.header}>
                <View style={style.headerTextContainer}>
                    <Text style={style.welcomeText}>Bem-vindo de volta,</Text>
                    <Text style={style.userName}>Mercado Adati</Text>
                </View>
                <Image source={avatar} style={style.profileImage} />
            </View>

            <ScrollView 
                showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['#4B0082']} />}
            >
                {/* --- CARTÃO DE DESTAQUE (ROXO) --- */}
                <View style={style.mainCard}>
                    <View>
                        <Text style={style.cardLabel}>Faturamento Total</Text>
                        {isLoading ? 
                            <ActivityIndicator color="#FFF" style={{alignSelf: 'flex-start'}}/> :
                            <Text style={style.cardValue}>R$ {data.total}</Text>
                        }
                    </View>
                    <View style={style.cardIconBg}>
                        <MaterialCommunityIcons name="finance" size={120} color="#FFFFFF" />
                    </View>
                </View>

                {/* --- GRÁFICO --- */}
                <View style={style.sectionContainer}>
                    <Text style={style.sectionTitle}>Desempenho Mensal</Text>
                    <View style={style.chartCard}>
                        <LineChart
                            data={{
                                labels: data.grafico.labels.length ? data.grafico.labels : ["-"],
                                datasets: [{ data: data.grafico.datasets[0].data.length ? data.grafico.datasets[0].data : [0] }]
                            }}
                            width={screenWidth - 64} // Ajuste fino na largura
                            height={220}
                            yAxisLabel="R$"
                            yAxisSuffix=""
                            chartConfig={{
                                backgroundColor: '#FFF',
                                backgroundGradientFrom: '#FFF',
                                backgroundGradientTo: '#FFF',
                                decimalPlaces: 0,
                                color: (opacity = 1) => `rgba(75, 0, 130, ${opacity})`, // Roxo
                                labelColor: (opacity = 1) => `rgba(100, 100, 100, ${opacity})`,
                                style: { borderRadius: 16 },
                                propsForDots: { r: "5", strokeWidth: "2", stroke: "#4B0082" }
                            }}
                            bezier
                            style={style.chartStyle}
                            withInnerLines={false}
                            withOuterLines={false}
                        />
                    </View>
                </View>

                {/* --- LISTA DE VENDAS RECENTES --- */}
                <View style={[style.sectionContainer, { marginBottom: 40 }]}>
                    <Text style={style.sectionTitle}>Vendas Recentes</Text>
                    
                    {data.recentes.length === 0 && !isLoading && (
                        <Text style={{color: '#999', textAlign: 'center'}}>Nenhuma venda registrada.</Text>
                    )}

                    {data.recentes.map((venda: any, index) => (
                        <TouchableOpacity key={index} style={style.transactionItem}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <View style={style.transactionIcon}>
                                    <Feather name="shopping-bag" size={24} color="#4B0082" />
                                </View>
                                <View style={style.transactionInfo}>
                                    {/* CORREÇÃO AQUI: Usando venda.cliente ou venda.id */}
                                    <Text style={style.transactionTitle}>
                                        {venda.cliente ? venda.cliente : `Venda #${venda.id}`}
                                    </Text>
                                    <Text style={style.transactionDate}>
                                        {/* CORREÇÃO AQUI: Usando venda.data */}
                                        {venda.data ? new Date(venda.data).toLocaleDateString('pt-BR') : 'Data desconhecida'}
                                    </Text>
                                </View>
                            </View>
                            {/* CORREÇÃO AQUI: Usando venda.valor */}
                            <Text style={style.transactionValue}>+ R$ {venda.valor}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}