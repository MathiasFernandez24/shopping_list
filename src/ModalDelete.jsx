import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ModalDelete = ({ modalDeleteVisible, setModalDeleteVisible, item, setList }) => {

    const closeModalDelete = () => {
        setModalDeleteVisible(false)
    }

    const deleteTask = () => {
        setList(prevState => prevState.filter(i => i.id != item.id))
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalDeleteVisible}
            onRequestClose={closeModalDelete}>

            <View style={styles.container}>
                <View style={styles.cardContainer}>

                    <Text>"{item.value}"</Text>
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