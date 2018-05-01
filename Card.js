import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

export default class Card extends React.Component {

  
handlePress = () => {
  console.log(this.props.image);
  this.props.addCardToSentenceBar( this.props.image, this.props.word );
}

render() {
    return (
      <TouchableHighlight onPress={this.handlePress}>
        <Image style={styles.image} source={this.props.image} />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({

  image: {
    height: 100,
    width: 100,
    borderWidth: 2,
  }

});
