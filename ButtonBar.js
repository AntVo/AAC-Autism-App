import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, Button } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ButtonBar extends React.Component {

render() {
    return (
      <View  style={styles.container} >
        <Button onPress={this.props.clearSentenceBar} title="Clear" color="#841584"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({



  container: {
    flex: .05,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
 
});
