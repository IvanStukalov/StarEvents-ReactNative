import { View, Text, StyleSheet, Image, Button } from 'react-native';
import React from 'react';
import host from '../api';

export default function StarCard({ navigation, ...props }) {
    const handlePress = () => {
        navigation.navigate('Звезда', { id: props.star_id });
    };

    return (
        <View style={styles.card}>
            <Image
                style={styles.image}
                source={{uri: props.image}}
            />
            <View style={styles.container}>
                <Text style={styles.textGreen}>{props.name}</Text>
                <Text style={styles.textGreen}>{props.distance} св. лет</Text>
            </View>
            <Button title='К звезде' onPress={handlePress} color='#111111'/>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 320,
        backgroundColor: '#222222',
        borderRadius: 12,
        padding: 24,
        gap: 12,
        margin: 8,
    },
    image: { height: 320, alignSelf: 'stretch' },
    container: { display: 'flex', width: '100%', margin: 8, justifyContent: 'center', alignItems: 'center' },
    row: { display: 'flex', flexDirection: 'column' },
    text: { color: '#f0f0f0', fontSize: 16 },
    textGreen: {color : '#f0f0f0', fontSize: 18 , marginBottom: 5},
});