import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



export function MainButton(props) {
  return (
  
    <View >
      <View>
        <Text >{props.user}</Text>
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={props.onPress}>
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    </View>

  )
};
const styles = StyleSheet.create({

  button: {
    width: 315,
    height: 60,
    top: -50,
    left:-5,
    borderRadius: 5,
    backgroundColor: '#CD5C5C',
    alignContent:'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop:10,
    textAlign: 'center',
    color:'#FFFFFF'
  }


})