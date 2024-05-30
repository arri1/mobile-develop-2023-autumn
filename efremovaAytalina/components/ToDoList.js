import React from 'react';
import { StyleSheet, View } from 'react-native';

import Task from './Task';

const ToDoList = ({ tasks, toggle }) => {
    return (
        <View>
            {tasks.map(task => (
                <View key={task.id} style={styles.task}>
                    <Task toggle={() => toggle(task.id)} done={task.done} text={task.title} />
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    task: {
        marginBottom: 10
    }
});

export default ToDoList;