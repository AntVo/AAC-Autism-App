import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SentenceBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Sentence Bar</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .2,
    backgroundColor: 'floralwhite',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
