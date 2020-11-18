import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { handleLogin } from '../../lib/api';
import Login from "../../components/Login/Login"

const emailRegex = RegExp(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const LoginView = ({ navigation }) => {
    const [loginInputs, setLoginInputs] = useState({
        user: "",
        pass: ""
    })

    const [wrongEmailInput, setWrongEmailInput] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e, text) => {

        setLoginInputs(prevState => {
            return { ...prevState, [e]: text }
        })
    }

    const onSubmitLogin = () => {

        console.log(loginInputs);
        if (loginInputs.user && !emailRegex.test(loginInputs.user)) {
            return setWrongEmailInput("Ingresa un correo válido");
        }

        handleLogin(loginInputs.user, loginInputs.pass)
            .then((data) => {

                if (data.error) {
                    setErrorMessage(data.message);
                } else {
                    AsyncStorage.setItem("token", data.token);
                    navigation.navigate("Main")
                }
            })
    }
    return (
        <Login onSubmitLogin={onSubmitLogin} handleChange={handleChange} />
    )
}

export default LoginView