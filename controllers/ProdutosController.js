const produtos = require('../database/produto2.json');
const fs = require('fs');
const { validationResult } = require('express-validator');


const controller = {
    
    listar: (req, res)=> {
        return res.render('index',{produtos, busca:""});
        // res.send(produtos)
    },

    getProduto: (req, res) => {

        // Capturar o id requisitado (req.params)
        const idProduto = req.params.id;
        let idPrev = null;
        let idNext = null;

        // Capturar do array a pizza com o id requisitado (produtos.find)
        const produto = produtos.find(
            (p, i) => {
                idPrev = produtos[i-1]==undefined?undefined:produtos[i-1].id;
                idNext = produtos[i+1]==undefined?undefined:produtos[i+1].id;
                return p.id == idProduto
            });

        // Retornar a produto encontrada para o cliente (res.send())
        res.render('produtos',{produto, idNext, idPrev});

    },

    busca: (req,res) => {

        // Capturar a string digitada pelo visitante
        const string = req.query.q.trim();

        // Filtrar do arrays de produtos somente as produtos
        // que que tiverem a string buscada no nome
        const produtosFiltras = produtos.filter(
            p => p.nome.toUpperCase().includes(string.toUpperCase())
        );

        // Renderizar a view index passando para ela
        // as produtos filtradas
        res.render('produtos', {produtos:produtosFiltras, busca:string});
    },

    create: (req, res) => {
        res.render('produtos')
    },

    store: (req,res) => {

        const erros = validationResult(req);
        
        if(!erros.isEmpty()){
            // return res.send(erros.mapped());
            res.render('produtos', {erros: erros.mapped()})
        }

        const nome = req.body.nome;
        const ingredientes = req.body.ingredientes.split(',').map(a => a.trim());
        const preco = Number(req.body.preco);
        const produto = {nome, ingredientes, preco, img:'/img/' + req.file.filename}
        
        // Adicionar o id à produto recém criada
        produto.id = produtos[produtos.length - 1].id + 1;

        // Adicionar a produto ao array de produtos
        produtos.push(produto);

        // Salvar o json do array de produtos no arquivo produtos.json
        fs.writeFileSync(
            __dirname + '/../database/produtos2.json',
            JSON.stringify(produtos, null, 4),
            {flag:'w'}
        );
        
        // Direcionar o usuário para a página que exibe a lista de produtos
        res.redirect('/produtos');

    }



}

module.exports = controller;