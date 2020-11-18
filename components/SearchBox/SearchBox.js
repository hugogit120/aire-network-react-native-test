import React from "react";
import { TextInput, View, StyleSheet, } from 'react-native';

const SearchBox = ({ searchField, onSearchChange }) => {

    return (
        <View>
            <TextInput
                style={styles.searchbox}
                onChangeText={text => onSearchChange(text)}
                placeholder="Busca tu peli..."
                value={searchField} />
        </View>
    )
}

const styles = StyleSheet.create({
    searchbox: {
        fontSize: 20,
        fontWeight: "300",
        padding: 20,
        width: 260,
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 40
    },
});

export default SearchBox