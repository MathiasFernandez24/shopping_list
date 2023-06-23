import { Button, StyleSheet, View } from 'react-native';
import MyInput from './src/MyInput';
import { useEffect, useState } from 'react';
import MyList from './src/MyList';
import { COLORS } from './src/colors';
import { getDB, initDB } from './src/db';

export default function App() {
  const [list, setList] = useState([])
  const [listFilter, setListFilter] = useState([])
  useEffect(() => {
    initDB()
    getDB(setList, setListFilter)
  }, [])

  return (
    <View style={styles.container}>
      <MyList
        list={listFilter.length > 0 ? listFilter : list}
        setList={setList}
        setListFilter={setListFilter}
      />
      <MyInput
        list={list}
        setList={setList}
        setListFilter={setListFilter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tertiary,
    alignItems: 'center',
  },
});
