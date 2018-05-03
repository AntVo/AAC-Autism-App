import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import { activities, expression, feeling, food, things }  from './images';


export default class CardsGallery extends React.Component {


  renderCardsGallery = () => {
    // default, emotion, fun, food, animal, activity
    const currentBoard = this.props.currentBoard;

    switch(currentBoard) {
      case "expression":
        return (
          Object.keys(expression).map((item, i) => (
              <Card image={expression[item]} addCardToSentenceBar={this.props.addCardToSentenceBar} key={i}></Card>
          )))

      case "feeling":
         return (
          Object.keys(feeling).map((item, i) => (
              <Card image={feeling[item]} addCardToSentenceBar={this.props.addCardToSentenceBar} key={i}></Card>
          )))

      case "activities":
         return (
          Object.keys(activities).map((item, i) => (
              <Card image={activities[item]} addCardToSentenceBar={this.props.addCardToSentenceBar} key={i}></Card>
          )))     

      case "food":
         return (
          Object.keys(food).map((item, i) => (
              <Card image={food[item]} addCardToSentenceBar={this.props.addCardToSentenceBar} key={i}></Card>
          )))     

      case "things":
          return(
           Object.keys(things).map((item, i) => (
              <Card image={things[item]} addCardToSentenceBar={this.props.addCardToSentenceBar} key={i}></Card>
          )))     

      default:
        break;
    }


  }


render() {
    return (
      <View style={styles.container}>
        {this.renderCardsGallery()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .65,
    backgroundColor: 'aliceblue',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
});
