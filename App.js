import React from 'react';
import { SuperGridSectionList } from 'react-native-super-grid';
import { StyleSheet, Text, View } from 'react-native';
import SentenceBar from './SentenceBar';
import CardsGallery from './CardsGallery';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sentenceBar: [],
    };
  }

  addCardToSentenceBar = (image, word) => {
    const sbar = this.state.sentenceBar;
    const card = {
      image: image,
      word: word,
    }
    sbar.push(card);
    this.setState({ sentenceBar: sbar });

  }

  render() {
    return (
      <View style={styles.container}>
        <SentenceBar sentenceBar={this.state.sentenceBar} />
        <CardsGallery addCardToSentenceBar={this.addCardToSentenceBar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
