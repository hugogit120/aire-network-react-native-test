import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

const Error500 = ({ navigation }) => {

    const toMain = () => {
        navigation.navigate("Main");
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={{ fontSize: 20 }}> Ha ocurrido un error</Text>
                <Text style={{ fontSize: 40 }}>500</Text>
                <TouchableHighlight style={styles.button} onPress={toMain}>
                    <Text style={{ color: "white" }}>boton</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#223343"
    },
    card: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        height: 300,
        width: "80%",
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 3,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#223343',
        width: 150,
        height: 38,
        padding: 10,
        marginTop: 5,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 25,
        marginBottom: 10,
    }
});

export default Error500;