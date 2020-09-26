import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Button,
    TextInput,
    ScrollView
} from 'react-native';
import Cores from '../constantes/Cores';
import ContatoInput from '../components/ContatoInput';

const NovoContatoTela = (props) => {
    const[contatos, setContatos] = useState ([]);
    const[contadorContatos, setContadorContatos] = useState(10);
    const [nome, setNome] = useState ('');
    const [telefone, setTelefone] = useState ('');

    const adicionarContato = (nome, telefone) => {
        setContatos(contatos => {
            setContadorContatos(contadorContatos + 2);
            return[...contatos, {key: contadorContatos.toString(), value: [nome, telefone]}]
        });
        console.log (contadorContatos);
        capturarNome('');
        capturarTelefone('');
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
                        onPress={adicionarContato}
                    />
                </View>
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