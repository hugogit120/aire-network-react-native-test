import React, { useEffect, useState } from 'react';
import { Video } from 'expo-av';
import { Text, View, StyleSheet } from 'react-native';
import Loading from '../../components/Loading/Loading';
import { handlePlayerView } from '../../lib/api';


const Player = ({ route: { params: { id } } }) => {
    const [content, setContent] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        handlePlayerView(id)
            .then(data => {
                setContent(data);
                setIsLoading(false);
            })
            .catch(() => {
                navigation.navigate("Error");
                setIsLoading(false);
            })
    }, [])

    if (isLoading) {
        return <Loading />
    }

    return (
        <View style={styles.videoPlayer}>
            <Text style={styles.title}>{content.title}</Text>
            <Video
                source={{ uri: content.url }}
                shouldPlay
                useNativeControls
                resizeMode="cover"
                style={{ width: "100%", height: 300 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        color: "white",
        padding: 50,
        fontSize: 30,
        fontWeight: "bold"
    },
    videoPlayer: {
        backgroundColor: "#223343",
        height: "100%"
    }
});

export default Player;