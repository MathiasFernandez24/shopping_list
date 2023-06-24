import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from './colors'
import { addToDB } from './db'

const MyInput = ({ list, setList, setListFilter, setInputInUse }) => {
    const [palabraInput, setPalabraInput] = useState("")
    "".toLocaleLowerCase
    useEffect(() => {
        setListFilter(list.filter((i) => i.value.toLocaleLowerCase().includes(palabraInput.toLocaleLowerCase())))
        if (palabraInput !== "") {
            setInputInUse(true)
        } else {
            setInputInUse(false)
        }
    }, [palabraInput])


    const onSubmit = () => {
        let date = Date.now()
        addToDB({ value: palabraInput, id: date, isDone: false })
        setList((array) => {
            const newList = [{ value: palabraInput, id: date, isDone: false }, ...array]
            return newList
        })
        setPalabraInput("")
        setListFilter([])
    }

    const onChangeTextInput = (i) => {
        setPalabraInput(i)
    }

    return (
        <View style={styles.container} >
            <TextInput value={palabraInput} style={styles.input} onChangeText={onChangeTextInput} placeholder='Add Item' />
            <TouchableOpacity disabled={palabraInput == "" ? true : false} onPress={onSubmit} style={{ opacity: palabraInput == "" ? 0.35 : 1 }}>
                <Image style={styles.imageAdd} source={require('./Icons/addItem.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default MyInput

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row'
    },
    imageAdd: {
        backgroundColor: COLORS.tertiary,
        borderRadius: 5,
        height: 40,
        width: 40,
        borderWidth: 1,
        borderColor: 'black'
    },
    input: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        borderWidth: 1,
        marginRight: 5,
        paddingHorizontal: 10,
        height: 40,
        borderRadius: 5,
    },

})