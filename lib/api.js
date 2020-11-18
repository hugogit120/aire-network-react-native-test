import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import qs from "qs";
import { Platform } from "react-native";

const device = Platform.OS;

const getToken = async () => await AsyncStorage.getItem("token");

const api = axios.create({
    baseURL: "https://dev.perseo.tv/ws"
});

export const handleLogin = (user, pass) => {
    return (
        api.post("/Login.php",
            qs.stringify({ user, pass, device }))
            .then(({ data }) => data)
    );
}

export const handleGetMovies = async () => {
    const token = await getToken();

    return (
        api.post("/GetView.php",
            qs.stringify({ device, token }))
            .then(({ data }) => data)
    );
}

export const handlePlayerView = async (id) => {
    const token = await getToken();
    return (
        api.post("/Play.php",
            qs.stringify({ device, token, id }))
            .then(({ data }) => data)
    );
}