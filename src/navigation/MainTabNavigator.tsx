import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons';
import { View, Text } from 'react-native'; 
import Home from '../pages/home';

// Telas de exemplo para as outras abas não quebrarem
function CalculatorScreen() { return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Calculadora</Text></View>; }
function CalendarScreen() { return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Calendário</Text></View>; }
function StatsScreen() { return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Estatísticas</Text></View>; }
function ProfileScreen() { return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Perfil</Text></View>; }

const Tab = createBottomTabNavigator();

// MUDANÇA: Adicionamos { route } aqui para pegar os dados
export default function MainTabNavigator({ route }: { route: any }) {
  
  // Pegamos o usuário que veio do Login
  const { user } = route.params || {};

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false, 
        tabBarStyle: { 
          backgroundColor: '#FFFFFF',
          height: 60,
          borderTopWidth: 1,
          borderTopColor: '#EEE',
        },
        tabBarIcon: ({ focused, color, size }) => {
          const iconColor = focused ? '#4B0082' : '#BDBDBD';

          if (route.name === 'HomeTab') {
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
      {/* MUDANÇA CRUCIAL: initialParams passa o usuário para dentro da Home */}
      <Tab.Screen 
        name="HomeTab" 
        component={Home} 
        initialParams={{ user: user }} 
      />
      
      <Tab.Screen name="Calculator" component={CalculatorScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Stats" component={StatsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}