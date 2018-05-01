import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import images from './images';

export default class CardsGallery extends React.Component {


  renderCardsGallery = () => {
    // default, emotion, fun, food, animal, activity
    const currentBoard = this.props.currentBoard;

    switch(currentBoard) {
      case "default":

        break;
      case "emotion":
        break;
      case "fun":
        break;
      case "food":
        break;
      case "animal":
        break;
      case "activity":
        break;
      default:
        break;
    }


  }


  render() {
    return (
      <View style={styles.container}>
        <Card image={images.i} addCardToSentenceBar={this.props.addCardToSentenceBar} } />
        <Card image={images.ilike} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
        <Card image={images.isee} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
        <Card image={images.iwant} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
        <Card image={images.happy} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
        <Card image={images.thirsty} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
        <Card image={images.i} addCardToSentenceBar={this.props.addCardToSentenceBar} />
        <Card image={images.i} addCardToSentenceBar={this.props.addCardToSentenceBar} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .75,
    backgroundColor: 'aliceblue',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
});
