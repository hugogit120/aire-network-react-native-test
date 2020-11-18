import React from "react";
import { View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loading = () => {
    return (
        <View style={styles.loading}>
            <FontAwesomeIcon spin style={styles.spinner} icon={faSpinner} size={50} />
        </View>
    )
}
const styles = StyleSheet.create({
    loading: {
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    spinner: {
        transform: [{ rotateY: "180deg" }]
    }
});

export default Loading;