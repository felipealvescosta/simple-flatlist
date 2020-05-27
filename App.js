import React, {useState} from 'react';
import {Text, View, FlatList, SafeAreaView, StyleSheet} from 'react-native';

export default function App() {
  const [peoples, setPeoples] = useState([
    {name: 'Felipe', key: '1'},
    {name: 'Alisson', key: '2'},
    {name: 'Roberto', key: '3'},
    {name: 'Ricardo', key: '4'},
    {name: 'Geraldo', key: '5'},
    {name: 'Maria', key: '6'},
    {name: 'Antonio', key: '7'},
    {name: 'André', key: '8'},
    {name: 'Felps', key: '9'},
    {name: 'Juarez', key: '10'},
  ]);
  console.log(peoples);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Pessoas</Text>
      <FlatList
        keyExtractor={(item) => item.key}
        data={peoples}
        renderItem={({item}) => (
          <Text style={styles.nameList}> {item.name}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 36,
  },
  nameList: {
    marginTop: 24,
    backgroundColor: 'blue',
    padding: 25,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    width: '95%',
    marginLeft: 10,
    marginRight: 10,
  },
});
