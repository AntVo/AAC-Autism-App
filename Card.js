import React from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';

export default class Card extends React.Component {

  
handlePress = () => {
  this.props.addCardToSentenceBar( this.props.image, this.props.word );
}

render() {
    return (
      <TouchableHighlight onPress={this.handlePress} underlayColor='#90EE90'>
        <Image style={styles.image} source={this.props.image} />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({


  image: {
    margin: 10,
    height: 60,
    width: 60,
    borderWidth: 2,
  }

});
