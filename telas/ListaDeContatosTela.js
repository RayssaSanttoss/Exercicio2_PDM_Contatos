import React, { useEffect } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, Platform, FlatList
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import BotaoCabecalho from '../components/BotaoCabecalho';

import { useDispatch, useSelector } from 'react-redux';
import ContatoItem from '../components/ContatoItem';

import * as contatosActions from '../store/contatos-actions';

const ListaDeContatosTela = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(contatosActions.listarContatos())
    });

    const contatos = useSelector(estado => estado.contatos.contatos);


    return (
        <FlatList 
            data={contatos}
            keyExtractor={contato => contato.id}
            renderItem={
                contato => (
                    <ContatoItem 
                        nome={contato.item.nome}
                        telefone={contato.item.telefone}
                        onDelete={console.log(contato.item.id)}
                        imagem={contato.item.imagemURI}
                    />
                )
            }
        />
    )
};

ListaDeContatosTela.navigationOptions = dadosNavegacao => {
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

export default ListaDeContatosTela;