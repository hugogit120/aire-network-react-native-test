import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, View, ScrollView, Image, TouchableHighlight, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import md5 from "md5";

const Login = ({ handleChange, onSubmitLogin }) => {

    return (
        <View style={styles.container}>

            <View style={styles.inputContainer}>
                <View style={styles.inputTitle}>
                    <Text style={styles.titleText}>Inicio de Sesión</Text>
                </View>

                <Text>Correo electronico</Text>
                <TextInput
                    keyboardType='email-address'
                    onChangeText={(text) => handleChange("user", text)}
                    placeholder='email'
                    placeholderTextColor='gray'
                    style={styles.input}
                />
                <Text>Contraseña</Text>
                <TextInput
                    onChangeText={(text) => handleChange("pass", md5(text))}
                    placeholder={'password'}
                    secureTextEntry={true}
                    placeholderTextColor='gray'
                    style={styles.input}
                />
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text color="white" onPress={onSubmitLogin} > Ingresar </Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#F4F4F4"
    },
    inputContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        height: 350,
        width: "80%",
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 3,
    },
    inputTitle: {
        marginBottom: 40,
    },
    input: {
        width: 200,
        fontSize: 20,
        padding: 8,
        height: 44,
        borderWidth: 1,
        color: "black",
        borderColor: "black",
        marginVertical: 10,
    },
    titleText: {
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'white',
        width: 150,
        height: 38,
        padding: 10,
        marginTop: 5,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 25,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 20,
        color: "black",
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Login