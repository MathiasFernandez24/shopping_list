import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const MyInput = ({ list, setList, setListFilter }) => {
    const [palabraInput, setPalabraInput] = useState("")

    useEffect(() => {
        setListFilter(list.filter((i) => i.value.includes(palabraInput)))
    }, [palabraInput, list])


    const onSubmit = () => {
        let date = Date.now()
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
            <TextInput value={palabraInput} style={styles.input} onChangeText={onChangeTextInput} />
            <TouchableOpacity disabled={palabraInput == "" ? true : false} onPress={onSubmit}>

                {/* COMPONENTE TEMPORAL */}
                <View style={styles.buttonAdd}>
                    <Text style={styles.textButtonAdd}>+</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default MyInput

const styles = StyleSheet.create({
    container: {
        // height: 500,
        // backgroundColor: 'green',
        // margin: 20,
        padding: 10,
        flexDirection: 'row'
    },
    buttonAdd: {
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 40,
        // width: 35,
        // height: 35,
    },
    textButtonAdd: {
        fontSize: 30,
        marginHorizontal: 12,

    },
    input: {
        flex: 1,
        backgroundColor: 'pink',
        borderWidth: 1,
        marginRight: 5,
        paddingHorizontal: 10
    },

})