import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Breadcrumbs({ navigation, pages}) {
    const onPressHandler = () => {
        navigation.navigate('Список звезд');
    };

    return (
    <View>
        <View>
            <Text style={styles.breadcrumb} onPress={onPressHandler}>Список звезд</Text>
            {pages && pages.map((page) => (
                <Text style={styles.breadcrumb} onPress={onPressHandler}>
                    { " / " + page.title }
                </Text>
            ))}
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    breadcrumb: { color: '#f0f0f0', fontSize: 16, marginTop: 10 }
});