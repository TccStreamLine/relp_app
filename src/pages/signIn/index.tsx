import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { style } from './style';

export default function SignIn({ navigation }: { navigation: any }) {
    return (
        <View style={style.container}>
            <View style={style.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" size={28} color="#333" />
                </TouchableOpacity>
            </View>

            <View style={style.topSection}>
                <Text style={style.title}>FACILITANDO SUA VIDA DE CEO!</Text>
                <View style={style.imagePlaceholder} />
            </View>

            <View style={style.form}>
                <Text style={style.label}>Email ou CNPJ da empresa</Text>
                <View style={style.inputContainer}>
                    <Feather name="mail" size={20} color="#888" style={style.icon} />
                    <TextInput
                        style={style.input}
                        placeholder="usuarioExistente@gmail.com"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <Text style={style.label}>Senha do ceo</Text>
                <View style={style.inputContainer}>
                    <Feather name="lock" size={20} color="#888" style={style.icon} />
                    <TextInput
                        style={style.input}
                        placeholder="••••••••••"
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity style={style.signInButton}>
                    <Text style={style.signInButtonText}>Entre aqui!</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={style.forgotPasswordText}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
