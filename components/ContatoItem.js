import React from 'react';
import {
    View,
    Text,
    StyleSheet, TouchableOpacity
} from 'react-native';

const ContatoItem = (props) => {
    return (
       <TouchableOpacity onLongPress={() => props.onDelete(props.chave)}>
        <View style={estilos.itemNaListaView}>
            <Text>{props.nome, ' ' + props.telefone}</Text>
        </View>
       </TouchableOpacity>
    );
};

const estilos = StyleSheet.create({
    itemNaListaView: {
        padding: 12,
        backgroundColor: '#ECE',
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