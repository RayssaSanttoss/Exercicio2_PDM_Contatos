import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, Platform 
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import BotaoCabecalho from '../components/BotaoCabecalho';

const ListaDeLugaresTela = (props) => {
    return (
        <View>
            <Text>Lista De Contatos</Text>
        </View>
    )
};

ListaDeLugaresTela.navigationOptions = dadosNavegacao => {
    return {
        headerTitle: "Agenda / Lista de Contatos",
        headerRight: () =>{
            return (
                <HeaderButtons
                    HeaderButtonComponent={BotaoCabecalho}>
                    <Item
                        title="Adicionar Contato"
                        iconName={Platform.OS === 'android' ? 'md-add': 'ios-add'}
                        onPress={() => {
                            dadosNavegacao.navigation.navigate("NovoContato");
                        }}
                    />
                </HeaderButtons>
               
            )
        }
    }
}

const estilos = StyleSheet.create ({

});

export default ListaDeLugaresTela;