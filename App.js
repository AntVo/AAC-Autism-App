import React from 'react';
import { SuperGridSectionList } from 'react-native-super-grid';
import { StyleSheet, Text, View } from 'react-native';
import SentenceBar from './SentenceBar';
import CardsGallery from './CardsGallery';
import BottomNavBar from './BottomNavBar';
import ButtonBar from './ButtonBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBoard: 'expression',
      // default, emotion, fun, food, animal, activity
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

  setBoard = (board) => {
    console.log(board);
    this.setState({ currentBoard: board });
  }

  clearSentenceBar = () => {
    this.setState({ sentenceBar: [] });
  }

  render() {
    return (
      <View style={styles.container}>
        <SentenceBar sentenceBar={this.state.sentenceBar} />
        <ButtonBar clearSentenceBar={this.clearSentenceBar} />
        <CardsGallery addCardToSentenceBar={this.addCardToSentenceBar} currentBoard={this.state.currentBoard} />
        <BottomNavBar setBoard={this.setBoard} />
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
