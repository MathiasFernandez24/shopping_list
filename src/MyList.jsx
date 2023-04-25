import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Item from './Item'

const MyList = ({ list, setList }) => {
    return (
        <View style={styles.container}>
            {
                list.length == 0 ?
                    <Text style={styles.noElementsText}>No items..</Text>
                    :
                    <FlatList
                        data={list}
                        // renderItem={({ item }) => <Item item={item} />}
                        // renderItem={iterable => <Item item={iterable} setArray={setArray} />}
                        renderItem={iterable => <Item item={iterable} setList={setList} />}
                        keyExtractor={item => item.id}
                    />
            }
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
        backgroundColor: 'yellow',
        // alignItems: 'center',
    },
    noElementsText: {
        backgroundColor: 'red',
        alignSelf: 'center',
        marginTop: 20,
    }
})