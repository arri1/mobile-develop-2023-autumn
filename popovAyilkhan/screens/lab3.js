import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator, SafeAreaView, FlatList } from "react-native";
import { useState, useMemo } from "react";
import { connect } from 'react-redux';

const Lab3 = ({theme}) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [timeapi, setTimeApi] = useState(0);
    const [timememo, setTimeMemo] = useState(0);
  
    const fetchBooks = async () => {
        let start = Date.now();
        try {
            setLoading(true);
            const response = await fetch("https://fakerapi.it/api/v1/texts?_quantity=1000&_characters=500", {});
            const data = await response.json();
            setBooks(data.data);
        } catch (error) {
            console.error(error);
        } finally {
            console.log("Finish load");
            setTimeApi(Date.now() - start);
            setLoading(false);
        }
    };

    const booksData = useMemo(() => books, [books]);

    const loadFromMemo = () => {
        let start = Date.now();
        setLoading(true);
        setBooks(booksData);
        setLoading(false);
        setTimeMemo(Date.now() - start);
    };
  
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.titleItem}>{item.title}</Text>
            <Text style={styles.author}>Author: {item.author}</Text>
            <Text style={styles.genre}>Genre: {item.genre}</Text>
        </View>
    );
  
    return (
        <View style={theme === 'light' ? styles.containerFirst : styles.containerSecond}>
            <Text style={styles.title}>LIST OF BOOKS</Text>
            <TouchableOpacity style={styles.firstButton} onPress={fetchBooks}>
                <Text style={styles.textButton}>
                Download books
                </Text>
            </TouchableOpacity>
            <Text style={styles.time}>Loading time: {timeapi}ms</Text>
            <TouchableOpacity style={styles.secondButton} onPress={loadFromMemo}>
                <Text style={styles.textButton}>
                Load from Cache
                </Text>
            </TouchableOpacity>
            <Text style={styles.time}>Load time from cache: {timememo}ms</Text>
            {loading ? (
                <Text style={styles.time}>Loading...</Text>
            ) : (
                <FlatList
                    style={styles.flatlist}
                    data={books.slice(0, 10)}
                    renderItem={renderItem}
                />
            )}
        </View>
    );
};


const mapStateToProps = (state) => ({
    theme: state.theme,
});


const styles = StyleSheet.create({
    containerFirst: {
        flex: 1,
        backgroundColor: '#2F3C5F',
        alignItems: 'center',
      },
      containerSecond: {
        flex: 1,
        backgroundColor: '#327CFF',
        alignItems: 'center',
      },
    item: {
        marginBottom: 28,
    },
    titleItem: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Roboto',
        fontWeight: '700',
        marginBottom: 8,
    },
    author: {
        color: 'white',
        fontSize: 13,
        fontFamily: 'Roboto',
        fontWeight: '500',
        marginBottom: 8,
    },
    genre: {
        color: 'white',
        fontSize: 13,
        fontFamily: 'Roboto',
        fontWeight: '500',
    },
    firstButton:{
        width: 270,
        height: 38,
        borderRadius: 41, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EFF0F6',
        marginTop: 34
    },
    secondButton:{
        width: 270,
        height: 38,
        borderRadius: 41, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EFF0F6',
        marginTop: 28
    },
    textButton:{
        color: '#343333',
        fontSize: 15,
        fontFamily: 'Roboto',
        fontWeight: '700',
    },
    title:{
        color: '#F3F4F6',
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: '700',
        marginTop: 57
    },
    time:{
        color: '#F3F4F6',
        fontSize: 13,
        fontFamily: 'Roboto',
        fontWeight: '400',
        marginTop: 8
    },
    flatlist:{
        width: 275,
        marginTop: 38
    }
});

export default connect(mapStateToProps)(Lab3);