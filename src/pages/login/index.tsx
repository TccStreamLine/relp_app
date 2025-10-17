import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from "react-native";
import { style } from "./style";

const logo = require('../../assets/logo.png');
const illustration = require('../../assets/Illustration.png');

export default function Login({ navigation }: { navigation: any }) {
    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={logo}
                    style={style.logo}
                />
                <Text style={style.slogan}>FOR YOUR COMPANY</Text>
            </View>

            <View style={style.boxMid}>
                <Image
                    source={illustration}
                    style={style.illustration}
                    resizeMode="contain"
                />
            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity
                    style={style.connectButton}
                    onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={style.connectButtonText}>Conecte-se</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.registerButton}>
                    <Text style={style.registerButtonText}>Cadastre-se no nosso site</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
