import React from 'react';
import { StyleSheet, View, TextInput} from 'react-native';



export function Inputt({ placeholder,props, onPress, onChangeText, ...rest }) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputText} placeholder={placeholder}
        {...rest}
        onChangeText={onChangeText} 
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '94%',
    height: 60,
    top: -50,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 12
  },
  inputText: {
    flex: 1,
    height: '100%',
    backgroundColor: '#F1F5F4',
    paddingLeft: 20,
    fontSize: 17,
    borderRadius: 10,
    padding: 4,
    borderWidth: 2,
    borderColor: '#CD5C5C'
  },

});