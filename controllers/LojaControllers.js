const lojinhas = require('../database/Pizzas.json');




const controller = {


    listar: (req, res)=> {
        return res.render('loja',{lojinhas, busca:""});
        // res.send(lojinha)
    },

    getLojinha: (req, res) => {

        // Capturar o id requisitado (req.params)
        const idLojinha = req.params.id;
        let idPrev = null;
        let idNext = null;

        // Capturar do array a pizza com o id requisitado (lojinha.find)
        const produto = lojinhas.find(
            (p, i) => {
                idPrev = lojinhas[i-1]==undefined?undefined:lojinhas[i-1].id;
                idNext = lojinhas[i+1]==undefined?undefined:lojinhas[i+1].id;
                return p.id == idLojinha
            });

        // Retornar a pizza encontrada para o cliente (res.send())
        res.render('loja',{produto, idNext, idPrev});

    },

    busca: (req,res) => {

        // Capturar a string digitada pelo visitante
        const lojastring = req.query.q.trim();

        // Filtrar do arrays de lojinha somente as lojinha
        // que que tiverem a string buscada no nome
        const lojinhaFiltras = lojinhas.filter(
            p => p.nome.toUpperCase().includes(lojastring.toUpperCase())
        );

        // Renderizar a view index passando para ela
        // as lojinha filtradas
        res.render('loja', {lojinhas:lojinhaFiltras, busca:lojastring});
    },

}
module.exports = controller;