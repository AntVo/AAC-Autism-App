import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class BottomNavBar extends React.Component {


handlePress = (board) => {
  console.log("hey");
  this.props.setBoard(board);
}

render() {
    return (
      <View  style={styles.container} >
        <MaterialCommunityIcon name='account' size={35} style={{ marginLeft:10, padding:5, marginRight: 10, color: "grey" }} onPress={this.handlePress.bind(this, "default")} />
        <MaterialCommunityIcon name='emoticon' size={35} style={{ marginLeft:10, padding:5, marginRight: 10, color: "grey" }} onPress={this.handlePress.bind(this, "emotion")} />
        <MaterialCommunityIcon name='soccer' size={35} style={{ marginLeft:10, padding:5, marginRight: 10, color: "grey" }} onPress={this.handlePress.bind(this, "fun")} />
        <MaterialCommunityIcon name='food' size={35} style={{ marginLeft:10, padding:5, marginRight: 10, color: "grey" }} onPress={this.handlePress.bind(this, "food")} /> 
        <MaterialCommunityIcon name='cat' size={35} style={{ marginLeft:10, padding:5, marginRight: 10, color: "grey" }} onPress={this.handlePress.bind(this, "animal")} />
        <MaterialCommunityIcon name='calendar-check' size={35} style={{ marginLeft:10, padding:5, marginRight: 10, color: "grey" }} onPress={this.handlePress.bind(this, "activity")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({



  container: {
    flex: .10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
 
});
