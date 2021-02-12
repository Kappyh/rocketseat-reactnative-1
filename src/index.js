import React, { useEffect, useState } from 'react';

import { TouchableOpacity, SafeAreaView, Text, StyleSheet, StatusBar, FlatList } from 'react-native';

import api from './services/api';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7159c1',
        flex: 1,
    },
    project: {
        color: '#FFF',
        fontSize: 20,
    },
    button: {
        backgroundColor: '#fff',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default function App() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data)
        }
        )
    }, []);

    async function handleAddProject() {
        const response = await api.post('projects', { title: `Projeto novo ${Date.now()}`, owner: "Gabriela Mendes" });
        setProjects([...projects, response.data]);
    }

    return (
        <>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={
                        ({ item: project }) => (<Text style={styles.project}>{project.title}</Text>)
                    }
                />
                <TouchableOpacity
                    onPress={handleAddProject}
                    activeOpacity={0.6}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Adicionar Projecto</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    );
}