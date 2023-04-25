import { StyleSheet, View } from 'react-native';
import MyInput from './src/MyInput';
import { useState } from 'react';
import MyList from './src/MyList';

export default function App() {
  const [list, setList] = useState([])
  console.log("-----------------------------");
  console.log(list);
  return (
    <View style={styles.container}>
      <MyList list={list} setList={setList} />
      <MyInput setList={setList} />
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
