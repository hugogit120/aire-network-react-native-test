import React, { useEffect, useState } from 'react';
import { Video } from 'expo-av';
import { Button, TouchableOpacity, TextInput, Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Loading from '../../components/Loading/Loading';
import { handlePlayerView } from '../../lib/api';


const Player = ({ route: { params: { id } } }) => {
    const [content, setContent] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        handlePlayerView(id)
            .then(data => {
                setContent(data)
                setIsLoading(false)
            })
    }, [])

    if (isLoading) {
        return <Loading />
    }

    return (
        <View>
            <Text>{content.title}</Text>
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

export default Player