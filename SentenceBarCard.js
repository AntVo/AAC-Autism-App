import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

export default class SentenceBarCard extends React.Component {


render() {
    return (
      <View  style={styles.container} >
        <Image style={styles.image} source={this.props.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  image: {
    height: 60,
    width: 60,
    borderWidth: 1,
  }
 
});
