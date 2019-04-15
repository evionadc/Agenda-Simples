const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const bd = require('./src/date/bd.js')

app.use(express.static('./src/pages'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.post('/cadastro', (req, res) => {
    const contato = bd.salvarContato({
        ...req.body
    })

    res.send(contato)

})

app.post('/consulta', (req, res) => {
    const contato = bd.getContatobyName(req.body.Nome)
    res.send(contato)
})

app.get('/consulta', (req,res) =>{
    res.send(bd.getContatos())
})

app.post('/exclusao',(req,res) =>{
    const contato = bd.excluirContatos(req.body.id)
    res.send(contato) 
})


app.listen('8081', () => console.log('Executando.....'))