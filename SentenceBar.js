import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';

export default class SentenceBar extends React.Component {

  renderSentenceBar = () => {
    console.log(this.props.sentenceBar);
    return (
      this.props.sentenceBar.map((card) => {
        return(
          <Card image={card.image} />
        )
      })
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderSentenceBar()}
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
