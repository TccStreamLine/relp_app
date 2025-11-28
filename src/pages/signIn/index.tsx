import React, { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { style } from './style';

const blocksImage = require('../../assets/caixa.png');

// --- CONFIGURAÇÃO DA API (PRODUÇÃO) ---
// URL fornecida pelo Railway (com HTTPS para segurança)
const API_URL = 'https://upbeat-creativity-production.up.railway.app';

export default function SignIn({ navigation }: { navigation: any }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Estado para feedback visual

    const handleLogin = async () => {
        if (email === '' || password === '') {
            Alert.alert('Erro', 'Por favor, preencha o email e a senha.');
            return;
        }

        setIsLoading(true); // Ativa o loading

        try {
            // Conecta na API hospedada no Railway
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

            // Verifica se a requisição HTTP deu certo (código 200)
            if (!response.ok) {
                throw new Error(`Erro na conexão: ${response.status}`);
            }

            const data = await response.json(); 

            if (data.success) {
                // Sucesso! Navega para a Home
                navigation.replace('Home');
            } else {
                // Erro de lógica (senha errada, usuário não existe)
                Alert.alert('Falha no Login', data.message || 'Verifique seus dados.');
            }

        } catch (error) {
            console.error("Erro detalhado:", error);
            Alert.alert(
                'Erro de Conexão', 
                'Não foi possível conectar ao servidor. Verifique sua internet.'
            );
        } finally {
            setIsLoading(false); // Desativa o loading independente do resultado
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

                <Text style={style.label}>Senha do CEO</Text>
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

                {/* Botão com feedback visual de carregamento */}
                <TouchableOpacity 
                    style={[style.signInButton, { opacity: isLoading ? 0.7 : 1 }]} 
                    onPress={handleLogin}
                    disabled={isLoading}
                >
                    <Text style={style.signInButtonText}>
                        {isLoading ? 'Carregando...' : 'Entre aqui!'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={style.forgotPasswordText}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}