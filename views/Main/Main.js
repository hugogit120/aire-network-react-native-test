import React, { useEffect, useState, } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { handleGetMovies, handlePlayerView } from '../../lib/api';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import MovieCard from '../../components/MovieCard/MovieCard';
import SearchBox from '../../components/SearchBox/SearchBox';

let screenWidth = Dimensions.get("window").width;

const Main = ({ navigation }) => {

    const [theMovies, setTheMovies] = useState([]);
    const [searchField, setSearchField] = useState("");
    const [user, setTheUser] = useState({});
    const [isFavoriteView, setIsFavoriteView] = useState(false);
    const [toggleUserInfo, setToggleUserInfo] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const filteredMovies = theMovies.filter(movie => movie.title.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()));

    useEffect(() => {
        handleGetMovies()
            .then(data => {
                setTheMovies(data.contents)
                setTheUser(data.user)
            })
    }, [])

    const onSearchChange = (event) => {
        setSearchField(event);
    };

    const onMovieClick = (id) => {
        navigation.navigate("Player", { id })
    }

    const addFavoriteHandler = (id) => {
        const { favs } = user;
        if (favs.includes(id)) {
            const newFavs = favs.filter(favId => favId !== id);
            setTheUser({ ...user, favs: newFavs });
        } else {
            favs.push(id);
            setTheUser({ ...user, favs });
        }
    }

    return (

        <ScrollView
            horizontal={true}
            pagingEnabled={true}
        >
            <ScrollView
            >
                <View style={styles.container}>
                    <SearchBox searchField={searchField} onSearchChange={onSearchChange} />
                    {
                        filteredMovies.map(movie => (
                            <TouchableHighlight
                                key={movie.id}
                            >
                                <MovieCard onMovieClick={onMovieClick} movie={movie} addFavorite={addFavoriteHandler} isFavorite={user.favs && user.favs.some(id => movie.id === id)} />
                            </TouchableHighlight>
                        ))}

                </View>

            </ScrollView>

            <View style={{
                backgroundColor: "black",
                flex: 1,
                width: screenWidth,
                alignItems: "center"
            }} >
                <Image style={styles.avatar} source={{ uri: user.avatar }} />
                <Text style={{ color: "white", marginTop: 50, fontSize: 50, fontWeight: "bold" }} >{user.name}</Text>
                <Text style={{ color: "white", fontSize: 20, marginTop: 50 }}>NUMERO DE PELIS FAVORITAS: {user.favs.length}</Text>
            </View>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        width: 500,
        flex: 1,
        backgroundColor: '#F4F4F4',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 70,
        paddingHorizontal: 20,
        width: screenWidth
    },
    results: {
        width: "100%"
    },
    avatar: {
        width: 250,
        height: 250
    }
});

export default Main