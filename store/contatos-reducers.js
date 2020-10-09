import { ADD_CONTATO, LISTA_CONTATOS } from "./contatos-actions";
import Contato from '../modelo/Contato';

const estadoInicial = {
    lugares: []
};

export default (estado = estadoInicial, action) => {
    switch (action.type) {
        case ADD_CONTATO:
            const contato = new Contato (
                action.dadosContato.id.toString(),
                action.dadosContato.nome,
                action.dadosContato.telefone,
                action.dadosContato.imagemURI
            );
            return {
                contatos: estado.contatos.concat(contato)
            }
            case LISTA_CONTATOS:
                return {
                    contatos: action.contatos.map(contato => new Contato(contato.id.toString(), contato.nome, contato.telefone, contato.imagemURI))
                }
        default:
        return estado;
    }
}