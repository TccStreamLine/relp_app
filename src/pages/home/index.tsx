import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { style } from './style';

export default function Home({ navigation }: { navigation: any }) {
    return (
        <View style={style.container}>
            <Text style={style.title}>Olá Usuario!</Text>
            <Text style={style.subtitle}>Conexão com o banco de dados foi um sucesso!</Text>
            
            <TouchableOpacity 
                style={style.button}
                onPress={() => navigation.replace('Login')} 
            >
                <Text style={style.buttonText}>Sair (Voltar para Login)</Text>
            </TouchableOpacity>
        </View>
    );
}