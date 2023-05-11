import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from './colors'

const ModalEdit = ({ setList, modalEditVisible, setModalEditVisible, item }) => {

    const [newValueInput, setNewValueInput] = useState(item.value)

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
        setList(prevState => [...prevState.filter(i => i.id != item.id), { value: newValueInput, id: item.id, isDone: item.isDone }])
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
                    <TextInput style={styles.title} value={newValueInput} onChangeText={changeInput} autoFocus={modalEditVisible} />
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
        backgroundColor: COLORS.secondary,
        borderColor: COLORS.acent,
        borderWidth: 1,
        marginTop: 50,
        width: 300,
        height: 120,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    buttonContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textButton: {
        margin: 5,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        color: COLORS.acent,
        fontSize: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,
        elevation: 22,
    },
    title: {
        textAlign: 'center',
        width: '100%',
        backgroundColor: COLORS.tertiary,
        borderRadius: 5,
        fontSize: 25
    }
})