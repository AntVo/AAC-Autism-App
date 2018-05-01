import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import images from './images';

export default class CardsGallery extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Card image={images.i}/>
        <Card image={images.ilike}/>
        <Card image={images.isee}/>
        <Card image={images.iwant}/>
        <Card image={images.happy}/>
        <Card image={images.thirsty}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .85,
    backgroundColor: 'aliceblue',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
