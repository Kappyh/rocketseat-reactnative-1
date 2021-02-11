import React from 'react';

import { View, Text, StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7159c1',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: 'bold',

    }
});

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content"/>
            <View style={styles.container}>
                <Text style={styles.title}> Hello GO STACK</Text>
            </View>
        </>
        );
}