import { StyleSheet, View } from 'react-native';
import MyInput from './src/MyInput';
import { useState } from 'react';
import MyList from './src/MyList';
import { COLORS } from './src/colors';

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
    backgroundColor: COLORS.tertiary,
    alignItems: 'center',
  },
});
