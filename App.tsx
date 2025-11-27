import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando as telas e o navegador de abas
import Splash from './src/pages/splash';
import Login from './src/pages/login';
import SignIn from './src/pages/signIn';
import MainTabNavigator from './src/navigation/MainTabNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // O NavigationContainer é o "pai" de tudo.
    <NavigationContainer>
      {/* O Stack.Navigator é o "gerente" das telas. */}
      <Stack.Navigator 
        initialRouteName="Splash" 
        screenOptions={{ headerShown: false }}
      >
        {/* Dentro dele, SÓ PODE TER Stack.Screen. Mais nada. */}
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}