const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const contatos = {
    100:{"Nome": "Michell", "Email": "msoares@grupohdi.com", "id":"100"},

}

function salvarContato(contato) {
    if (!contato.id) contato.id = sequence.id
    contatos[contato.id] = contato;
    return contato
}

function getContatobyName(nome) {
        const contato =  contato => contato.Nome === nome
        return Object.values(contatos).filter(contato)
}

function getContatobyID(id) {
    const contato =  contato => contato.id === id
    return Object.values(contatos).filter(contato)
}
function getContatos() {
    return Object.values(contatos)
}

function excluirContatos(id) {
    
        const indice = getContatobyID(id)
        const contato = contatos[indice[0].id]
        delete contatos[indice[0].id]
        return contato
        
    
    
}

module.exports = { salvarContato, getContatos, getContatobyName,getContatos, excluirContatos}