/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import TasksContainer from './src/components/TasksEpic/TasksContainer';
import Header from './src/components/_Shared/Header';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <TasksContainer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20
    },
});


export default App;
