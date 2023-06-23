import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from './colors'
import { updateIsDoneToDB } from './db'

const Item = ({ item, setList, deleteTask, editTask, setListFilter, inputInUse }) => {
    const { index } = item
    const { value, isDone, id } = item.item

    const completeTask = () => {
        setList(prevState => {
            setListFilter(
                inputInUse ?
                    prev => [...prev.filter(i => i.id != item.item.id), { value: value, id: id, isDone: !isDone }]
                    :
                    [...prevState.filter(i => i.id != item.item.id), { value: value, id: id, isDone: !isDone }]
            )
            return [...prevState.filter(i => i.id != item.item.id), { value: value, id: id, isDone: !isDone }]
        })
        updateIsDoneToDB(id, !isDone)
    }

    return (
        <TouchableOpacity style={styles.container} onPress={completeTask} onLongPress={() => editTask(item.item)}>
            <Text style={styles.orderNumber}>{index + 1} </Text>
            <Text style={isDone ? styles.textIndexDone : styles.textIndex} >{value}</Text>
            <TouchableOpacity onPress={() => deleteTask(item.item)}>
                <Image style={styles.imageButtonDelete} source={require('./Icons/deleteItem.png')} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default Item

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderWidth: 1,
        borderColor: COLORS.acent,
        backgroundColor: COLORS.primary,
        padding: 8,
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    textIndex: {
        marginHorizontal: 5,
        backgroundColor: COLORS.tertiary,
        fontSize: 20,
        flex: 1,
    },
    textIndexDone: {
        marginHorizontal: 5,
        backgroundColor: COLORS.tertiary,
        fontSize: 20,
        flex: 1,
        textDecorationLine: 'line-through',
        opacity: 0.3,
    },
    imageButtonDelete: {
        backgroundColor: COLORS.tertiary,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 10,
        width: 35,
        height: 35,
    },
    orderNumber: {
        backgroundColor: COLORS.acent,
        fontSize: 16,
        marginRight: 5,
        marginLeft: -3,
        paddingLeft: 4,
        borderRadius: 15,

    }
})