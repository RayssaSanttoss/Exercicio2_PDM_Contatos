import React from 'react';
import {
    View,
    Text,
    StyleSheet, TouchableOpacity
} from 'react-native';

const ContatoItem = (props) => {
    return (
            <TouchableOpacity onLongPress={() => props.onDelete(props.chave)}>
                <View style={estilos.tela}>
                    <Text style={estilos.nomeNaListaView}>Nome: {props.nome[0]}</Text>
                    <Text style={estilos.telefoneNaListaView}>Telefone: {props.telefone[1]}</Text>
                </View>
            </TouchableOpacity>
    );
};

const estilos = StyleSheet.create({
    tela: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nomeNaListaView: {
        padding: 12,
        backgroundColor: '#ECE',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
        marginBottom: 8,
        borderRadius: 8,
        textAlign: 'center',
        marginRight: 12  
    },
    telefoneNaListaView: {
        padding: 12,
        backgroundColor: '#DDD',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
        marginBottom: 8,
        borderRadius: 8,
        textAlign: 'center'    
    }
})

export default ContatoItem;