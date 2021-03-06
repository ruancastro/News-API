<h1>News-API </h1>

No código acima foi feita uma API simples utilizando o  node e utilizando MySql e a lib [express](http://expressjs.com/), para testar as requisições foi utilizado o [POSTMAN](https://www.postman.com/) e o gerenciamento do banco foi feito com o MySql [Workbench](https://www.mysql.com/products/workbench/)

<h2>Para rodar o código:</h2>

<ul>

<li>npm init para criar o JSON 
 </li>

    npm init

<li>Para instalar o express: </li>

	   npm install express --save

<li>Instale o pacote mysql2 (que tem compatibilidade com o MySql Workbench</li>
			

    npm install mysql2

</ul>

<h2>Exemplo de utilização: </h2>
<p> O banco de dados possui duas tabelas que são as tabelas categoria e noticia, que estão dispostas abaixo: </p>

![enter image description here](https://github.com/ruancastro/News-API/blob/master/images/tabela_categoria.jpg)

![enter image description here](https://github.com/ruancastro/News-API/blob/master/images/tabela_noticia1.jpg)

<p>No postman criei três requisições que são: <ul>
<li>Categorias</li>
<li>noticias</li>
<li>busca uma noticia</li>
</ul>
Temos abaixo imagens representativas da resposta das requisições feitas:
</p>

<h2>Em "categorias" eu tenho o retorno de todas as categorias via GET </h2>

![enter image description here](https://github.com/ruancastro/News-API/blob/master/images/busca_categorias_bd_postman.jpg)


<h2>Em "notícias" eu tenho o retorno da notícia que tem por id o valor passado. Verbo da requisição tipo GET </h2>

![enter image description here](https://github.com/ruancastro/News-API/blob/master/images/busca_umanoticia_postman.jpg)


<h2>Em "busca uma categoria" eu tenho o retorno da notícia que atende a uma categoria específica e tem determinado id O verbo da requisição também é do tipo GET </h2>

![enter image description here](https://github.com/ruancastro/News-API/blob/master/images/busca_titulo_noticia_por_id_postman.jpg)

<h2>Link útil: </h2>

[express guide database integration](http://expressjs.com/en/guide/database-integration.html#mysql)
