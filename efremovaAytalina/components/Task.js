import React from 'react';
import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native';

const Task = ({ done, text, toggle }) => {
    return (
        <TouchableOpacity onPress={toggle} style={styles.taskContainer}>
            { done ? <>
                <Image source={require('../assets/tick.png')} />
                <Text style={{...styles.text, textDecorationLine: 'line-through'}}>{text}</Text>
            </> : (
                <>
                    <View style={styles.emptyTick}></View>
                    <Text style={styles.text}>{text}</Text>
                </>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    taskContainer: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    text: {
        color: '#000',
        fontSize: 16,
        marginLeft: 10
    },
    emptyTick: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: '#1100D0'
    }
});

export default Task;