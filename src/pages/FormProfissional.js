import React, { useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import SimplesContext from '../contexts/SimplesProvider';
import { Inputt } from '../components/Inputt'; 
import { MainButton } from '../components/MainButton';


export function FormProfissional({ navigation }) {
    const {nivelEsc,setNivelEsc,idioma,setIdioma,experiencia,setExperiencia} = useContext(SimplesContext)
  return (

    <View style={GlobalStyles.screenContainer}>
     
      <Inputt placeholder="Nivel de Escolaridade" ></Inputt>
      <Inputt placeholder="Idioma" ></Inputt>
      <Inputt placeholder="Experiência" ></Inputt>
      <MainButton title="Salvar"/>

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

  button: {
    width: 150,
    height: 30,
    left: -115,
    borderRadius: 5,
    top: -30
  },

  button2: {
    width: 160,
    height: 30,
    left: 80,
    top: -60,
    borderRadius: 5,
    alignContent: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5CC6BA',
    textAlign: 'center'
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5CC6BA',
    textAlign: 'center'
  }

})