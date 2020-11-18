import React, { useEffect, useState, } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { handleGetMovies } from '../../lib/api';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import MovieCard from '../../components/MovieCard/MovieCard';
import SearchBox from '../../components/SearchBox/SearchBox';
import Loading from '../../components/Loading/Loading';

let screenWidth = Dimensions.get("window").width;

const Main = ({ navigation }) => {

    const [theMovies, setTheMovies] = useState([]);
    const [searchField, setSearchField] = useState("");
    const [user, setTheUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const filteredMovies = theMovies.filter(movie => movie.title.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()));

    useEffect(() => {
        setIsLoading(true);
        handleGetMovies()
            .then(data => {
                setTheMovies(data.contents);
                setTheUser(data.user);
                setIsLoading(false);
            })
            .catch(err => {
                navigation.navigate("Error");
                setIsLoading(false);

            })
    }, [])

    if (isLoading) {
        return <Loading />
    }

    const onSearchChange = (event) => {
        setSearchField(event);
    };

    const onMovieClick = (id) => {
        navigation.navigate("Player", { id });
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
            <ScrollView>
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

            <View style={styles.user} >
                <Image style={styles.avatar} source={{ uri: user.avatar }} />
                <Text style={{ color: "white", marginTop: 50, fontSize: 50, fontWeight: "bold" }} >{user.name}</Text>

                {user && user.favs && <Text style={{ color: "white", fontSize: 20, marginTop: 50 }}>NUMERO DE PELIS FAVORITAS: {user.favs.length} </Text>}

            </View>
        </ScrollView>
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
    user: {
        backgroundColor: "#223343",
        flex: 1,
        width: screenWidth,
        alignItems: "center"
    },
    results: {
        width: "100%"
    },
    avatar: {
        width: 250,
        height: 250
    }
});

export default Main;