import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Item from './Item'
import { COLORS } from './colors'
import ModalDelete from './ModalDelete'
import ModalEdit from './ModalEdit'

const MyList = ({ list, setList, setListFilter, inputInUse }) => {
    const [modalDeleteVisible, setModalDeleteVisible] = useState(false)
    const [modalEditVisible, setModalEditVisible] = useState(false)
    const [itemSelectedDelete, setItemSelectedDelete] = useState({})
    const [itemSelectedEdit, setItemSelectedEdit] = useState({})

    useEffect(() => {
        // console.log("re-render");
    }, [list])


    const deleteTask = (item) => {
        setItemSelectedDelete(item)
        setModalDeleteVisible(true)
    }

    const editTask = (item) => {
        setItemSelectedEdit(item)
        setModalEditVisible(true)
    }


    return (
        <View style={styles.container}>
            {
                list.length == 0 ?
                    <Text style={styles.noElementsText}>No hay items..</Text>
                    :
                    <FlatList
                        data={list
                            //sort the list by isDone and value
                            .sort((a, b) => a.value.localeCompare(b.value))
                            .sort((a, b) => a.isDone - b.isDone)
                        }
                        renderItem={iterable => <Item item={iterable} setList={setList} deleteTask={deleteTask} editTask={editTask} setListFilter={setListFilter} inputInUse={inputInUse} />}
                        keyExtractor={item => item.id}
                    />
            }
            <ModalDelete
                setList={setList}
                item={itemSelectedDelete}
                modalDeleteVisible={modalDeleteVisible}
                setModalDeleteVisible={setModalDeleteVisible}
                setListFilter={setListFilter} />
            <ModalEdit
                setList={setList}
                item={itemSelectedEdit}
                modalEditVisible={modalEditVisible}
                setListFilter={setListFilter}
                setModalEditVisible={setModalEditVisible} />
        </View>
    )
}

export default MyList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingTop: 30,
        padding: 10,
    },
    noElementsText: {
        backgroundColor: COLORS.secondary,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 10,
        padding: 5,
        paddingHorizontal: 10,
    }
})