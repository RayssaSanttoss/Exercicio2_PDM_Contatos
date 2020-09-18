import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [nome, setNome] = useState ('');
  const [telefone, setTelefone] = useState ('');
  const[contatos, setContatos] = useState ([]);
  const[contadorContatos, setContadorContatos] = useState(10);

  const capturarNome = (nome) => {
    setNome(nome);
  }

  const capturarTelefone = (telefone) => {
    setTelefone(telefone);
  }

  const adicionarContato = () => {
    setContatos(contatos => {
      setContadorContatos(contadorContatos + 2);
      return[...contatos, {key: contadorContatos.toString(), value: [nome, telefone]}]
    });
    console.log (contadorContatos);
  }

  return (
    <View style={estilos.telaPrincipalView}>
      <View style={estilos.entradaView}>
        {/*usuário irá inserir seus contatos aqui */}
        <TextInput 
        placeholder = "Nome"
        style={estilos.nomeTextInput}
        onChangeText={capturarNome}
        value={nome}
        /><TextInput 
        placeholder = "Telefone"
        style={estilos.telefoneTextInput}
        onChangeText={capturarTelefone}
        value={telefone}
        />
      
        <Button
          title="Adicionar Contato"
          onPress={adicionarContato}
        />
      </View>
      <View>

        <FlatList
          data={contatos}
          renderItem={
            (nome) => (
              <View style={estilos.itemNaListaView}>
                <Text>{nome.item.value}</Text>
              </View>
            )}
            renderItem={
            (telefone) => (
              <View style={estilos.itemNaListaView}>
                <Text>{' ' + telefone.item.value}</Text>
              </View>
            )
          }
        />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  telaPrincipalView: {
   padding: 50
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
  },
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
  },
  entradaView: {
    marginBottom: 8
  }
});
