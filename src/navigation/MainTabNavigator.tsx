import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons';

// --- CORREÇÃO AQUI ---
// Importando Text e View que estavam faltando
import { View, Text } from 'react-native'; 
// --- FIM DA CORREÇÃO ---

// Importa sua tela Home
import Home from '../pages/home';

// --- Telas de Exemplo (agora corrigidas) ---
function CalculatorScreen() { return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Calculadora</Text></View>; }
function CalendarScreen() { return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Calendário</Text></View>; }
function StatsScreen() { return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Estatísticas</Text></View>; }
function ProfileScreen() { return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Perfil</Text></View>; }
// --- Fim das Telas de Exemplo ---


const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Esconde o cabeçalho padrão
        tabBarShowLabel: false, // Esconde os nomes das abas
        tabBarStyle: { 
          backgroundColor: '#FFFFFF',
          height: 60,
          borderTopWidth: 1,
          borderTopColor: '#EEE',
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          const iconColor = focused ? '#4B0082' : '#BDBDBD'; // Roxo se focado, cinza se não

          if (route.name === 'HomeTab') {
            // Ícone especial para Home (com a caixa)
            return (
              <View style={{
                backgroundColor: focused ? '#4B0082' : 'transparent',
                padding: 10,
                borderRadius: 10,
              }}>
                <Ionicons name="home" size={24} color={focused ? '#FFF' : '#BDBDBD'} />
              </View>
            );
          } else if (route.name === 'Calculator') {
            return <Ionicons name="calculator-outline" size={26} color={iconColor} />;
          } else if (route.name === 'Calendar') {
            return <Ionicons name="calendar-outline" size={26} color={iconColor} />;
          } else if (route.name === 'Stats') {
            return <FontAwesome5 name="chart-bar" size={24} color={iconColor} />;
          } else if (route.name === 'Profile') {
            return <Ionicons name="person-circle-outline" size={28} color={iconColor} />;
          }
        },
      })}
    >
      {/* Estas são as 5 abas */}
      <Tab.Screen name="HomeTab" component={Home} />
      <Tab.Screen name="Calculator" component={CalculatorScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Stats" component={StatsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}