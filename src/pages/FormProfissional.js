import React, { useContext } from 'react';
import { StyleSheet, View,TextInput } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import SimplesContext from '../contexts/SimplesProvider';
import { Inputt } from '../components/Inputt';
import { MainButton } from '../components/MainButton';


export function FormProfissional({ navigation }) {
  const { nivelEsc, setNivelEsc, idioma, setIdioma, experiencia, setExperiencia } = useContext(SimplesContext)
  return (

    <View style={GlobalStyles.screenContainer}>

      <Inputt placeholder="Nivel de Escolaridade" value={nivelEsc} onChangeText={x => setNivelEsc(x)}></Inputt>
      <Inputt placeholder="Idioma" value={idioma} onChangeText={x => setIdioma(x)}></Inputt>
      <View style={styles.textAreaContainer} >
        <TextInput
          style={styles.textArea}
          placeholder="Experiência"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
          value={experiencia} onChangeText={x => setExperiencia(x)}
        />
      </View>
           
      <MainButton title="Salvar" onPress={() => navigation.navigate('Home')} />

    </View>

  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
  imagem: {
    width: 250,
    height: 200,
    top: -20

  },
  Text: {
    fontSize: 20,
    color: '#5CC6BA',
    fontWeight: 'bold',
    top: -40,
    left: -95,

  },

  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5CC6BA',
    textAlign: 'center'
  },
  textAreaContainer: {
    borderColor: '#CD5C5C',
    borderWidth: 2,
    top:-40,
    borderRadius:12,
    left:-5
    
  },
  textArea: {
    height: 100,
    width:305
  },


})