import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart as solidHeart, faClock } from '@fortawesome/free-solid-svg-icons'


const secondsToTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    return (`${hours}h : ${minutes}m : ${seconds}s`);
}

const MovieCard = ({ movie: { title, cover, duration, section, id }, onMovieClick, addFavorite, isFavorite }) => {

    return (

        <TouchableHighlight style={styles.moviesContainer}>
            <View style={styles.card}>
                <View style={styles.imageCover}>
                    <TouchableHighlight onPress={() => onMovieClick(id)}>
                        <Image source={{
                            uri: cover
                        }}
                            style={styles.cover}
                            resizeMode="cover"
                        />
                    </TouchableHighlight>

                </View>
                <View style={styles.centrar}>
                    <Text style={styles.titles}>{title}</Text>
                </View>
                <View >
                    <View >
                        <Text style={styles.sectionText}>{section}</Text>
                        <View style={styles.durationAndLike}>
                            <View style={styles.duration}>
                                <FontAwesomeIcon icon={faClock} />
                                <Text style={styles.time}>{secondsToTime(duration)}</Text>
                            </View>
                            <TouchableOpacity style={styles.icon} onPress={() => addFavorite(id)}>
                                <FontAwesomeIcon size={25} color={isFavorite ? "red" : "gray"} icon={solidHeart} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    moviesContainer: {
        width: "100%",
        height: 420,
        display: "flex",
        alignItems: "center",
        marginBottom: 50,
        backgroundColor: "white",
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
    card: {
        width: "80%",

    },
    centrar: {
        display: "flex",
        alignItems: "center"
    },
    imageCover: {
        display: "flex",
        alignItems: "center",
        padding: 10,
    },
    titles: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold"
    },
    sectionText: {
        fontWeight: "bold"
    },
    durationAndLike: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 15
    },
    duration: {
        display: "flex",
        flexDirection: "row",
    },
    time: {
        marginLeft: 12
    },
    cover: {
        width: 300,
        height: 300,
        borderRadius: 25
    }
});

export default MovieCard;