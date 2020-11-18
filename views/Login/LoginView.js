import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { handleLogin } from '../../lib/api';
import Login from "../../components/Login/Login";

const emailRegex = RegExp(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const LoginView = ({ navigation }) => {
    const [loginInputs, setLoginInputs] = useState({
        user: "",
        pass: ""
    });

    const [wrongEmailInput, setWrongEmailInput] = useState(undefined);
    const [errorMessage, setErrorMessage] = useState(undefined);

    useEffect(() => {
        if (wrongEmailInput && !loginInputs.user) {
            setWrongEmailInput(undefined);
        }
    }, [loginInputs.user]);

    const handleChange = (e, text) => {

        setLoginInputs(prevState => {
            return { ...prevState, [e]: text }
        });
    }

    const onSubmitLogin = () => {
        if (loginInputs.user && !emailRegex.test(loginInputs.user)) {
            return setWrongEmailInput("Ingresa un correo válido");
        }

        handleLogin(loginInputs.user, loginInputs.pass)
            .then((data) => {
                if (data.error) {
                    setErrorMessage(data.message);
                } else {
                    AsyncStorage.setItem("token", data.token);
                    navigation.navigate("Main");
                    setErrorMessage(undefined);
                }
            });
    }

    return (
        <Login
            onSubmitLogin={onSubmitLogin}
            wrongEmailInput={wrongEmailInput}
            handleChange={handleChange}
            errorMessage={errorMessage}
        />
    );
}

export default LoginView;