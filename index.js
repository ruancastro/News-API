//inclusão dos pacotes
const express = require('express')
var mysql = require('mysql2');


//instancia o express
const app = express()
//definindo a porta
const port = 3000

//conexão com o banco de dados
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'msqlsenha!',
    database: 'sistema_noticias'
  })

connection.connect()

//serviço de hello world
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Serviço de busca de categorias 
app.get('/news-api/v1/categorias', (req, res) => {
    // busca categorias
    connection.query('SELECT id, nome FROM sistema_noticias.categoria', function (err, rows, fields) {
        if (err) throw err

        res.send(rows)
       
      })    
  })

//Serviço de busca de noticias 
app.get('/news-api/v1/categorias/:categoriaId/noticias', (req, res) => {

    // busca noticias de uma categoria categorias
    connection.query(`SELECT id,titulo FROM sistema_noticias.noticia WHERE id_categoria = ${req.params.categoriaId}`, function (err, rows, fields) {
        if (err) throw err

        res.send(rows)
       
      })    
  })

  //Serviço de busca uma notícia 
app.get('/news-api/v1/categorias/:categoriaId/noticias/:noticiaId', (req, res) => {

    // busca noticia
    connection.query(`SELECT id,titulo,conteudo FROM sistema_noticias.noticia WHERE id_categoria = ${req.params.categoriaId}  AND id = ${req.params.noticiaId}`, function (err, rows, fields) {
        if (err) throw err

        res.send(rows[0])
       
      })    
  })


// subindo servidor node
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
