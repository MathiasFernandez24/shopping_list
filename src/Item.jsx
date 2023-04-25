import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ModalDelete from './ModalDelete'
import ModalEdit from './ModalEdit'

const Item = ({ item, setList }) => {
    const { index } = item
    const { value, isDone, id } = item.item

    const [modalDeleteVisible, setModalDeleteVisible] = useState(false)
    const [modalEditVisible, setModalEditVisible] = useState(false)

    const completeTask = () => {
        //sort the list by isDone and value
        setList(prevState => [...prevState.filter(i => i.id != item.item.id), { value: value, id: id, isDone: !isDone }]
            .sort((a, b) => a.value.localeCompare(b.value))
            .sort((a, b) => a.isDone - b.isDone))
    }

    const deleteTask = () => {
        setModalDeleteVisible(true)
    }

    const editTask = () => {
        setModalEditVisible(true)
    }

    return (
        <TouchableOpacity style={styles.container} onPress={completeTask} onLongPress={editTask}>
            <Text style={{ backgroundColor: 'red' }}>{index + 1} </Text>
            <Text style={isDone ? styles.textIndexDone : styles.textIndex} >{value}</Text>
            <TouchableOpacity onPress={deleteTask}>
                <View style={styles.buttonDelete}>
                    <Text style={styles.textButtonDelete}>X</Text>
                </View>
            </TouchableOpacity>
            <ModalDelete setList={setList} item={item.item} modalDeleteVisible={modalDeleteVisible} setModalDeleteVisible={setModalDeleteVisible} />
            <ModalEdit setList={setList} setModalEditVisible={setModalEditVisible} modalEditVisible={modalEditVisible} item={item.item} />
        </TouchableOpacity>
    )
}

export default Item

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        borderWidth: 1,
        backgroundColor: 'green',
        padding: 8,
        // height: 200
    },
    textIndex: {
        marginHorizontal: 5,
        backgroundColor: 'white',
        flex: 1
    },
    textIndexDone: {
        marginHorizontal: 5,
        textDecorationLine: 'line-through',
        opacity: 0.3,
        backgroundColor: 'white',
        flex: 1
    },
    buttonDelete: {
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 40,
        // width: 35,
        // height: 35,
    },
    textButtonDelete: {
        fontSize: 30,
        marginHorizontal: 12,

    },
})