import * as React from 'react';
import { StyleSheet } from 'react-native';
import {
  Button,
  Card,
  Title,
  Paragraph,
  Avatar,
  Snackbar,
  FAB,
} from 'react-native-paper';

import { View } from '../components/Themed';

const LeftContent = (props: { size: number }) => (
  <Avatar.Icon {...props} icon="folder" />
);

export default function TabOneScreen() {
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

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
          <Button onPress={onDismissSnackBar}>Cancel</Button>
          <Button onPress={onToggleSnackBar}>Ok</Button>
        </Card.Actions>
      </Card>
      <FAB style={styles.fab} icon="plus" />
      <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
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
