import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Caption } from 'react-native-paper';
import { Text } from '@components/Themed';

export default function QuestionListItem() {
  return (
    <Card style={styles.container} elevation={3}>
      <Card.Content>
        <Text style={styles.overline}>PRAYER</Text>
        <Title>What is ..... ?</Title>
      </Card.Content>
      <Card.Actions style={styles.actions}>
        <Text
          lightColor="rgba(0, 0, 0, 0.6)"
          darkColor="rgba(255, 255, 255, 0.6)"
        >
          Answers: 1
        </Text>
        <Caption style={styles.timestamp}>Asked 5 minutes ago</Caption>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  overline: {
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 1.5,
    fontWeight: '500',
  },
  actions: {
    paddingHorizontal: 16,
    flex: 1,
  },
  body2: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  timestamp: {
    alignSelf: 'flex-end',
  },
});
