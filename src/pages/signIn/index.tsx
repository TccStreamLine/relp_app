import React, { useState } from 'react'; 
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Alert, 
    StatusBar,
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    ScrollView
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { style } from './style';

// URL da API
const API_URL = 'https://upbeat-creativity-production.up.railway.app';

export default function SignIn({ navigation }: { navigation: any }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        if (email === '' || password === '') {
            Alert.alert('Campos vazios', 'Por favor, preencha seu email e senha.');
            return;
        }

        setIsLoading(true);

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

            if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);

            const data = await response.json(); 

            if (data.success) {
                navigation.replace('Home', { user: data.usuario });
            } else {
                Alert.alert('Atenção', data.message || 'Dados incorretos.');
            }

        } catch (error) {
            console.error("Erro:", error);
            Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView 
            style={{ flex: 1 }} 
            behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
            <StatusBar barStyle="light-content" backgroundColor="#4B0082" />
            
            <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#FFF' }}>
                
                {/* --- CABEÇALHO CURVADO --- */}
                <View style={style.headerContainer}>
                    <TouchableOpacity style={style.backButton} onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" size={24} color="#FFF" />
                    </TouchableOpacity>
                    
                    <Text style={style.headerTitle}>Bem-vindo!</Text>
                    <Text style={style.headerSubtitle}>Faça login para continuar</Text>
                </View>

                {/* --- CARD FLUTUANTE DO FORMULÁRIO --- */}
                <View style={style.formContainer}>
                    <View style={style.card}>
                        
                        {/* Input Email */}
                        <Text style={style.inputLabel}>Email ou CNPJ</Text>
                        <View style={style.inputArea}>
                            <Feather name="mail" size={20} color="#888" />
                            <TextInput
                                style={style.input}
                                placeholder="seu@email.com"
                                placeholderTextColor="#AAA"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                value={email} 
                                onChangeText={setEmail} 
                            />
                        </View>

                        {/* Input Senha */}
                        <Text style={style.inputLabel}>Senha</Text>
                        <View style={style.inputArea}>
                            <Feather name="lock" size={20} color="#888" />
                            <TextInput
                                style={style.input}
                                placeholder="••••••••••"
                                placeholderTextColor="#AAA"
                                secureTextEntry
                                value={password} 
                                onChangeText={setPassword} 
                            />
                        </View>

                        {/* Botão de Ação */}
                        <TouchableOpacity 
                            style={[style.signInButton, { opacity: isLoading ? 0.7 : 1 }]} 
                            onPress={handleLogin}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <ActivityIndicator color="#FFF" />
                            ) : (
                                <Text style={style.signInButtonText}>Entrar</Text>
                            )}
                        </TouchableOpacity>

                        {/* Link Esqueci Senha */}
                        <TouchableOpacity style={style.footerLink}>
                            <Text style={style.forgotPasswordText}>Esqueceu sua senha?</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}