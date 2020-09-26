import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Cores from '../constantes/Cores';
import NovoContatoTela from '../telas/NovoContatoTela';
import ListaDeContatosTela from '../telas/ListaDeContatosTela';

const ContatosNavigator = createStackNavigator ({
    ListaDeContatos: ListaDeContatosTela,
    NovoContato: NovoContatoTela
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backGroundColor: Platform.OS === 'android' ? Cores.primary : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Cores.primary
    }
});

export default createAppContainer (ContatosNavigator);