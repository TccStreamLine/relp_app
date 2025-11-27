import React from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { LineChart } from 'react-native-chart-kit';
import { style } from './style';

// Pegar a largura da tela para o gráfico
const screenWidth = Dimensions.get('window').width;

// Dados de exemplo para o gráfico
const chartData = {
  labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
  datasets: [
    {
      data: [
        6000,
        5800,
        4500,
        7000,
        6500,
        8200
      ],
      color: (opacity = 1) => `rgba(75, 0, 130, ${opacity})`, // Cor Roxo
      strokeWidth: 3
    }
  ],
  legend: ["Lucro Mensal"] // Legenda
};

// Você precisará adicionar a imagem do "médico" na sua pasta assets
const bannerImage = require('../../assets/doctor.png'); // <-- Adicione uma imagem sua aqui

export default function Home({ navigation }: { navigation: any }) {
    return (
        <View style={style.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* --- CABEÇALHO --- */}
                <View style={style.header}>
                    <View style={style.headerLeft}>
                        <FontAwesome5 name="circle" size={44} color="#4B0082" solid /> 
                        {/* (Substitua por uma <Image> se tiver o avatar) */}
                    </View>
                    <View style={style.headerCenter}>
                        <Text style={style.locationText}>São Paulo</Text>
                        <Text style={style.userName}>Olá, Mercado Adati</Text>
                    </View>
                </View>

                {/* --- BANNER --- */}
                <View style={style.bannerCard}>
                    <View style={style.bannerTextContainer}>
                        <Text style={style.bannerText}>Simplificando a</Text>
                        <Text style={style.bannerText}>gestão dos seus</Text>
                        <Text style={style.bannerText}>negócios!</Text>
                    </View>
                    <Image source={bannerImage} style={style.bannerImage} />
                </View>

                {/* --- ÁREA DO GRÁFICO --- */}
                <View style={style.chartContainer}>
                    <Text style={style.chartTitle}>Lucro Mensal</Text>
                    <Text style={style.chartValue}>$8,545.00</Text>
                    
                    <LineChart
                        data={chartData}
                        width={screenWidth - 40} // Largura da tela menos o padding
                        height={220}
                        chartConfig={{
                            backgroundColor: '#FFFFFF',
                            backgroundGradientFrom: '#FFFFFF',
                            backgroundGradientTo: '#FFFFFF',
                            decimalPlaces: 2,
                            color: (opacity = 1) => `rgba(75, 0, 130, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#4B0082"
                            }
                        }}
                        bezier // Deixa o gráfico com curvas
                        style={style.chart}
                        withVerticalLines={false} // Remove linhas verticais
                        withHorizontalLines={false} // Remove linhas horizontais
                        withInnerLines={false}
                        withOuterLines={false}
                        fromZero
                    />
                </View>
            </ScrollView>
        </View>
    );
}

