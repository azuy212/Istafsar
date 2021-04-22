import { View } from '@components/Themed';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import {
  Avatar,
  Button,
  Card,
  FAB,
  Paragraph,
  Snackbar,
  Title,
} from 'react-native-paper';

const LeftContent = (props: { size: number }) => (
  <Avatar.Icon {...props} icon="folder" />
);

function reducer(state: boolean, action: 'on' | 'off' | 'toggle') {
  switch (action) {
    case 'on':
      return true;
    case 'off':
      return false;
    case 'toggle':
      return !state;
    default:
      throw new Error();
  }
}

export default function TabOneScreen() {
  const [visible, dispatch] = React.useReducer(reducer, false);

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
          <Button onPress={() => dispatch('off')}>Cancel</Button>
          <Button onPress={() => dispatch('toggle')}>Ok</Button>
        </Card.Actions>
      </Card>
      <FAB style={styles.fab} icon="plus" />
      <Snackbar visible={visible} onDismiss={() => dispatch('off')}>
        Hey there! I am a Snackbar.
      </Snackbar>
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
