import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './pages/Home';
import { FormPessoal } from './pages/FormPessoal';
import { FormProfissional } from './pages/FormProfissional';

const Stack = createStackNavigator();

export function Routes(){
    return( 
        <Stack.Navigator>
            <Stack.Screen name='FormPessoal' component={FormPessoal}  options={{ title: 'Formulário Pessoal' ,headerTitleStyle: {
                fontSize: 25,
                color: '#CD5C5C',
                fontWeight: 'bold',
                textAlign: 'center'
            },  }}  />
            <Stack.Screen name='FormProfissional' component={FormProfissional}  options={{  title: 'Formulário Profissional',headerTitleStyle: {
                fontSize: 25,
                color: '#CD5C5C',
                fontWeight: 'bold',
                textAlign: 'center'
            }, }}  />
            <Stack.Screen name='Home' component={Home}  options={{  title: 'Dados do Usuario',headerTitleStyle: {
                fontSize: 25,
                color: '#CD5C5C',
                fontWeight: 'bold',
                textAlign: 'center'
            },}}  />
        </Stack.Navigator>
    );
}