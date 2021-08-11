import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import SimplesContext from '../contexts/SimplesProvider'




export function Home({ navigation }) {
  const { nome, cpf, email, nivelEsc, idioma, experiencia } = useContext(SimplesContext)
  return (

    <View style={GlobalStyles.screenContainer}>
    
      <View>
        <Text style={styles.text1}>Nome: {nome}</Text>
        <Text style={styles.text1}>CPF: {cpf}</Text>
        <Text style={styles.text1}>E-mail: {email}</Text>
        <Text style={styles.text1}>Nivel Escolar: {nivelEsc}</Text>
        <Text style={styles.text1}>Idioma: {idioma}</Text>
        <Text style={styles.text1}>Experiência: {experiencia}</Text>
      </View>

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
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    top:-200,
    left:-4
  }

})