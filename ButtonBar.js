import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ButtonBar extends React.Component {

render() {
    return (
      <View  style={styles.container} >
        <TouchableHighlight onPress={this.props.clearSentenceBar} style={styles.clearButton} underlayColor='#ffff4d'>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.clearSentenceBar} style={styles.listenButton} underlayColor='#90EE90'>
          <Text style={styles.buttonText}>Listen</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
  },
  clearButton: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffcc',
  },
  listenButton: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccffcc',
  },
  container: {
    flex: .07,
    flexDirection: 'row',
  }
 
});
