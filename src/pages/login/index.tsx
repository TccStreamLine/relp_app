import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StatusBar,
    Linking, // IMPORTANTE: O Linking TEM que estar aqui
    Alert
} from "react-native";
import { style } from "./style";

const logo = require('../../assets/logo.png');
const illustration = require('../../assets/Illustration.png');

// URL do site (verifique se não tem espaços em branco no final)
const REGISTER_URL = 'https://streamlinepostgree-production.up.railway.app/formulario.php';

export default function Login({ navigation }: { navigation: any }) {

    // Função de Redirecionamento com Logs
    const handleRegister = async () => {
        console.log("1. Botão de cadastro clicado!"); // LOG 1

        try {
            console.log("2. Verificando URL:", REGISTER_URL); // LOG 2
            const supported = await Linking.canOpenURL(REGISTER_URL);

            if (supported) {
                console.log("3. Abrindo navegador..."); // LOG 3
                await Linking.openURL(REGISTER_URL);
            } else {
                console.error("4. URL não suportada pelo dispositivo"); // LOG 4
                Alert.alert("Erro", "Seu dispositivo não sabe como abrir este link.");
            }
        } catch (error) {
            console.error("5. Erro no processo:", error); // LOG 5
            Alert.alert("Erro", "Não foi possível abrir o site.");
        }
    };

    return (
        <View style={style.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            
            {/* Topo */}
            <View style={style.topSection}>
                <Image source={logo} style={style.logo} />
                <Text style={style.slogan}>FOR YOUR COMPANY</Text>
            </View>

            {/* Ilustração */}
            <View style={style.midSection}>
                <Image source={illustration} style={style.illustration} />
            </View>

            {/* Botões */}
            <View style={style.bottomSection}>
                <Text style={style.welcomeTitle}>Bem-vindo ao Relp!</Text>
                <Text style={style.welcomeSubtitle}>
                    Gerencie sua empresa na palma da mão.
                </Text>

                <TouchableOpacity
                    style={style.connectButton}
                    onPress={() => {
                        console.log("Navegando para Login...");
                        navigation.navigate('SignIn');
                    }}
                    activeOpacity={0.7}
                >
                    <Text style={style.connectButtonText}>Conecte-se</Text>
                </TouchableOpacity>

                {/* BOTÃO DE CADASTRO */}
                <TouchableOpacity 
                    style={style.registerButton}
                    onPress={handleRegister} 
                    activeOpacity={0.7} // Feedback visual ao clicar
                >
                    <Text style={style.registerButtonText}>Cadastre-se no site</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}