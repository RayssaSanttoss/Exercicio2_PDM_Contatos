import React, { useState } from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';
import Cores from '../constantes/Cores';

const ContatoInput = (props) => {
    const [nome, setNome] = useState ('');
    const [telefone, setTelefone] = useState ('');
    
    const capturarNome = (nome) => {
        setNome(nome);
      }
    
    const capturarTelefone = (telefone) => {
    setTelefone(telefone);
    }

    return (
        <View style={estilos.entradaView}>
            <TextInput 
                placeholder = "Nome"
                style={estilos.nomeTextInput}
                onChangeText={capturarNome}
                value={nome}
            />
            <TextInput 
                placeholder = "Telefone"
                style={estilos.telefoneTextInput}
                onChangeText={capturarTelefone}
                value={telefone}
            />
            <Button
                title="Adicionar Contato"
                color={Cores.primary}
                onPress={() => props.onAdicionarContato(nome, telefone)}
            />
      </View>
    )
};

const estilos = StyleSheet.create({
    nomeTextInput: {
        borderBottomColor: 'black',
        borderBottomWidth:1, 
        marginBottom: 4,
        padding: 12,
        textAlign: 'center'
      },
      telefoneTextInput: {
        borderBottomColor: 'black',
        borderBottomWidth:1, 
        marginBottom: 4,
        padding: 12,
        textAlign: 'center'
      },
      entradaView: {
        marginBottom: 8
      }
});

export default ContatoInput;