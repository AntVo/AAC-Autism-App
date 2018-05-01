import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Card extends React.Component {

  
render() {
    return (
      <View>
        <Image style={styles.image} source={this.props.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aliceblue',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  image: {
    height: 100,
    width: 100,
  }

});
