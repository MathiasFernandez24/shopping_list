import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from './colors'
import { deleteToDB } from './db'

const ModalDelete = ({ modalDeleteVisible, setModalDeleteVisible, item, setList, setListFilter }) => {

    const closeModalDelete = () => {
        setModalDeleteVisible(false)
    }

    const deleteTask = () => {
        deleteToDB(item)
        setList(prevState => prevState.filter(i => i.id != item.id))
        setModalDeleteVisible(false)
        setListFilter([])
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalDeleteVisible}
            onRequestClose={closeModalDelete}>

            <View style={styles.container}>
                <View style={styles.cardContainer}>

                    <Text style={styles.title}>"{item.value}"</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={closeModalDelete}>
                            <Text style={styles.textButton}>Close</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={deleteTask}>
                            <Text style={styles.textButton}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalDelete

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