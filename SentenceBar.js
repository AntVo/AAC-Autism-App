import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from './Card';
import SentenceBarCard from './SentenceBarCard';

export default class SentenceBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBoard: 'expression',
      // default, emotion, fun, food, animal, activity
      sentenceBar: [],
    };
  }

  renderSentenceBar = () => {
    return (
      this.props.sentenceBar.map((card, key) => {
        return(
          <SentenceBarCard key={key} image={card.image} />
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
    flex: .16,
    backgroundColor: 'floralwhite',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
});
