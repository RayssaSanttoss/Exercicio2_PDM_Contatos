import React from 'react';
import ContatosNavigator from './navegacao/ContatosNavigator';

import { 
  createStore, 
  combineReducers, 
  applyMiddleware 
} from 'redux';

import { Provider } from 'react-redux';

import reduxThunk from 'redux-thunk';
import contatosReducers from './store/contatos-reducers';

const rootReducer = combineReducers({
    contatos: contatosReducers,
});

const store = createStore (rootReducer, applyMiddleware(reduxThunk));

export default function App() {
 return (
  <Provider store={store}>
    <ContatosNavigator/>
  </Provider>
 );
}

/*
import React, {useState} from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import ContatoInput from './components/ContatoInput';
import ContatoItem from './components/ContatoItem';

export default function App() {
  
  const[contatos, setContatos] = useState ([]);
  const[contadorContatos, setContadorContatos] = useState(10);

  const adicionarContato = (nome, telefone) => {
    setContatos(contatos => {
      setContadorContatos(contadorContatos + 2);
      return[...contatos, {key: contadorContatos.toString(), value: [nome, telefone]}]
    });
    console.log (contadorContatos);
  }

  const removerContato = (keyASerRemovida) => {
    setContatos(contatos => {
      return contatos.filter((contatos) => {
        return contatos.key !== keyASerRemovida
      })
    })
  }

  return (
    <View style={estilos.telaPrincipalView}>
      <ContatoInput onAdicionarContato={adicionarContato}/>
      <FlatList
          data={contatos}
          renderItem={
            (contato) => (
              <ContatoItem
                nome={contato.item.value}
                telefone={contato.item.value}
                chave={contato.item.key}
                onDelete={removerContato}
              />
            )
          }
        />
    </View>
  );
}

const estilos = StyleSheet.create({
  telaPrincipalView: {
   padding: 50,
   flexDirection: 'column',
   flex: 1
  }
});

*/