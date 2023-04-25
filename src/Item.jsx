import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Item = ({ item, setList }) => {
    const { index } = item
    const { name, isDone, id } = item.item

    const [valueItem, setValueItem] = useState(name)

    const editText = () => {
        // console.log(item.item);
        setList(prevState => [...prevState.filter(i => i.id != item.item.id), { name: name, id: id, isDone: !isDone }])
    }

    return (
        <TouchableOpacity style={styles.container} onPress={editText}>
            <Text style={{ backgroundColor: 'red' }}>{index + 1} </Text>
            <Text style={isDone ? styles.textIndexDone : styles.textIndex} >{name}</Text>
            {/* <MyModal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} setArray={setArray} item={item.item} /> */}
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
    },
    textIndex: {
        marginHorizontal: 5,
    },
    textIndexDone: {
        marginHorizontal: 5,
        textDecorationLine: 'line-through',
        opacity: 0.3,
    },
})