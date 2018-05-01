import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';

export default class CardsGallery extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Card image={img1}/>
        <Card image={img2}/>
        <Card image={img1}/>
        <Card image={img2}/>      
        <Card image={img1}/>      
        <Card image={img2}/>      
        <Card image={img1}/>      
        <Card image={img2}/>      
        <Card image={img1}/>      
        <Card image={img2}/>      
        <Card image={img1}/>      
        <Card image={img2}/>      
        <Card image={img1}/>      
        <Card image={img2}/>      
        <Card image={img1}/>      
        <Card image={img2}/>      
        <Card image={img1}/>      
        <Card image={img2}/>      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .8,
    backgroundColor: 'aliceblue',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
