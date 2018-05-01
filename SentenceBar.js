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
    flex: .15,
    backgroundColor: 'floralwhite',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
});
