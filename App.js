import { StyleSheet, View } from 'react-native';
import MyInput from './src/MyInput';
import { useEffect, useState } from 'react';
import MyList from './src/MyList';

//ModalEdit -> intentando que aparezca el teclado
export default function App() {
  const [list, setList] = useState([])
  const [listFilter, setListFilter] = useState([])

  return (
    <View style={styles.container}>
      <MyList
        list={listFilter.length > 0 ? listFilter : list}
        setList={setList}
        setListFilter={setListFilter}
      />
      <MyInput list={list} setList={setList} setListFilter={setListFilter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
