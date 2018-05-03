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
        return (
          <View style={styles.container}>
            <Card image={images.i} addCardToSentenceBar={this.props.addCardToSentenceBar} />
            <Card image={images.isee} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.isee} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.iwant} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.happy} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.thirsty} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.i} addCardToSentenceBar={this.props.addCardToSentenceBar} />
            <Card image={images.i} addCardToSentenceBar={this.props.addCardToSentenceBar} />
         </View>
        )
        break;
      case "emotion":
         return (
          <View style={styles.container}>
            <Card image={images.i} addCardToSentenceBar={this.props.addCardToSentenceBar} />
            <Card image={images.iwant} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.isee} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.iwant} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.happy} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.thirsty} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.i} addCardToSentenceBar={this.props.addCardToSentenceBar} />
            <Card image={images.i} addCardToSentenceBar={this.props.addCardToSentenceBar} />
         </View>
        )
        break;
      case "fun":
         return (
          <View style={styles.container}>
            <Card image={images.i} addCardToSentenceBar={this.props.addCardToSentenceBar} />
            <Card image={images.ilike} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.isee} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.iwant} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.happy} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.thirsty} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.i} addCardToSentenceBar={this.props.addCardToSentenceBar} />
            <Card image={images.i} addCardToSentenceBar={this.props.addCardToSentenceBar} />
         </View>
        )      
        break;
      case "food":
         return (
          <View style={styles.container}>
            <Card image={images.i} addCardToSentenceBar={this.props.addCardToSentenceBar} />
            <Card image={images.ilike} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.isee} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.iwant} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.happy} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.thirsty} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.i} addCardToSentenceBar={this.props.addCardToSentenceBar} />
            <Card image={images.i} addCardToSentenceBar={this.props.addCardToSentenceBar} />
         </View>
        )      
        break;
      case "animal":
        return (
          <View style={styles.container}>
            <Card image={images.i} addCardToSentenceBar={this.props.addCardToSentenceBar} />
            <Card image={images.ilike} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.isee} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.iwant} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.happy} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.thirsty} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.i} addCardToSentenceBar={this.props.addCardToSentenceBar} />
            <Card image={images.i} addCardToSentenceBar={this.props.addCardToSentenceBar} />
         </View>
        )     
        break;
      case "activity":
        return (
          <View style={styles.container}>
            <Card image={images.i} addCardToSentenceBar={this.props.addCardToSentenceBar} />
            <Card image={images.ilike} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.isee} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.iwant} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.happy} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.thirsty} addCardToSentenceBar={this.props.addCardToSentenceBar}/>
            <Card image={images.i} addCardToSentenceBar={this.props.addCardToSentenceBar} />
            <Card image={images.i} addCardToSentenceBar={this.props.addCardToSentenceBar} />
         </View>
        )     
        break;
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
    flex: .75,
    backgroundColor: 'aliceblue',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
});
