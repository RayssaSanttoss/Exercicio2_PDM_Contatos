import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Button,
    TextInput,
    ScrollView
} from 'react-native';
import { useDispatch } from 'react-redux';
import Cores from '../constantes/Cores';
import * as contatosActions from '../store/contatos-actions';
import TiraFoto from '../components/TiraFoto';
import CapturaLocalizacao from '../components/CapturaLocalizacao';
import { set } from 'react-native-reanimated';

const NovoContatoTela = (props) => {
    const dispatch = useDispatch();

    const [nome, setNome] = useState ('');
    const [telefone, setTelefone] = useState ('');
    const [imagemURI, setImagemURI] = useState();

    const fotoTirada = imagemURI => {
        setImagemURI(imagemURI);
    }

    const adicionarContato = () => {
        dispatch(contatosActions.addContato(nome, telefone, imagemURI));
        capturarNome('');
        capturarTelefone('');
        props.navigation.goBack();
    }

    const capturarNome = (nome) => {
        setNome(nome);
      }
    
    const capturarTelefone = (telefone) => {
    setTelefone(telefone);
    }

    return (
        <ScrollView>
            <View style={estilos.form}>
                <Text style={estilos.titulo}>Adicionar Contato</Text>
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
                    <TiraFoto onFotoTirada={fotoTirada}/>
                    <CapturaLocalizacao/>
                    <Button
                        title="Adicionar Contato"
                        color={Cores.primary}
                        onPress={adicionarContato}
                    />
            </View>
        </ScrollView>
    )
};

const estilos = StyleSheet.create ({
    form: {
        padding: 50,
        flexDirection: 'column',
        flex: 1
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 16,
        textAlign: 'center'
    },
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
    }
});

export default NovoContatoTela;