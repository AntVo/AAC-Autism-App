import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class BottomNavBar extends React.Component {


handlePress = (board) => {
  this.props.setBoard(board);
}
alphabetical
render() {
    return (
      <View  style={styles.container} >
        <MaterialCommunityIcon name='alphabetical' size={35} style={{ marginLeft:10, padding:5, marginRight: 10, color: "grey" }} onPress={this.handlePress.bind(this, "activities")} />
        <MaterialCommunityIcon name='account' size={35} style={{ marginLeft:10, padding:5, marginRight: 10, color: "grey" }} onPress={this.handlePress.bind(this, "expression")} />
        <MaterialCommunityIcon name='emoticon' size={35} style={{ marginLeft:10, padding:5, marginRight: 10, color: "grey" }} onPress={this.handlePress.bind(this, "feeling")} />
        <MaterialCommunityIcon name='food' size={35} style={{ marginLeft:10, padding:5, marginRight: 10, color: "grey" }} onPress={this.handlePress.bind(this, "food")} /> 
        <MaterialCommunityIcon name='star' size={35} style={{ marginLeft:10, padding:5, marginRight: 10, color: "grey" }} onPress={this.handlePress.bind(this, "things")} />
        <MaterialCommunityIcon name='calendar-check' size={35} style={{ marginLeft:10, padding:5, marginRight: 10, color: "grey" }} onPress={this.handlePress.bind(this, "activities")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({



  container: {
    flex: .11,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
 
});
