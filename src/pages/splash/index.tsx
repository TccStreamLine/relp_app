import React, { useEffect } from 'react';
import { View, Image, Animated } from 'react-native';
import { style } from './style';

// Usando o nome 'logo.png' (minúsculo) como você confirmou
const logo = require('../../assets/logo.png');

export default function Splash({ navigation }: { navigation: any }) {
    const fadeAnim = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
        }).start();

        const timer = setTimeout(() => {
            navigation.replace('Login');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={style.container}>
            <Animated.View style={{ opacity: fadeAnim }}>
                <Image
                    source={logo}
                    style={style.logo}
                    resizeMode="contain"
                />
            </Animated.View>
        </View>
    );
}