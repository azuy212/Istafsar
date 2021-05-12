import { View } from '@components/Themed';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import QuestionListItem from './components/QuestionListItem';

export default function TabOneScreen() {
  const [questions, setQuestions] = useState([] as boolean[]);

  useEffect(() => {
    setQuestions(Array(2).fill(true));
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={questions}
        renderItem={QuestionListItem}
        keyExtractor={(_, idx) => idx.toString()}
      />
      <FAB style={styles.fab} icon="plus" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  card: {
    margin: 20,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
