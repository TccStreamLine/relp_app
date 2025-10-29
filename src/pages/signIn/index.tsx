import React, { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { style } from './style';

const blocksImage = require('../../assets/caixa.png');

const SEU_IP_LOCAL = '192.168.15.3'; 
const API_URL = 'http://192.168.15.3/relp_api';


export default function SignIn({ navigation }: { navigation: any }) {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const handleLogin = async () => {
        if (email === '' || password === '') {
            Alert.alert('Erro', 'Por favor, preencha o email e a senha.');
            return;
        }

        try {
            
            const response = await fetch(`${API_URL}/login.php`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                
                body: JSON.stringify({
                    email: email,
                    senha: password
                })
            });

            const data = await response.json(); 

            if (data.success) {
               
                navigation.replace('Home');
            } else {
                
                Alert.alert('Falha no Login', data.message);
            }

        } catch (error) {
            console.error(error);
            Alert.alert('Erro de Conexão', 'Não foi possível conectar ao servidor. Verifique seu IP e se o XAMPP está rodando.');
        }
    };


    return (
        <View style={style.container}>
            <View style={style.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" size={28} color="#333" />
                </TouchableOpacity>
            </View>

            <View style={style.topSection}>
                <Text style={style.title}>FACILITANDO SUA VIDA DE CEO!</Text>
                <Image
                    source={blocksImage}
                    style={style.blocksImage}
                    resizeMode="contain"
                />
            </View>

            <View style={style.form}>
                <Text style={style.label}>Email ou CNPJ da empresa</Text>
                <View style={style.inputContainer}>
                    <Feather name="mail" size={20} color="#888" style={style.icon} />
                    <TextInput
                        style={style.input}
                        placeholder="Usuario@gmail.com"
                        placeholderTextColor="#AAA"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email} 
                        onChangeText={setEmail} 
                    />
                </View>

                <Text style={style.label}>Senha do ceo</Text>
                <View style={style.inputContainer}>
                    <Feather name="lock" size={20} color="#888" style={style.icon} />
                    <TextInput
                        style={style.input}
                        placeholder="••••••••••"
                        placeholderTextColor="#AAA"
                        secureTextEntry
                        value={password} 
                        onChangeText={setPassword} 
                    />
                </View>

                {/* Chama a função handleLogin ao clicar */}
                <TouchableOpacity style={style.signInButton} onPress={handleLogin}>
                    <Text style={style.signInButtonText}>Entre aqui!</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={style.forgotPasswordText}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}