import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const Styles = StyleSheet.create({
    loadingView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    loadingText: {
        color: "#512DA8",
        fontSize: 14,
        fontWeight: 'bold'
    }
});

export const Loading = () => {
    return(
        <View style = {Styles.loadingView}>
            <ActivityIndicator size = "large" color = "#512DA8" />
            <Text style = {Styles.loadingText}>Loading...</Text>
        </View>
    );
}