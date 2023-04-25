import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const ModalEdit = ({ setList, modalEditVisible, setModalEditVisible, item }) => {
    const [newValueInput, setNewValueInput] = useState(item.value)
    const [autofocus, setAutofocus] = useState(false)

    useEffect(() => {
        setNewValueInput(item.value)
    }, [modalEditVisible])

    const changeInput = (word) => {
        setNewValueInput(word)
    }
    const closeModalEdit = () => {
        setModalEditVisible(false)
    }

    const saveTask = () => {
        //sort the list by isDone and value
        setList(prevState => [...prevState.filter(i => i.id != item.id), { value: newValueInput, id: item.id, isDone: item.isDone }]
            .sort((a, b) => a.value.localeCompare(b.value))
            .sort((a, b) => a.isDone - b.isDone))
        closeModalEdit()
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalEditVisible}
            onRequestClose={closeModalEdit}>

            <View style={styles.container}>
                <View style={styles.cardContainer}>

                    {/* <Text>"hola"</Text> */}
                    <TextInput value={newValueInput} onChangeText={changeInput} autoFocus={true} />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={closeModalEdit}>
                            <Text style={styles.textButton}>Close</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={saveTask}>
                            <Text style={styles.textButton}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalEdit

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    cardContainer: {
        backgroundColor: 'grey',
        marginTop: 50,
        width: 300,
        height: 80,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
    buttonContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textButton: {
        margin: 5,
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    }
})